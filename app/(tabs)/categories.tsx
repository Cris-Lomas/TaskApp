import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '../../context/i18nContext'

export default function CategoriesScreen() {

  const { t } = useI18n()

  return (
    <ParallaxScrollView title={t("categories")}>
      <ThemedText>{t("menu")}</ThemedText>
    </ParallaxScrollView>
  );
}