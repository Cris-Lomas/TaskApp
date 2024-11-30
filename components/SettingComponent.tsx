import { ThemedText } from './ThemedText'
import { Setting } from '@/domain/Setting'
import { ThemedView } from './ThemedView'
import { useI18n } from '@/context/i18nContext'
import Icon from 'react-native-vector-icons/Ionicons' // Puedes cambiar la familia de íconos si prefieres otra
import React from 'react'
import { ThemedPicker } from './ThemedPicker'
import { StyleSheet } from 'react-native'
import { MIN_PADDING } from '@/constants/Sizes'
import { useCustomTheme } from '@/context/themeContext'
import { DarkTheme } from '@react-navigation/native'
import { Colors } from '@/constants/Colors'

type Props = {
  setting : Setting
}

export default function SettingComponent({ setting }: Props) {

  const { t } = useI18n()
  const theme  = useCustomTheme().theme == DarkTheme ? 'dark' : 'light'

  return (
    <ThemedView style={styles.container} >
      {/* Ícono */}
      <Icon name={setting.icon} size={24} style={[styles.icon, {color: Colors[theme].icon}]} />

      {/* Etiqueta */}
      <ThemedText style={styles.label}>{t(setting.label)}</ThemedText>

      {/* Picker */}
      <ThemedPicker selectedValue={setting.defaultOption} options={setting.options} onValueChange={setting.onSelect}/>
      
    </ThemedView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: MIN_PADDING * 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 25
  },
  icon: {
    padding: MIN_PADDING * 2,
    color: '#888' // Cambia esto según el tema si es necesario
  },
  label: {
    padding: MIN_PADDING * 2,
    fontSize: 16,
    fontWeight: 'bold',
    width: 100
  },
})