import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import BaseLink from '../../../Base/Link'
import './index.styl'

const Link = ({ subLinks, children, href }) => {
  const [open, setOpen] = useState(false)

  const isParentLink = subLinks && subLinks.length > 0

  const handleClickPlus = () => {
    setOpen(!open)
  }

  return pug`
    View.root
      View.mainLink
        BaseLink(href=href)
          Text.link #{children}
        if isParentLink
          TouchableOpacity(onPress=handleClickPlus)
            Text.plus
              if !open
                Text +
              else
                Text -
      if isParentLink && open
        View.subLinks
          each link in subLinks
            BaseLink(href=link.href key=link.text)
              Text.sublink #{link.text}
  `
}

export default Link
