import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'


const Contact = () => {

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
    </ThemedView>
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