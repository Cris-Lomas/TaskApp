/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useCustomTheme } from '@/context/themeContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme } from '@react-navigation/native';

export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) 
{
  const { theme } = useCustomTheme()
  const themeName = theme == DarkTheme ? 'dark' : 'light'

  return Colors[themeName][colorName];
}
