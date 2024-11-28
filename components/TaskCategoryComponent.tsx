import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes';
import { ThemedText } from './ThemedText';
import { TaskCategory } from '@/domain/TaskCategory';
import { useRouter } from 'expo-router';

type Props = {
  category : TaskCategory
};

export default function TaskCategoryComponent({ category }: Props) {
  const router = useRouter();

  const goToCategory = () => {
    // Ruta dinámica con parámetros
    router.push(`/tasksInCategory?categoryId=${category.id}`);
  }

  return (
    <>
    <ThemedView style={styles.header} onTouchEnd={goToCategory}>
      <ThemedText type="title">
        {category.name}
      </ThemedText>
    </ThemedView>
    </>
  );
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
});
