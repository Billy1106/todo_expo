import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="about"
        options={{
          headerStyle: { backgroundColor: "#ddd" },
          title: "私たちについて",
        }}
      />
    </Stack>
  );
}
