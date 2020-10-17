import React from 'react'
import { View } from 'react-native'
import Search from './Search'
import Categories from './Categories'
import Colors from './Colors'
import Sizes from './Sizes'
import TopRated from './TopRated'
import Products from './Products'
import './index.styl'

const MainContent = () => {
	return pug`
    View.mainContent
      View.sidebar
        Search
        Categories
        Colors
        Sizes
        TopRated
      View.products
        Products
  `
}

export default MainContent