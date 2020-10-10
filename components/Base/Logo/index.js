import React from 'react'
import { Text } from 'react-native'
import './index.styl'

const Logo = () => {
  return pug`
    Text.logo Neha
      Text.dot .
  `
}

export default Logo
