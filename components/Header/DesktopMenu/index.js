import React from 'react'
import { View } from 'react-native'
import MenuLink from '../../Base/MenuLink'
import './index.styl'

const DesktopMenu = () => {
  return pug`
    View.menu
      MenuLink HOME
      MenuLink ABOUT US
      MenuLink SHOP
      MenuLink PAGES
      MenuLink BLOG
      MenuLink CONTACT
  `
}

export default DesktopMenu
