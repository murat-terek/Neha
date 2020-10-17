import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import './index.styl'

const Link = ({ onPress, children }) => {
	return pug`
    TouchableOpacity(onPress=onPress)
      View.link
        Text.txt #{children}
  `
}

export default Link
