import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '../../context/i18nContext'

export default function SettingsScreen() {

  const { t } = useI18n()

  return (
    <ParallaxScrollView title={t("settings")}>
      <ThemedText>{t("menu")}</ThemedText>
    </ParallaxScrollView>
  );
}