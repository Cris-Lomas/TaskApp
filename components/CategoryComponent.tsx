import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from './ThemedText'
import { Category } from '@/domain/Category'
import CustomModal from './Modal'
import { MAX_LENGTH_NAMES, MIN_PADDING } from '@/constants/Sizes'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '@/constants/Colors'
import { useCustomTheme } from '@/context/themeContext'
import { DarkTheme } from '@react-navigation/native'
import { mockedTaskService } from '@/services/MockedTaskService'

type Props = {
  category : Category
  renameCategory : (category : Category, newName : string) => void
  deleteCategory : (category : Category) => void
}

export default function CategoryComponent({ category, renameCategory, deleteCategory }: Props) {

  const [isDeleteModalVisible, setDeleteModalVisible] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [categoryName, setCategoryName] = useState<string>(category.name)
  const theme = useCustomTheme().theme == DarkTheme ? 'dark' : 'light'

  const showDeleteModal = () : void => setDeleteModalVisible(true)

  const startEditing = () : void => setIsEditing(true)
  const finishEditing = () : void => setIsEditing(false)

  const handleDelete = () : void => {
    deleteCategory(category)
  }

  const cancelEditing = () : void => {
    setCategoryName(category.name)
    finishEditing()
  }

  const confirmEditing = () => {
      renameCategory(category, categoryName)
      const newCategory = mockedTaskService.getCategory(category.id)
      if(newCategory)
        setCategoryName(newCategory.name)
      finishEditing()
  }

  return (
    <>
    <CustomModal isVisible={isDeleteModalVisible} msg={'confirmDeleteCategory'} setIsVisible={setDeleteModalVisible} onConfirm={handleDelete}/>
    <ThemedView style={styles.container}>
      
      {
        isEditing 
        ?
        <>
          <TouchableOpacity onPress={confirmEditing}>
            <Icon name="checkmark-circle-outline" size={24} style={[styles.icon, {color: Colors[theme].icon}]} />
          </TouchableOpacity>
          <TextInput style={[styles.input, {color: Colors[theme].text}]} value={categoryName} onChangeText={setCategoryName} maxLength={MAX_LENGTH_NAMES}/>
          <TouchableOpacity onPress={cancelEditing}>
            <Icon name="close-circle-outline" size={24} style={[styles.icon, {color: Colors[theme].icon}]} />
          </TouchableOpacity>
        </>

        :
        <>
          <ThemedText style={styles.title} type="title"> {categoryName} </ThemedText>
          <TouchableOpacity onPress={startEditing}>
            <Icon name="pencil" size={24} style={[styles.icon, {color: Colors[theme].icon}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={showDeleteModal}>
            <Icon name="trash" size={24} style={[styles.icon, {color: Colors[theme].icon}]} />
          </TouchableOpacity>
        </>
      }
    
    </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: MIN_PADDING * 4,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    cursor: 'pointer',
  },
  title:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  icon: {
    padding: MIN_PADDING * 2,
    color: '#888' // Cambia esto según el tema si es necesario
  },
  input: {
    textAlign: 'center',
    flex: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
})
