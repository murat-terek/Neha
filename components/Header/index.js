import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import Logo from '../Base/Logo'
import MenuIcon from './MenuIcon'
import Menu from './Menu'
import './index.styl'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return pug`
    View.header
      Logo
      View.headerRight
        View.paddingTop
          Image.imgSearch(source={uri: '/header/search.png'})
        View.beetweenIcons
          Image.imgBasket(source={uri: '/header/basket.png'})
        MenuIcon(open=open onPress=handleClick)
      if open
        Menu
  `
}

export default Header
