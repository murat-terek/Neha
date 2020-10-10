
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import './index.styl'

const Item = ({ sale, uri, title, price, category }) => {
  return pug`
    View.root
      View.imgWrap
        if sale
          Text.sale SALE
        Image.img(source={ uri })
      View.header
        Text.title #{title}
        Text.price $#{price.toFixed(2)}
      Text.category #{category}
  `
}

export default Item
