// represents the main page (react component)
// <View> - acts as a <div> component

import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedLogo from '../components/ThemedLogo'


const Home = () => {

  return (
    <ThemedView style={[styles.container]}>
      
      <ThemedLogo style={styles.img} resizeMode='contain' />
      <Spacer height={20} />

      <ThemedText title={true} style={styles.title}>The Most Innovative Academic Conference</ThemedText>      
      <ThemedText style={styles.subTitle}>
        Dive into the world of cybersecurity, telecommunication and AI!
      </ThemedText>

      <View style={styles.buttonRow}>

        <Link href='/login' asChild style={styles.linkBoundry}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href='/register' asChild style={styles.linkBoundry}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableOpacity>
        </Link>

      </View>

      <ThemedText style={styles.subTitle}>
        To create your account, you'll need to be registered for the event. If you haven't got your ticket yet, get it on:{'\n'}
        <Link href='https://cyberwave.agh.edu.pl' style={styles.textLink}>
          cyberwave.agh.edu.pl
        </Link>
      </ThemedText>
  
    </ThemedView>
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
    width: 140,
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
  buttonRow: {
    flexDirection: 'row',  
    justifyContent: 'center',
    gap: 20,             
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  img: {
    height: 50,
    width: '70%'
  },
  linkBoundry: {
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  subTitle: {
    width: '70%',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  textLink: {
    color: '#00CED1',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
})