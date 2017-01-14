import React from 'react'

// routes
import Toc from '../components/Toc'
import Book from '../components/Book'

export const routes = [
  { title: 'Table of Contents', index: 0 },
  { title: 'Theme', index: 1 },
  { title: 'Book', index: 2 }
]

export function navigatorRenderScene (route, navigator) {
  const _navigator = navigator
  switch (route.title) {
    case 'Table of Contents':
      return (<Toc navigator={navigator} title="toc"/>)
    case 'Book':
      return (<Book navigator={navigator} title="book" />)
  }
}
