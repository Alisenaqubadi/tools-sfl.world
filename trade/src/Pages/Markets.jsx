import { Badge, Card, Group, SimpleGrid, Text, TextInput, Title } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

const assets = [['S&P 500', '5,648.40', '+0.42%'], ['NASDAQ', '18,532.31', '+0.71%'], ['Gold', '$2,493.80', '+0.18%'], ['EUR / USD', '1.0832', '-0.13%']]
export default function Markets() { return <><Title order={1} mb="xs">Markets</Title><Text c="dimmed" mb="xl">Follow the markets and discover new opportunities.</Text><TextInput placeholder="Search symbols or companies" leftSection={<IconSearch size={16} />} mb="lg" /><SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>{assets.map(([name, value, change]) => <Card key={name} withBorder radius="lg" p="lg"><Text c="dimmed" size="sm">{name}</Text><Group justify="space-between" mt="md"><Text fw={700} fz="xl">{value}</Text><Badge color={change.startsWith('+') ? 'teal' : 'red'} variant="light">{change}</Badge></Group></Card>)}</SimpleGrid></> }
