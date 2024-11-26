import React, { createContext, useContext, useState } from 'react'
import translations , { Translations, LanguageStrings } from '../utils/translations'
import { useOnInit } from '@/hooks/useOnInit'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Language = keyof Translations

type I18nContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof LanguageStrings) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  const t = (key: keyof LanguageStrings): string => {
    return translations[language][key] || key
  }


  useOnInit(()=>{
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language')
      if (savedLanguage) setLanguage(savedLanguage as Language)
    }
    loadLanguage()
  })

  const setLanguage = async (lenguage : Language) => {
    await AsyncStorage.setItem('language', lenguage)
    setLanguageState(lenguage)
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}