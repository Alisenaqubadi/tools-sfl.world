import { Button, Card, Group, Switch, Text, TextInput, Title } from '@mantine/core'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({ displayName: z.string().min(2, 'Enter at least 2 characters'), email: z.email('Enter a valid email') })
export default function Settings() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm({ resolver: zodResolver(schema), defaultValues: { displayName: 'Alex Rivera', email: 'alex@example.com' } })
  return <><Title order={1} mb="xs">Settings</Title><Text c="dimmed" mb="xl">Manage your account preferences.</Text><Card withBorder radius="lg" p="lg" maw={620}><form onSubmit={handleSubmit(() => undefined)}><Text fw={700} mb="md">Profile</Text><TextInput label="Display name" {...register('displayName')} error={errors.displayName?.message} mb="md" /><TextInput label="Email address" {...register('email')} error={errors.email?.message} mb="lg" /><Group justify="space-between" mb="lg"><div><Text fw={600}>Price alerts</Text><Text size="sm" c="dimmed">Receive notable price movement alerts.</Text></div><Switch defaultChecked color="violet" /></Group><Button type="submit" color="violet">{isSubmitSuccessful ? 'Saved' : 'Save changes'}</Button></form></Card></> }
