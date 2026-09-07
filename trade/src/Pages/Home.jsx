import { AppShell, Text } from "@mantine/core";
import Header from "../layouts/Headers.jsx";
import Body from "../layouts/Body.jsx";
import Footer from "../layouts/Footer.jsx";

export default function Home() {
  return (
    <AppShell header={{ height: 64 }} footer={{ height: 52 }} padding="md">
      <Header />
      <AppShell.Main>
        <Body />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
