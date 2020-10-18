import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import './index.styl'

const MenuIcon = ({ open, onPress }) => {
  return pug`
    View
      TouchableOpacity(onPress=onPress)
        View.menuIcon
          if !open
            Image.imgBurger(source={uri: '/header/burger.png'})
          else
            Text.close X
  `
}

export default MenuIcon
