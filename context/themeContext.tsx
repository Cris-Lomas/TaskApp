import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'
import { THEME_KEY } from '@/constants/Names'
import { useOnInit } from '@/hooks/useOnInit'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DefaultTheme)

  // Cargar el tema desde AsyncStorage al inicio
  useOnInit(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_KEY)
        if (savedTheme === 'dark') {
          setTheme(DarkTheme)
        } else {
          setTheme(DefaultTheme)
        }
      } catch (error) {
        console.error('Error loading theme from AsyncStorage:', error)
      }
    }

    loadTheme()
  })

  // Cambiar y guardar el tema
  const toggleTheme = async () => {
    try {
      const newTheme = theme === DefaultTheme ? DarkTheme : DefaultTheme
      setTheme(newTheme)
      await AsyncStorage.setItem(THEME_KEY, newTheme === DarkTheme ? 'dark' : 'light')
    } catch (error) {
      console.error('Error saving theme to AsyncStorage:', error)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
