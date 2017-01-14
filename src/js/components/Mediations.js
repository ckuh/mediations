import React, { Component } from 'react'
import { Navigator } from 'react-native';

// routes
import { routes, navigatorRenderScene } from '../routes'

class Mediations extends Component {
  render () {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={navigatorRenderScene}
      />
    )
  }
}

export default Mediations
