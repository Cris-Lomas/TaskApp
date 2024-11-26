import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useI18n } from '../context/i18nContext'
import { HEADER_HEIGHT, MIN_PADDING } from '@/constants/Sizes'

const FlagSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n()

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
  }

  const flagSource = language === 'en' 
    ? require('../assets/images/eng.png') 
    : require('../assets/images/arg.png')

  return (
    <TouchableOpacity onPress={toggleLanguage} style={styles.container}>
      <Image source={flagSource} style={styles.flag} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: MIN_PADDING * 4,
    paddingTop: MIN_PADDING * 4
  },
  flag: {
    borderRadius: '50%',
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    resizeMode: 'contain',
  },
})

export default FlagSwitcher
