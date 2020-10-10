import React, { useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import './index.styl'

const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const uri = `/main/favorite${isFavorite ? '-selected' : ''}.png`

  const handleClick = () => {
    setIsFavorite(!isFavorite)
  }

  return pug`
    TouchableOpacity(onPress=handleClick)
      View.btn
        Image.icon(source={uri})
  `
}

export default Favorite
