import ParallaxScrollView from '@/components/ParallaxScrollView'
import { useI18n } from '../../context/i18nContext'
import { Category } from '@/domain/Category'
import { useState } from 'react'
import { useOnInit } from '@/hooks/useOnInit'
import { mockedTaskService } from '@/services/MockedTaskService'
import CategoryComponent from '@/components/CategoryComponent'
import { Snackbar } from 'react-native-paper'
import { MaxLengthExceededException } from '@/errors/MaxLengthExceeded'
import { MinLengthNeededException } from '@/errors/MinLengthNeeded'

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

  const renameCategory = (category : Category, newName : string) : void =>{
    try{

      category = category.rename(newName)
      mockedTaskService.updateCategory(category)
      const successMsg = `${t('category')} ${newName} ${t('updatedSuccessfully')}`
      setSnackbarMsg(successMsg)
      setSnackbarVisible(true)
    } catch (error) {

      let errorMsg : string = ''

      if (error instanceof MaxLengthExceededException)
        errorMsg = t('maxLengthExceeded')
      else if(error instanceof MinLengthNeededException)
        errorMsg = t('minLengthNeeded')
      else
        errorMsg = t('unknownError')

      setSnackbarMsg(errorMsg)
      setSnackbarVisible(true)

    } finally{
      getData()
    }
  }

  return (
    <>
      <ParallaxScrollView title={t("categories")}>
        {categories.map((category) => (
            <CategoryComponent key={category.id} category={category} deleteCategory={deleteCategory} renameCategory={renameCategory}/>
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