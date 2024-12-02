import { MIN_PADDING } from '@/constants/Sizes'
import { useI18n } from '@/context/i18nContext'
import { I18nString } from '@/utils/translations'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


type Props = {
    msg : I18nString
    setIsVisible : (val : boolean)=>void
    isVisible : boolean
    onConfirm : () => void
}

export default function CustomModal({msg, onConfirm, setIsVisible, isVisible} : Props) {

    const { t } = useI18n()
    const closeModal = () : void =>{
        setIsVisible(false)
    }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          {/* Ventana Modal */}
          <Modal
            visible={isVisible}
            animationType="fade" // Tipos: 'none', 'slide', 'fade'
            transparent // Hace el fondo translúcido
            onRequestClose={closeModal} // Requerido para Android (cerrar con botón de retroceso)
          >
            <View style={styles.overlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>{t(msg)}</Text>
                <View style={styles.buttonContent}>
                  <TouchableOpacity style={styles.buttonCancel} onPress={closeModal}>
                    <Text style={styles.buttonText}>{t('cancel')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonAccept} onPress={onConfirm}>
                    <Text style={styles.buttonText}>{t('accept')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCancel: {
    backgroundColor: '#aaa',
    padding: 10,
    borderRadius: 8
  },
  buttonAccept: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Fondo translúcido
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: MIN_PADDING * 4
  },
})
