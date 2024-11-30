import React, { createContext, useContext, useState } from 'react'
import translations , { Translations, I18nString } from '../utils/translations'
import { useOnInit } from '@/hooks/useOnInit'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Language = keyof Translations

type I18nContextType = {
  language: I18nString
  setLanguage: (selectedOption: I18nString) => void
  t: (key: I18nString) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const [language, setLanguageState] = useState<Language>('en')

  const t = (key: I18nString): string => {
    return translations[language][key] || key
  }


  useOnInit(()=>{
    const loadLanguage = async () => {
      try{
        const savedLanguage = await AsyncStorage.getItem('language')
        if (savedLanguage) setLanguage(savedLanguage as I18nString)
      } catch{
        console.log("It was an error getting language.")
      }
    }
    loadLanguage()
  })

  const setLanguage = async (lenguage : I18nString) => {
    await AsyncStorage.setItem('language', lenguage)
    setLanguageState(lenguage as Language)
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