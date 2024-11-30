import ParallaxScrollView from '@/components/ParallaxScrollView'
import TaskComponent from '@/components/TaskComponent'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useI18n } from '@/context/i18nContext'
import { Task } from '@/domain/Task'
import { useOnInit } from '@/hooks/useOnInit'
import { mockedTaskService } from '@/services/MockedTaskService'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'

export default function TasksInCategoryScreen() {

  const { t } = useI18n()
  const [tasks, setTasks] = useState<Task[]>([])
  const {categoryId} = useLocalSearchParams()

  useOnInit(()=>{
    const _tasks = mockedTaskService.getTasksByCategoryId(+categoryId)
    setTasks(_tasks)
  })

  if (!categoryId)
    return <ThemedText>Category not found</ThemedText>;

  return (
    <>
    <ParallaxScrollView title={t('tasks')}>
      <ThemedView>
        <ThemedText>{t("menu")}</ThemedText>
      </ThemedView>
      {tasks.map((task) => (
            <TaskComponent key={task.id} task={task} />
        ))
      }
    </ParallaxScrollView>
    </>
  );
}