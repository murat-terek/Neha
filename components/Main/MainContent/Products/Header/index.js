
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ProductView } from '../index'
import './index.styl'

const Header = ({ view, onClickGrid, onClickList }) => {
  const gridUri = `/main/grid${view === ProductView.Grid ? '-orange' : ''}.png`
  const listUri = `/main/list${view === ProductView.List ? '-orange' : ''}.png`

  return pug`
    View.root
      Text.searchResults 
        Text.number 23 
        | Product Found of 
        Text.number 50
      View.gridList
        TouchableOpacity(onPress=onClickGrid)
          Image.grid(source={uri: gridUri})
        TouchableOpacity(onPress=onClickList)
          Image.list(source={uri: listUri})
  `
}

export default Header
