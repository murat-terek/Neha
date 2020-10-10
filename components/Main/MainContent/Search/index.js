import React, { useState } from 'react'
import { View, TextInput, Image } from 'react-native'
import Title from '../../../Base/Title'
import Link from '../../../Base/Link'
import './index.styl'

const Search = () => {
	return pug`
    View
      Title(value='Search Products')
      View.searchLine
        TextInput.search(placeholder='Search Products...')
        Link(href='')
          View.button
            Image.img(source={uri: '/main/search.png'})
  `
}

export default Search
