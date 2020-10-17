import React from 'react'
import { View } from 'react-native'
import MenuLink from '../../Base/MenuLink'
import './index.styl'

const Menu = () => {
  return pug`
    View.menu
      MenuLink HOME
      MenuLink ABOUT US
      MenuLink SHOP
      MenuLink BLOG
      MenuLink PAGES
  `
}

export default Menu
