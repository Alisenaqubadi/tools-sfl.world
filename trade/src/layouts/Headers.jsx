import { ActionIcon, AppShell, Group, Text, Title } from "@mantine/core";
import { IconBell, IconSettings } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <AppShell.Header>
      <Group h="100%" px="lg" justify="space-between">
        <Group gap="xs">
          <motion.img
            src="https://sfl.world/favicon.ico"
            key="firstKey1"
            alt="Logo"
            height={50}
            animate={{ rotate: 360 }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <Title order={3}>SFL.WORLD / Price History</Title>
          <Text c="dimmed" size="sm">
            v2.0
          </Text>
        </Group>

        <Group gap="xs">
          <ActionIcon aria-label="Notifications" variant="subtle" size="lg">
            <IconBell size={20} />
          </ActionIcon>
          <ActionIcon aria-label="Settings" variant="subtle" size="lg">
            <IconSettings size={20} />
          </ActionIcon>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
