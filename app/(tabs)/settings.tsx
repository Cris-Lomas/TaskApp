import ParallaxScrollView from '@/components/ParallaxScrollView'
import { useI18n } from '../../context/i18nContext'
import { DarkTheme } from '@react-navigation/native'
import SettingComponent from '@/components/SettingComponent'
import { useCustomTheme } from '@/context/themeContext'
import { Setting } from '@/domain/Setting'

export default function SettingsScreen() {

  const { language, setLanguage, t } = useI18n()
  const { theme, setTheme } = useCustomTheme()
  const _settings : Setting[] = [
    {
      id: 1,
      label: 'theme',
      icon: theme == DarkTheme ? 'moon' : 'sunny',
      defaultOption: theme == DarkTheme ? 'dark' : 'light',
      options: ['dark', 'light'],
      onSelect: setTheme
    },
    {
      id: 2,
      label: 'language',
      icon: 'flag',
      defaultOption: language,
      options: ['en', 'es'],
      onSelect: setLanguage
    }
  ]

  return (
    <ParallaxScrollView title={t("settings")}>
      {_settings.map((setting) => (
          <SettingComponent key={setting.id} setting={setting}/>
      ))}
    </ParallaxScrollView>
  );
}