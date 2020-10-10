import React from 'react'
import { View } from 'react-native'
import Title from '../../../Base/Title'
import CategoryItem from './CategoryItem'

import './index.styl'

const Categories = () => {
	return pug`
    View.root
      Title(value='Categories')
      View.list
        CategoryItem(name='Accessories' value='4', link='')
        CategoryItem(name='Book' value='9', link='')
        CategoryItem(name='Clothing' value='5', link='')
        CategoryItem(name='Homelife' value='3', link='')
        CategoryItem(name='Kids & Baby' value='4', link='')
  `
}

export default Categories
