import ParallaxScrollView from '@/components/ParallaxScrollView'
import { useI18n } from '../../context/i18nContext'
import { DarkTheme, useRoute } from '@react-navigation/native'
import SettingComponent from '@/components/SettingComponent'
import { useCustomTheme } from '@/context/themeContext'
import { Setting } from '@/domain/Setting'
import { I18nString } from '@/utils/translations'

export default function SettingsScreen() {

  const { language, setLanguage, t } = useI18n()
  const { theme, setTheme } = useCustomTheme()
  const _settings : Setting[] = [
    {
      label: 'theme',
      icon: theme == DarkTheme ? 'moon' : 'sunny',
      defaultOption: theme == DarkTheme ? 'dark' : 'light',
      options: ['dark', 'light'],
      onSelect: setTheme
    },
    {
      label: 'language',
      icon: 'flag',
      defaultOption: language,
      options: ['en', 'es'],
      onSelect: setLanguage
    }
  ]

  return (
    <ParallaxScrollView title={t("settings")}>
      {_settings.map((setting, index) => (
        <>
          <SettingComponent key={index} setting={setting}/>
        </>
      ))}
    </ParallaxScrollView>
  );
}