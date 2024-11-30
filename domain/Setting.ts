import { I18nString } from "@/utils/translations"

// Representa una opción del menú de configuración
export interface Setting {
    icon: string
    label: I18nString
    defaultOption: I18nString
    options: I18nString[]
    onSelect: (selectedOption : I18nString) => void
  }