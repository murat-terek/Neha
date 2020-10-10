import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Link from './Link'
import './index.styl'

const Menu = () => {
  return pug`
    View.root
      Link(
        subLinks=[
          {
            text: 'Furniture',
            href: 'https://google.com/'
          },
          {
            text: 'Electronics',
            href: 'https://google.com/'
          },
          {
            text: 'Fashion',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Home
      Link(
        subLinks=[
          {
            text: 'Furniture',
            href: 'https://google.com/'
          },
          {
            text: 'Electronics',
            href: 'https://google.com/'
          },
          {
            text: 'Fashion',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Pages
      Link(
        subLinks=[
          {
            text: 'Furniture',
            href: 'https://google.com/'
          },
          {
            text: 'Electronics',
            href: 'https://google.com/'
          },
          {
            text: 'Fashion',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Shop
      Link(
        subLinks=[
          {
            text: 'Furniture',
            href: 'https://google.com/'
          },
          {
            text: 'Electronics',
            href: 'https://google.com/'
          },
          {
            text: 'Fashion',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Blog
      Link(href='https://google.com/') Contact
  `
}

export default Menu
