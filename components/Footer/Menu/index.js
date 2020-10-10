import React from 'react'
import { View } from 'react-native'
import Link from './Link'
import './index.styl'

const Menu = () => {
  return pug`
    View.menu
      Link HOME
      Link ABOUT US
      Link SHOP
      Link BLOG
      Link PAGES
  `
}

export default Menu
