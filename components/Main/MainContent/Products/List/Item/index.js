
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Button from '../../../../../Base/Button'
import Favorite from '../Favorite'
import './index.styl'

const Item = ({ sale, uri, title, price, description }) => {
  const handleClick = () => {

  }

  return pug`
    View.root
      View.left
        View.imgWrap
          if sale
            Text.sale SALE
          Image.img(source={ uri })
      View.right
        Text.title #{title}
        Text.price $#{price.toFixed(2)}
        Text.description #{description}
        View.btns
          Button(title='ADD TO CART' onPress=handleClick)
          View.favorite
            Favorite
  `
}

export default Item
