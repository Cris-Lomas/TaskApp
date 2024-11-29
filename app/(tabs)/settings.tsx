import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '../../context/i18nContext'
import { useRoute } from '@react-navigation/native';
import SettingComponent from '@/components/SettingComponent';
import { useCustomTheme } from '@/context/themeContext';

export default function SettingsScreen() {

  const { t } = useI18n()
  const route = useRoute()
  const { toggleTheme } = useCustomTheme()

  return (
    <ParallaxScrollView title={t("settings")}>
      <SettingComponent name={t('themeSetting')} action={toggleTheme} />
    </ParallaxScrollView>
  );
}