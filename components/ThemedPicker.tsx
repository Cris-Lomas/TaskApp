import React from 'react'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useCustomTheme } from '@/context/themeContext'
import { DarkTheme } from '@react-navigation/native'
import { Colors } from '@/constants/Colors'
import { I18nString } from '@/utils/translations'
import { useI18n } from '@/context/i18nContext'
import { MIN_PADDING } from '@/constants/Sizes'

type Props = {
    selectedValue: I18nString
    options: I18nString[] // Opciones del dropdown
    onValueChange: (selected: I18nString) => void // Función a llamar con la opción seleccionada
}

export const ThemedPicker: React.FC<Props> = ({
  options,
  selectedValue,
  onValueChange
}) => {

    const theme = useCustomTheme().theme == DarkTheme ? 'dark' : 'light'
    const { t } = useI18n()

  return (
    <>
      {/* Picker */}
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
        dropdownIconColor={Colors[theme]['icon']} // Icono del dropdown se adapta al tema
        selectionColor={Colors[theme]['text']}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={t(option)} value={option} />
        ))}
      </Picker>
    </>
  )
}

const styles = StyleSheet.create({
  picker: {
    flex: 1, // Permite que el picker ocupe el espacio restante
    backgroundColor: '#ccc', // Sin fondo para que sea uniforme
    padding: MIN_PADDING,
  }
})
