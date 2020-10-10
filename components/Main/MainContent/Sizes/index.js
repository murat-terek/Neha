import React from 'react'
import { View } from 'react-native'
import Title from '../../../Base/Title'
import Link from '../../../Base/Link'
import Txt from '../../../Base/Txt'
import './index.styl'

const Sizes = () => {
	return pug`
    View.root
      Title(value='size')
      View.sizes
        View.noLast
          Link(href='')
            Txt(value='XL')
        View.noLast
          Link(href='')
            Txt(value='M')
        View.noLast
          Link(href='')
            Txt(value='L')
        View.noLast
          Link(href='')
            Txt(value='ML')
        View
          Link(href='')
            Txt(value='LM')
  `
}

export default Sizes
