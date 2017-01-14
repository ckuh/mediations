import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

class BackArrow extends Component {
  _onPressButton () {
    this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Image
            style={styles.arrow}
            source={require('../../img/icon-ios7-arrow-back-128.png')} />
        </TouchableHighlight>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const { object } = React.PropTypes
BackArrow.propTypes = {
  navigator: object
}
const styles = StyleSheet.create({
  container: {
  },
  arrow: {
    position: 'absolute',
    left: -160,
    height: 43,
    width: 43
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state) => ({ books: state.books })
export default connect(mapStateToProps, { })(BackArrow)
