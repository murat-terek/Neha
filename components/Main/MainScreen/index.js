import React from 'react'
import { View, Text } from 'react-native'
import Link from '../../Base/Link'
import './index.styl'

const MainScreen = () => {
	return pug`
    View.backImg
      View.container
        Text.title Shop
        View.txt
          Link(href='https://www.google.com/')
            Text.menuHome HOME / 
          Text.menuShop SHOP
  `
}

export default MainScreen