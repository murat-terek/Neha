
import React from 'react'
import { Text, View } from 'react-native'
import Item from './Item'
import './index.styl'

const List = ({ products }) => {
  return pug`
    View.root
      each product in products
        Item( ...product )
  `
}

export default List
