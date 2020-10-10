import React from 'react'
import { View } from 'react-native'
import Title from '../../../Base/Title'
import './index.styl'

const Colors = () => {
	return pug`
    View.root
      Title(value='color')
      View.colors
        View.color.red
        View.color.pink
        View.color.blue
        View.color.sky
        View.color.green
        View.color.purple.last
  `
}

export default Colors
