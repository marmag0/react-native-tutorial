import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedLogo from '../../components/ThemedLogo'


const Login = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedLogo style={styles.img} resizeMode='contain'/>
      <Spacer />
      
      <ThemedText title={true} styles={styles.title}>
        Login to Your Account
      </ThemedText>

      <Spacer height={100} />
      
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
  img: {
    height: 50,
    width: '70%'
  },
})