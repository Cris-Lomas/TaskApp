export type I18nString = keyof I18nStrings

type I18nStrings = {
    tasks: string
    addTask: string
    menu: string
    categories: string
    addCategory: string
    newTaskPlaceholder: string
    complete: string
    uncomplete: string
    delete: string
    noTasks: string
    settings : string
    noCategory : string
    theme : string
    language : string
    dark: string
    light: string
    en: string
    es: string
    cancel : string
    accept : string
}

export type Translations = {
  en : I18nStrings
  es : I18nStrings
}

const translations : Translations = {
    en: {
      tasks: "Tasks",
      addTask: "Add Task",
      menu: "Menu",
      categories: "Categories",
      addCategory: "Add category",
      newTaskPlaceholder: "New task",
      complete: "Complete",
      uncomplete: "Uncomplete",
      delete: "Delete",
      noTasks: "No tasks available",
      settings: "Settings",
      noCategory: "No category",
      theme: "Theme",
      language: "Language",
      dark: "Dark",
      light: "Light",
      en: "English",
      es: "Spanish",
      cancel: "Cancel",
      accept: "Accept"
    },
    es: {
      tasks: "Tareas",
      addTask: "Agregar Tarea",
      menu: "Menú",
      categories: "Categorías",
      addCategory: "Agregar categoría",
      newTaskPlaceholder: "Nueva tarea",
      complete: "Completar",
      uncomplete: "Desmarcar",
      delete: "Eliminar",
      noTasks: "No hay tareas disponibles",
      settings: "Opciones",
      noCategory: "Sin categoría",
      theme: "Tema",
      language: "Lenguaje",
      dark: "Oscuro",
      light: "Claro",
      en: "Inglés",
      es: "Español",
      cancel: "Cancelar",
      accept: "Aceptar"
    },
  }
  
  export default translations