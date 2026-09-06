import { Card, Group, Progress, Stack, Text, Title } from '@mantine/core'
import { formatMoney } from '../utils/money'

const allocations = [['Technology', 48, '$61,656'], ['Cash', 19, '$24,406'], ['Healthcare', 18, '$23,121'], ['Crypto', 15, '$19,267']]
export default function Portfolio() { return <><Title order={1} mb="xs">Portfolio</Title><Text c="dimmed" mb="xl">Your investments at a glance.</Text><Card withBorder radius="lg" p="xl"><Group justify="space-between" mb="xl"><div><Text c="dimmed">Net liquidation value</Text><Text fz={32} fw={800}>{formatMoney('128450.68')}</Text></div><Text className="positive" fw={700}>+$18,450.68 all time</Text></Group><Stack gap="lg">{allocations.map(([name, value, amount]) => <div key={name}><Group justify="space-between" mb={6}><Text fw={600}>{name}</Text><Text c="dimmed">{amount} · {value}%</Text></Group><Progress value={value} color="violet" radius="xl" /></div>)}</Stack></Card></> }
