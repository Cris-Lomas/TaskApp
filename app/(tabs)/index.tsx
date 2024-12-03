import ParallaxScrollView from '@/components/ParallaxScrollView'
import TaskComponent from '@/components/TaskComponent'
import { NO_CATEGORY_NAME } from '@/constants/Names'
import { useI18n } from '@/context/i18nContext'
import { Task } from '@/domain/Task'
import { Category } from '@/domain/Category'
import { CategoryFactory } from '@/factories/CategoryFactory'
import { useOnInit } from '@/hooks/useOnInit'
import { mockedTaskService } from '@/services/MockedTaskService'
import { useState } from 'react'
import CategoryContainerComponent from '@/components/CategoryContainerComponent'

export default function TasksScreen() {

  const { t } = useI18n()
  const [tasks, setTasks] = useState<Task[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [hasCategories, setHasCategories] = useState<boolean>(false)
  const [hasToCreateEmptyCategory, setHasToCreateEmptyCategory] = useState<boolean>(false)
  const emptyTaskCategory = CategoryFactory.CreateNoCategory().rename(t(NO_CATEGORY_NAME))
  

  useOnInit(()=>{
    const _tasks = mockedTaskService.getTasks()
    const _categories = mockedTaskService.getCategories()
    const _hasCategories = _categories.length > 0
    const _hasToCreateEmptyCategory = _hasCategories && _tasks.some(task=> !task.hasCategory())

    setTasks(_tasks)
    setCategories(_categories)
    setHasCategories(_hasCategories)
    setHasToCreateEmptyCategory(_hasToCreateEmptyCategory)
  })

  return (
    <ParallaxScrollView title={t('tasks')}>
      {
        hasToCreateEmptyCategory &&
        <CategoryContainerComponent key={0} category={emptyTaskCategory} />
      }
      {hasCategories 
      ? categories.map((category) => (
        <CategoryContainerComponent key={category.id} category={category} />
      ))
      : tasks.map((task) => (
        <TaskComponent key={task.id} task={task} />
      ))
      }
      
    </ParallaxScrollView>
  );
}