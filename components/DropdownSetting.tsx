import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { ThemedView } from './ThemedView'
import { I18nString } from '@/utils/translations'
import { useI18n } from '@/context/i18nContext'

type DropdownProps = {
  defaultSelection: I18nString
  options: I18nString[] // Opciones del dropdown
  onSelect: (selected: I18nString) => void // Función a llamar con la opción seleccionada
}

export const DropdownSetting: React.FC<DropdownProps> = ({ defaultSelection, options, onSelect }) => {

  const [selectedValue, setSelectedValue] = useState<I18nString>(defaultSelection)
  const { t } = useI18n()

  const handleChange = (value: I18nString) => {
    setSelectedValue(value)
    onSelect(value)
  }

  return (
    <ThemedView style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleChange}
        style={styles.picker}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={t(option)} value={option} />
        ))}
      </Picker>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  picker: {
    height: 50,
    width: '100%'
  }
})
