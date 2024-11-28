// Representa una opción del menú de configuración
export interface Setting {
    icon?: string
    name: string
    settingCategoryId: number
    onClick: () => void
  }