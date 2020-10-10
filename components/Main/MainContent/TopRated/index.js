import React from 'react'
import { View } from 'react-native'
import Title from '../../../Base/Title'
import TopRatedItem from './TopRatedItem'
import './index.styl'

const TopRated = () => {
	return pug`
    View.root
      Title(value='Top rated products')
      TopRatedItem(name='Flying Drone' rating=0 price='$140.00' link='' image='/main/top1.jpg')
      TopRatedItem(name='Flying Drone' rating=1 price='$140.00' link='' image='/main/top2.jpg')
      TopRatedItem(name='Flying Drone' rating=2 price='$140.00' link='' image='/main/top3.jpg')
      TopRatedItem(name='Flying Drone' rating=3 price='$140.00' link='' image='/main/top4.jpg')
  `
}

export default TopRated
