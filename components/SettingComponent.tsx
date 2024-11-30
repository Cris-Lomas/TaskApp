import { StyleSheet, TouchableOpacity } from 'react-native'
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes'
import { ThemedText } from './ThemedText'
import { Setting } from '@/domain/Setting'
import { ThemedView } from './ThemedView'
import { useI18n } from '@/context/i18nContext'
import { DropdownSetting } from './DropdownSetting'
import { I18nString } from '@/utils/translations'

type Props = {
  setting : Setting
  defaultOption : I18nString
}

export default function SettingComponent({ setting, defaultOption }: Props) {

  const { t } = useI18n()

  return (
    <ThemedView>
      <ThemedText type="title">
        {t(setting.name)}:
        <DropdownSetting defaultSelection={defaultOption} options={setting.options} onSelect={setting.action} />
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT * 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: MIN_PADDING
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
})