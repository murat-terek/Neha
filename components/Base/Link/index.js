import React from 'react'
import { Alert, TouchableOpacity, Linking } from 'react-native'

const Link = ({ children, href }) => {
  const handleClick = async () => {
    const supported = await Linking.canOpenURL(href);

    if (supported) {
      await Linking.openURL(href);
    } else {
      Alert.alert(`Don't know how to open this URL: ${href}`);
    }
  }

  return pug`
    TouchableOpacity(onPress=handleClick) #{children}
  `
}

export default Link