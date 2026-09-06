import { Card, Group, Text } from '@mantine/core'

export default function MetricCard({ label, value, delta, icon: Icon }) {
  const positive = !delta?.startsWith('-')
  return <Card withBorder radius="lg" p="lg" className="metric-card"><Group justify="space-between"><Text c="dimmed" size="sm">{label}</Text>{Icon && <Icon size={18} color="#a78bfa" />}</Group><Text fw={700} fz={24} mt={8}>{value}</Text>{delta && <Text size="sm" mt={4} className={positive ? 'positive' : 'negative'}>{delta} today</Text>}</Card>
}
