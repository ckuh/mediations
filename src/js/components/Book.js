import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { mainStyle } from '../../styles/mainStyle'

// componenets
import NavBar from './NavBar'

class Book extends Component {
  render () {
    return (
      <View style={styles.app}>
        <View style={styles.container}>
          <NavBar title={'Title'} navigator={this.props.navigator}/>
        </View>
      </View>
    )
  }
}

const { object } = React.PropTypes
Book.propTypes = {
  books: object
}
const styles = StyleSheet.create(mainStyle)

const mapStateToProps = (state) => ({ books: state.books })
export default connect(mapStateToProps, { })(Book)
