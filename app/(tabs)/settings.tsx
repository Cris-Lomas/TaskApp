import ParallaxScrollView from '@/components/ParallaxScrollView'
import { useI18n } from '../../context/i18nContext'
import { DarkTheme, useRoute } from '@react-navigation/native'
import SettingComponent from '@/components/SettingComponent'
import { useCustomTheme } from '@/context/themeContext'
import { Setting } from '@/domain/Setting'
import { I18nString } from '@/utils/translations'

export default function SettingsScreen() {

  const { t } = useI18n()
  const { theme, setTheme } = useCustomTheme()
  const _settings : Setting[] = [
    {
      name: 'theme',
      icon: theme == DarkTheme ? 'moon' : 'sunny',
      defaultOption: theme == DarkTheme ? 'dark' : 'light',
      options: ['dark', 'light'],
      action: setTheme
    }
  ]

  return (
    <ParallaxScrollView title={t("settings")}>
      <SettingComponent setting={_settings[0]} />
    </ParallaxScrollView>
  );
}