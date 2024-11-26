import { StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useI18n } from '@/context/i18nContext';

export default function TasksScreen() {

  const { t } = useI18n()

  return (
    <ParallaxScrollView title={t('tasks')}>
      <ThemedView>
        <ThemedText>{t("menu")}</ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}