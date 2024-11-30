import React, { createContext, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native'
import { THEME_KEY } from '@/constants/Names'
import { useOnInit } from '@/hooks/useOnInit'
import { I18nString } from '@/utils/translations'
type CustomThemeContextType = {
  theme: Theme
  setTheme: ( theme : I18nString ) => void
}


const CustomThemeContext = createContext<CustomThemeContextType | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, privateSetTheme] = useState<Theme>(DefaultTheme)

  // Cargar el tema desde AsyncStorage al inicio
  useOnInit(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem(THEME_KEY)
      if(savedTheme)
        privateSetTheme(getTheme(savedTheme as I18nString))
    }

    loadTheme()
  })

  // Cambiar y guardar el tema
  const setTheme = async ( theme : I18nString ) => {
    const newTheme = getTheme(theme)
    privateSetTheme(newTheme)
    await AsyncStorage.setItem(THEME_KEY, theme)
  }

  const getTheme = (theme : I18nString) => theme == 'light' ? DefaultTheme : DarkTheme

  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider value={theme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export const useCustomTheme = (): CustomThemeContextType => {
  const context = useContext(CustomThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
