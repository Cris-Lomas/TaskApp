import { View, type ViewProps } from 'react-native'
import { StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'
import { MIN_PADDING } from '@/constants/Sizes'


export function ThemedView({ style, ...otherProps }: ViewProps) {
  
  const backgroundColor = useThemeColor('background')

  return <View style={[{ backgroundColor }, style, styles.content]} {...otherProps} />
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    width: '100%',
    paddingVertical: MIN_PADDING * 4
  },
})