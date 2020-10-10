
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Header from './Header'
import Grid from './Grid'
import List from './List'
import './index.styl'

const products = [
  {
    sale: true,
    uri: '/main/1.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/2.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/3.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    sale: true,
    uri: '/main/4.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/5.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/6.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    sale: true,
    uri: '/main/7.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/8.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/9.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    sale: true,
    uri: '/main/10.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/11.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
  {
    uri: '/main/12.jpg',
    title: 'Wooden furniture',
    price: 110,
    category: 'Electronic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
  },
]

export const ProductView = {
  Grid: 'Grid',
  List: 'List'
}

const Products = () => {
  const [view, setView] = useState(ProductView.Grid)

  const handleClickGrid = () => {
    setView(ProductView.Grid)
  }
  const handleClickList = () => {
    setView(ProductView.List)
  }

  return pug`
    View.root
      Header(
        view=view
        onClickGrid=handleClickGrid
        onClickList=handleClickList
      )
      if view === ProductView.Grid
        Grid(products=products)
      else
        List(products=products)
  `
}

export default Products
