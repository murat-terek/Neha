import React from 'react'
import { View, Text } from 'react-native'
import Socials from './Socials'
import Logo from '../Base/Logo'
import Menu from './Menu'
import Line from './Line'
import Info from './Info'
import './index.styl'

const Footer = () => {
  return pug`
    View.root
      Text.txt 20 Years Experience
      Socials
      View.logo
        Logo
      Menu
      Line
      View.copyright
        Text.txt Copyright © neha 2018. All Right Reserved.
      Info
  `
}

export default Footer
