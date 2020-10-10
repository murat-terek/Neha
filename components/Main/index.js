import React from 'react'
import { View } from 'react-native'
import MainScreen from './MainScreen'
import MainContent from './MainContent'

const Main = () => {
	return pug`
    View
      MainScreen
      MainContent
  `
}

export default Main