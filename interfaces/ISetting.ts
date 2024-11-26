// Representa una opción del menú de configuración
export interface ISetting {
    icon?: string
    name: string
    settingCategoryId: number
    onClick: () => void
  }