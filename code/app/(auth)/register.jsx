import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedLogo from '../../components/ThemedLogo'
import ThemedButton from '../../components/ThemedButton'


const Register = () => {

  // backen handler
  const handleSubmit = () => {
    console.log('registration form submitted')
  }

  return (
    <ThemedView style={styles.container}>

      <ThemedLogo style={styles.img} resizeMode='contain'/>
      <Spacer />

      <ThemedButton
        onPress={handleSubmit}
      >
        <Text style={styles.pressableText}>
          Register
        </Text>
      </ThemedButton>

      <ThemedText title={true} styles={styles.title}>
        Register For an Account
      </ThemedText>

      <Spacer height={5} />
      
      <Link href='/login' replace>
          <ThemedText style={{ textAlign: 'center' }}>
            Login Instead 
          </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  pressableText: {
    color: '#000',
    fontWeight: 'bold'
  },
  img: {
    height: 50,
    width: '70%'
  },
})