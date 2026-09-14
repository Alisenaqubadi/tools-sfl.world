import { useState } from "react";
import PriceChart from "../components/common/charts/PriceChart.jsx";
import { useGetData, useGetList } from "../hooks/useResources.query.js";
import LoadingPage from "../Pages/Loading.jsx";
import { Group, Image, Select, SegmentedControl } from "@mantine/core";
import { formatResourceOptions } from "../services/FormatData.js";
import icons from "../assets/image_paths.json";
import { findMostSimilar } from "../services/search.js";

export default function Body() {
  const [resource, setResource] = useState({
    value: "201",
    label: "Sunflower",
  });

  const [chartPeriod, setChartPeriod] = useState("1M");
  const [chartType, setChartType] = useState("l");
  const [search, setSearch] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { data, isLoading: isLoadingList } = useGetList();
  const { isLoading } = useGetData(resource.value);

  if (isLoading || isLoadingList) return <LoadingPage />;

  const formattedList = formatResourceOptions(data);

  const items = formattedList.flatMap((group) => group.items);

  const iconMap = new Map(
    icons.map((icon) => [icon.name.toLowerCase(), icon.path]),
  );

  return (
    <>
      <Select
        searchable
        value={resource.value}
        searchValue={search}
        onSearchChange={setSearch}
        data={formattedList}
        leftSection={
          !isFocused && (
            <Image
              src={iconMap.get(resource.label.toLowerCase())}
              w={24}
              h={24}
              fit="contain"
            />
          )
        }
        renderOption={({ option }) => {
          const icon = iconMap.get(option.label.toLowerCase());

          return (
            <Group gap="sm">
              {icon && <Image src={icon} w={24} h={24} fit="contain" />}

              <span>{option.label}</span>
            </Group>
          );
        }}
        onFocus={() => {
          setIsFocused(true);
          setPreviousSearch(search);
          setSearch("");
        }}
        onKeyDown={(event) => {
          if (event.key !== "Enter" || !search.trim()) return;

          const selected = findMostSimilar(search, items);

          if (selected) {
            event.preventDefault();
            setResource(selected);
            setSearch("");
          }
        }}
        onChange={(value) => {
          const selected = items.find((item) => item.value === value);

          if (selected) {
            setResource(selected);
            setSearch("");
          }
        }}
        onBlur={() => {
          setIsFocused(false);
          setSearch(previousSearch);
        }}
      />

      <SegmentedControl
        data={[
          { label: "Line chart", value: "l" },
          { label: "Candlestick chart", value: "" },
        ]}
        value={chartType}
        withItemsBorders={false}
        onChange={setChartType}
      />

      {chartType == "" || (
        <SegmentedControl
          value={chartPeriod}
          withItemsBorders={false}
          data={["24H", "7D", "1M", "Max"]}
          onChange={setChartPeriod}
        />
      )}

      <PriceChart
        resource={resource.value}
        chartPeriod={chartPeriod}
        chartType={chartType}
      />
    </>
  );
}
