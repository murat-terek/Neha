import React from 'react'
import { ScrollView, Text } from 'react-native'
import './App.styl'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  return pug`
    ScrollView.root
      Header
      Main
      Footer
  `
}

export default App