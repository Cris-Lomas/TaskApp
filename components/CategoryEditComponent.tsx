import { StyleSheet, TouchableOpacity } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from './ThemedText'
import { Category } from '@/domain/Category'
import CustomModal from './Modal'
import { MIN_PADDING } from '@/constants/Sizes'
import { useState } from 'react'
import { router } from 'expo-router'

type Props = {
  category : Category
  editCategory : (newCategory : Category) => void
  deleteCategory : (category : Category) => void
}

export default function CategoryEditComponent({ category, editCategory, deleteCategory }: Props) {

  const [isDeleteModalVisible, setDeleteModalVisible] = useState<boolean>(false)

  const showDeleteModal = () : void => setDeleteModalVisible(true)

  const handleDelete = () =>{
    deleteCategory(category)
  }

  const handleEdit = () => {
    editCategory(category)
  }

  return (
    <>
    <CustomModal isVisible={isDeleteModalVisible} msg={'confirmDeleteCategory'} setIsVisible={setDeleteModalVisible} onConfirm={handleDelete}/>
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={showDeleteModal}>
        <ThemedText type="title">
          {category.name}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: MIN_PADDING * 4,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    cursor: 'pointer',
  }
})
