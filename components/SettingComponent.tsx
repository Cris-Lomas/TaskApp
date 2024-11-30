import { StyleSheet, TouchableOpacity } from 'react-native'
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes'
import { ThemedText } from './ThemedText'

type Props = {
  name : string
  action : () => void
}

export default function SettingComponent({ name, action }: Props) {

  return (
    <>
    <TouchableOpacity onPress={action} style={styles.container}>
      <ThemedText type="title">
        {name}
      </ThemedText>
    </TouchableOpacity>
    </>
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