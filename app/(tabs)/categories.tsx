import ParallaxScrollView from '@/components/ParallaxScrollView'
import { useI18n } from '../../context/i18nContext'
import { Category } from '@/domain/Category'
import { useState } from 'react'
import { useOnInit } from '@/hooks/useOnInit'
import { mockedTaskService } from '@/services/MockedTaskService'
import CategoryEditComponent from '@/components/CategoryEditComponent'
import Toast from 'react-native-toast-message'

export default function CategoriesScreen() {

  const { t } = useI18n()
  const [categories, setCategories] = useState<Category[]>([])
  const [hasCategories, setHasCategories] = useState<boolean>(false)

  const getData = () : void => {
    const _categories = mockedTaskService.getCategories()
    const _hasCategories = _categories.length > 0
    setCategories(_categories)
    setHasCategories(_hasCategories)
  }

  useOnInit(() => getData())

  const showSuccess = (msg : string) => {
    Toast.show({
        type: "success",
        text1: msg
    })
  }

  const deleteCategory = (category : Category) : void =>{
    mockedTaskService.deleteCategory(category.id)
    getData()
    const deleteMsg = `${t('category')}: '${category.name}' ${t('deletedSuccessfully')}`
    console.log(deleteMsg)
    showSuccess(deleteMsg)
  }

  const editCategory = (category : Category) : void =>{
    mockedTaskService.updateCategory(category)
    getData()
  }

  return (
    <ParallaxScrollView title={t("categories")}>
      {categories.map((category) => (
          <CategoryEditComponent key={category.id} category={category} deleteCategory={deleteCategory} editCategory={editCategory}/>
      ))}
    </ParallaxScrollView>
  );
}