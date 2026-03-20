import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedText from '../components/ThemedText'


const Contact = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  link: {
    color: '#41adec',
    marginVertical: 10,
    borderBottomWidth: 1
  },
})