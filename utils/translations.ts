export type Translations = {
    en : LanguageStrings,
    es : LanguageStrings
}

export type LanguageStrings = {
    tasks: string,
    addTask: string,
    menu: string,
    categories: string,
    addCategory: string,
    newTaskPlaceholder: string,
    complete: string,
    uncomplete: string,
    delete: string,
    noTasks: string,
    settings : string
    noCategory : string
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
      noCategory: "No category"
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
      noCategory: "Sin categoría"
    },
  }
  
  export default translations