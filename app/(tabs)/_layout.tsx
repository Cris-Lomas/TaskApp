import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { useI18n } from '@/context/i18nContext'
import { useThemeColor } from '@/hooks/useThemeColor'

export default function TabLayout() {
  const tintColor = useThemeColor('tint');
  const { t } = useI18n()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColor,
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('tasks'),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: t('categories'),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('settings'),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="shield.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
