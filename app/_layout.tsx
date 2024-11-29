import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { I18nProvider } from '@/context/i18nContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useOnInit } from '@/hooks/useOnInit';
import { CustomThemeProvider } from '@/context/themeContext';

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
    <CustomThemeProvider>
      <I18nProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
          <Stack.Screen name="+not-found"/>
          <Stack.Screen name="tasksInCategory"/>
        </Stack>
        <StatusBar style="auto" />
      </I18nProvider>
    </CustomThemeProvider>
  );
}
