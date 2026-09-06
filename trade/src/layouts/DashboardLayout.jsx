import { AppShell, Burger, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBell, IconChartCandle, IconLayoutDashboard, IconSettings, IconWallet } from '@tabler/icons-react'
import { NavLink, Outlet } from 'react-router-dom'

const links = [
  ['/', 'Overview', IconLayoutDashboard], ['/markets', 'Markets', IconChartCandle],
  ['/portfolio', 'Portfolio', IconWallet], ['/settings', 'Settings', IconSettings],
]

export default function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure()
  return <AppShell header={{ height: 68 }} navbar={{ width: 248, breakpoint: 'sm', collapsed: { mobile: !opened } }} padding="md">
    <AppShell.Header><Group h="100%" px="lg" justify="space-between"><Group gap="sm"><Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /><ThemeIcon radius="md" size={34} variant="gradient" gradient={{ from: 'violet', to: 'cyan' }}><IconChartCandle size={20} /></ThemeIcon><Text fw={800} size="lg">VANTA <span className="muted">Trade</span></Text></Group><Group><UnstyledButton><IconBell size={20} /></UnstyledButton><ThemeIcon radius="xl" color="violet">AR</ThemeIcon></Group></Group></AppShell.Header>
    <AppShell.Navbar p="sm"><Text size="xs" fw={700} c="dimmed" px="sm" py="md">WORKSPACE</Text>{links.map(([to, label, Icon]) => <UnstyledButton component={NavLink} to={to} key={to} className="nav-link"><Icon size={19} /><span>{label}</span></UnstyledButton>)}</AppShell.Navbar>
    <AppShell.Main><Outlet /></AppShell.Main>
  </AppShell>
}
