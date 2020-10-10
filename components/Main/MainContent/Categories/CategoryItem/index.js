import React from 'react'
import { View } from 'react-native'
import Link from '../../../../Base/Link'
import Txt from '../../../../Base/Txt'
import './index.styl'

const CategoryItem = ({ name, value, link }) => {
  return pug`
    View.root
      Link(href=link)
        Txt(value=name)
      View.value
        Link(href=link)
          Txt(value=value)
  `
}

export default CategoryItem
