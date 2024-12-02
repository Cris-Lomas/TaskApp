import ParallaxScrollView from '@/components/ParallaxScrollView'
import TaskComponent from '@/components/TaskComponent'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useI18n } from '@/context/i18nContext'
import { Category } from '@/domain/Category'
import { Task } from '@/domain/Task'
import { CategoryFactory } from '@/factories/CategoryFactory'
import { useOnInit } from '@/hooks/useOnInit'
import { mockedTaskService } from '@/services/MockedTaskService'
import { I18nString } from '@/utils/translations'
import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'

export default function TasksInCategoryScreen() {

  const { t } = useI18n()
  const [tasks, setTasks] = useState<Task[]>([])
  const [category, setCategory] = useState<Category>(CategoryFactory.CreateNoCategory())
  const {categoryId} = useLocalSearchParams()
  const title = +categoryId == 0 ? t(category.name as I18nString) : category.name

  useOnInit(()=>{
    const _tasks = mockedTaskService.getTasksByCategoryId(+categoryId)
    const _category = mockedTaskService.getCategory(+categoryId)
    if(_category) setCategory(_category)
    setTasks(_tasks)
  })

  if (!categoryId)
    router.navigate(`/+not-found`)

  return (
    <>
    <ParallaxScrollView title={title}>
      {tasks.map((task) => (
            <TaskComponent key={task.id} task={task} />
        ))
      }
    </ParallaxScrollView>
    </>
  );
}