import { useState } from "react";
import { useGetData, useGetList } from "../hooks/useResources.query.js";
import LoadingPage from "../Pages/Loading.jsx";

export default function Body() {
  const [resource , setResource] = useState("210")
  const { data: list, isLoading: isLoading1 } = useGetList()
  const { data: MainData, isLoading: isLoading2 } = useGetData(resource)

  if(isLoading1 || isLoading2) {
    return <LoadingPage />
    
  }




  return <>
    
  </>;
}
