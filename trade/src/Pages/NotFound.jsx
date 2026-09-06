import { Button, Center, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function NotFound() { return <Center mih="70vh"><Stack align="center"><Text fz={80} fw={800} c="violet">404</Text><Title>Page not found</Title><Text c="dimmed">The page you requested does not exist.</Text><Button component={Link} to="/" color="violet">Back to dashboard</Button></Stack></Center> }
