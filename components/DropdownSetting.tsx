import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { ThemedView } from './ThemedView'

type DropdownProps = {
  defaultSelection: string
  options: string[] // Opciones del dropdown
  onSelect: (selected: string) => void // Función a llamar con la opción seleccionada
}

export const DropdownSetting: React.FC<DropdownProps> = ({ defaultSelection, options, onSelect }) => {

  const [selectedValue, setSelectedValue] = useState<string>(defaultSelection)

  const handleChange = (value: string) => {
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
          <Picker.Item key={index} label={option} value={option} />
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
