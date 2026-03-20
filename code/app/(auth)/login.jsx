import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedLogo from '../../components/ThemedLogo'
import ThemedButton from '../../components/ThemedButton'


const Login = () => {

  // backen handler
  const handleSubmit = () => {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>

      <ThemedLogo style={styles.img} resizeMode='contain'/>
      <Spacer />

      <ThemedButton
        onPress={handleSubmit}
      >
        <Text style={styles.pressableText}>
          Login
        </Text>
      </ThemedButton>

      <ThemedText title={true} styles={styles.title}>
        Login to Your Account
      </ThemedText>
      
      <Spacer height={5} />

      <Link href='/register' replace>
          <ThemedText style={{ textAlign: 'center' }}>
            Register Instead 
          </ThemedText>
      </Link>



    </ThemedView>
  )
}

export default Login

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