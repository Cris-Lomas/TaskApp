import { StyleSheet, TouchableOpacity } from 'react-native'
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes'
import { ThemedText } from './ThemedText'
import { Setting } from '@/domain/Setting'
import { ThemedView } from './ThemedView'
import { useI18n } from '@/context/i18nContext'
import { DropdownSetting } from './DropdownSetting'
import Icon from 'react-native-vector-icons/Ionicons' // Puedes cambiar la familia de íconos si prefieres otra

type Props = {
  setting : Setting
}

export default function SettingComponent({ setting }: Props) {

  const { t } = useI18n()

  return (
    <ThemedView>
      <Icon name={setting.icon}></Icon>
      <ThemedText type="title">
        {t(setting.name)}:
        <DropdownSetting defaultSelection={setting.defaultOption} options={setting.options} onSelect={setting.action} />
      </ThemedText>
    </ThemedView>
  )
}