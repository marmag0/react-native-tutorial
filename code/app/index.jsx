// represents the main page (react component)
// <View> - acts as a <div> component

import { StyleSheet, Text, View, Image, TouchableOpacity, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'
import LogoDarkMode from '../assets/img/cyberwave-logo-darkmode.png'
import LogoLightMode from '../assets/img/cyberwave-logo-lightmode.png'


const Home = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark
  
  let Logo = null
  if (colorScheme == 'light') {
    Logo = LogoLightMode
  } else {
    Logo = LogoDarkMode
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      
      <Image source={Logo} style={styles.img} resizeMode='contain'></Image>

      <Text style={styles.title}>The Most Innovative Academic Conference</Text>      
      <Text style={styles.subTitle}>
        Dive into the world of cybersecurity, telecommunication and AI!
      </Text>

      <View>

        <Link href='/about' asChild style={styles.linkBoundry}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.buttonText}>
              Begin Your Journey
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href='/contact' asChild style={styles.linkBoundry}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.buttonText}>
              Contact Us
            </Text>
          </TouchableOpacity>
        </Link>

      </View>
  
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  img: {
    marginVertical: 20,
    height: 50,
    width: '70%'
  },
  linkBoundry: {
    marginVertical: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  subTitle: {
    width: '70%',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
})