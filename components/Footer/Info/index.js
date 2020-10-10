import React from 'react'
import { View, Text } from 'react-native'
import Link from '../../Base/Link'
import './index.styl'
 
const Row = ({ title, children }) => {
  return pug`
    View.row
      Text.title #{title} : 
      Text.text #{children}
  `
}

const Info = () => {
	return pug`
    View.info
      Row(title='Phone') +012 345 678 102
      Row(title='Email') 
        Link(href='mailto:info@example.com') info@example.com
      Row(title='Address') Dhaka Bangladesh
  `
}

export default Info
