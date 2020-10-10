import React from 'react'
import { View, Image, Text } from 'react-native'
import Link from '../../../../Base/Link'
import Txt from '../../../../Base/Txt'
import './index.styl'

const TopRatedItem = ({ name, rating, price, link, image }) => {
  return pug`
    View.root
      Link(href=link)
        Image.img(source={ uri: image })
      View.rightSide
        View
          Link(href=link)
            Txt(value=name)
        View.stars
          - let i = 0;
          while i < rating
            Image.imgStar(source={ uri: '/main/starRed.png' } styleName=[{ first: i === 0 }] key=i)
            - i++
          while i < 5
            Image.imgStar(source={ uri: '/main/star.png' } styleName=[{ first: i === 0 }] key=i)
            - i++
        View.price
          Txt(value=price)
  `
}

export default TopRatedItem
