import ParallaxScrollView from '@/components/ParallaxScrollView';
import TaskCategoryComponent from '@/components/TaskCategoryComponent';
import TaskComponent from '@/components/TaskComponent';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useI18n } from '@/context/i18nContext';
import { Task } from '@/domain/Task';
import { TaskCategory } from '@/domain/TaskCategory';
import { useOnInit } from '@/hooks/useOnInit';
import { mockedTaskService } from '@/services/MockedTaskService';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function TasksInCategoryScreen() {

  const { t } = useI18n()
  const [tasks, setTasks] = useState<Task[]>([])
  const [categories, setCategories] = useState<TaskCategory[]>([])
  const [hasCategories, setHasCategories] = useState<boolean>(false)
  const {categoryId} = useLocalSearchParams()

  useOnInit(()=>{
    const _tasks = mockedTaskService.getTasks()
    const _categories = mockedTaskService.getCategories()
    const _hasCategories = _categories.length > 0
    setTasks(_tasks)
    setCategories(_categories)
    setHasCategories(_hasCategories)
  })

  if (!categoryId)
    return <ThemedText>Category not found</ThemedText>;

  return (
    <>
    <ParallaxScrollView title={t('tasks')}>
      <ThemedView>
        <ThemedText>{t("menu")}</ThemedText>
      </ThemedView>
      {hasCategories 
      ? categories.map((category) => (
          <TaskCategoryComponent key={category.id} category={category} />
        ))
        : tasks.map((task) => (
            <TaskComponent key={task.id} task={task} />
        ))
    }
      
    </ParallaxScrollView>
    </>
  );
}