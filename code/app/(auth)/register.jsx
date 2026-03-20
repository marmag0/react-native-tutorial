import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedLogo from '../../components/ThemedLogo'


const Register = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedLogo style={styles.img} resizeMode='contain'/>
      <Spacer />

      <ThemedText title={true} styles={styles.title}>
        Register For an Account
      </ThemedText>

      <Spacer height={100} />
      
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
  img: {
    height: 50,
    width: '70%'
  },
})