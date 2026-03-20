import { Image, useColorScheme } from 'react-native'

import LogoDarkMode from '../assets/img/cyberwave-logo-darkmode.png'
import LogoLightMode from '../assets/img/cyberwave-logo-lightmode.png'

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  
  const currentLogo = colorScheme === 'light' ? LogoLightMode : LogoDarkMode

  return (
    <Image 
      source={currentLogo} 
      style={style} 
      {...props} 
    />
  )
}

export default ThemedLogo