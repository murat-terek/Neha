import React from 'react'
import { Text } from 'react-native'
import './index.styl'

const Txt = ({ value }) => {
	return pug`
    Text.txt #{value}
  `
}

export default Txt
