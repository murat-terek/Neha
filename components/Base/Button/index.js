import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import './index.styl'

const Button = ({ onPress, title }) => {
	return pug`
    TouchableOpacity(onPress=onPress)
      View.btn
        Text.txt #{title}
  `
}

export default Button
