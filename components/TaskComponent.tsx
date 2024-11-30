import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes'
import { ThemedText } from './ThemedText'
import { Task } from '@/domain/Task'

type Props = {
  task : Task
}

export default function TaskComponent({ task }: Props) {

  return (
    <>
    <ThemedView style={styles.header}>
      <ThemedText type="title">
        {task.name}
      </ThemedText>
    </ThemedView>
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