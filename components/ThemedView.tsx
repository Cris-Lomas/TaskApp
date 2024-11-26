import { View, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style, styles.content]} {...otherProps} />;
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});