import { StyleSheet, TouchableOpacity } from 'react-native'
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes'
import { ThemedText } from './ThemedText'
import { Setting } from '@/domain/Setting'
import { ThemedView } from './ThemedView'

type Props = {
  setting : Setting
}

export default function SettingComponent({ setting }: Props) {

  return (
    <ThemedView>
      <ThemedText type="title">
        {setting.name}
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