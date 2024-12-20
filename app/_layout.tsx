import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { I18nProvider } from '@/context/i18nContext'
import { CustomThemeProvider } from '@/context/themeContext'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded)
      SplashScreen.hideAsync()

  }, [loaded])

  if (!loaded) {
    return null;
  }

  return (
    <>
      <CustomThemeProvider>
        <I18nProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            <Stack.Screen name="+not-found" options={{ headerShown: false }}/>
            <Stack.Screen name="tasksInCategory" options={{ headerShown: false }}/>
          </Stack>
          <StatusBar style="auto" />
        </I18nProvider>
      </CustomThemeProvider>
    </>
  );
}
