import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { mainStyle } from '../../styles/mainStyle'

class Toc extends Component {
  navBook () {
    this.props.navigator.push({
      title: 'Book'
    })
  }
  render () {
    return (
      <View style={styles.app}>
        <View style={styles.container}>
          <Text style={styles.header}>
            The Mediations
          </Text>
          <Text style={styles.listTitle}>
            Marcus Aurelius
          </Text>
          <TouchableHighlight onPress={this.navBook.bind(this)}>
            <Text>Tap me to load the book</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const { string, func } = React.PropTypes
Toc.propTypes = {
  title: string,
  onForward: func,
  onBack: func,
  onPress: func
}
const styles = StyleSheet.create(mainStyle)

const mapStateToProps = (state) => ({ books: state.books })
export default connect(mapStateToProps, { })(Toc)
