import React from 'react'
import { Text } from 'react-native'
import './index.styl'

const Title = ({ value }) => {
	return pug`
    Text.title #{value}
  `
}

export default Title