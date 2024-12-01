import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes'
import { ThemedText } from './ThemedText'
import { Category } from '@/domain/Category'
import { useRouter } from 'expo-router'

type Props = {
  category : Category
}

export default function CategoryViewComponent({ category }: Props) {
  const router = useRouter()

  const goToCategory = () => {
    // Ruta dinámica con parámetros
    router.navigate(`/tasksInCategory?categoryId=${category.id}`)
  }

  return (
    <>
    <ThemedView style={styles.container} onPointerDown={goToCategory}>
      <ThemedText type="title">
        {category.name}
      </ThemedText>
    </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: MIN_PADDING * 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    cursor: 'pointer'
  },
  header: {
    
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
