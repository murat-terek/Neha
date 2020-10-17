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
          {
            text: 'jewellery',
            href: 'https://google.com/'
          },
          {
            text: 'food & drink',
            href: 'https://google.com/'
          },
          {
            text: 'Toys & Games',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Home
      Link(
        subLinks=[
          {
            text: 'about us',
            href: 'https://google.com/'
          },
          {
            text: 'cart',
            href: 'https://google.com/'
          },
          {
            text: 'checkout',
            href: 'https://google.com/'
          },
          {
            text: 'wishlist',
            href: 'https://google.com/'
          },
          {
            text: 'contact',
            href: 'https://google.com/'
          },
          {
            text: 'login',
            href: 'https://google.com/'
          },
          {
            text: 'register',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Pages
      Link(
        subLinks=[
          {
            text: 'grid 3 column',
            href: 'https://google.com/'
          },
          {
            text: 'grid 5 column',
            href: 'https://google.com/'
          },
          {
            text: 'grid with sidebar',
            href: 'https://google.com/'
          },
          {
            text: 'list 1 column',
            href: 'https://google.com/'
          },
          {
            text: 'list 2 column',
            href: 'https://google.com/'
          },
          {
            text: 'list with sidebar',
            href: 'https://google.com/'
          },
          {
            text: 'list 1 column box',
            href: 'https://google.com/'
          },
          {
            text: 'tab style 1',
            href: 'https://google.com/'
          },
          {
            text: 'tab style 2',
            href: 'https://google.com/'
          },
          {
            text: 'tab style 3',
            href: 'https://google.com/'
          },
          {
            text: 'sticky style',
            href: 'https://google.com/'
          },
          {
            text: 'sticky style 2',
            href: 'https://google.com/'
          },
          {
            text: 'gallery style',
            href: 'https://google.com/'
          },
          {
            text: 'gallery style 2',
            href: 'https://google.com/'
          },
          {
            text: 'fixed image style',
            href: 'https://google.com/'
          },
          {
            text: 'fixed image style 2',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Shop
      Link(
        subLinks=[
          {
            text: 'blog',
            href: 'https://google.com/'
          },
          {
            text: 'blog 2 column',
            href: 'https://google.com/'
          },
          {
            text: 'blog left sidebar',
            href: 'https://google.com/'
          },
          {
            text: 'blog details',
            href: 'https://google.com/'
          },
        ]
        href='https://google.com/'
      ) Blog
      Link(href='https://google.com/') Contact
  `
}

export default Menu
