import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { TasksProvider } from '@/features/tasks/context/tasks-context';
import { colors } from '@/theme/tokens';

export default function RootLayout() {
  return (
    <TasksProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </TasksProvider>
  );
}
