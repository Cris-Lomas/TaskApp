import ParallaxScrollView from '@/components/ParallaxScrollView'
import { useI18n } from '../../context/i18nContext'
import { Category } from '@/domain/Category'
import { useState } from 'react'
import { useOnInit } from '@/hooks/useOnInit'
import { mockedTaskService } from '@/services/MockedTaskService'
import CategoryComponent from '@/components/CategoryComponent'
import { Snackbar } from 'react-native-paper'

export default function CategoriesScreen() {

  const { t } = useI18n()
  const [categories, setCategories] = useState<Category[]>([])
  const [hasCategories, setHasCategories] = useState<boolean>(false)
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false)
  const [snackbarMsg, setSnackbarMsg] = useState<string>('')

  const getData = () : void => {
    const _categories = mockedTaskService.getCategories()
    const _hasCategories = _categories.length > 0
    setCategories(_categories)
    setHasCategories(_hasCategories)
  }

  useOnInit(() => getData())

  const closeSnackbar = () => setSnackbarVisible(false)

  const deleteCategory = (category : Category) : void =>{
    mockedTaskService.deleteCategory(category.id)
    getData()
    const deleteMsg = `${t('category')}: '${category.name}' ${t('deletedSuccessfully')}`
    setSnackbarMsg(deleteMsg)
    setSnackbarVisible(true)
  }

  const editCategory = (category : Category) : void =>{
    mockedTaskService.updateCategory(category)
    getData()
  }

  return (
    <>
      <ParallaxScrollView title={t("categories")}>
        {categories.map((category) => (
            <CategoryComponent key={category.id} category={category} deleteCategory={deleteCategory} editCategory={editCategory}/>
        ))}
      </ParallaxScrollView>
      <Snackbar
        visible={snackbarVisible}
        duration={5000}
        onDismiss={closeSnackbar}
        action={{
          label: 'X',
          onPress: closeSnackbar,
        }}>
        {snackbarMsg}
      </Snackbar>
    </>
  );
}