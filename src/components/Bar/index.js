import React from 'react-native'
const { Animated, View } = React
import styles from './styles'

// Configuration Constants
const INITIAL_VALUE_SCALE = 0
const DESTINATION_VALUE_SCALE = 1
const VALUE_SCALE_SPRING_FRICTION = 5

export default class Bar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      valueScale: new Animated.Value(INITIAL_VALUE_SCALE),
    }
  }

  componentDidMount() {
    Animated.spring(this.state.valueScale, {
      friction: VALUE_SCALE_SPRING_FRICTION,
      toValue: DESTINATION_VALUE_SCALE,
    }).start()
  }

  getStyles() {
    return styles({ 
      ...this.props,
      valueScale: this.state.valueScale,
    })
  }

  render() {
    const {
      style,
    } = this.props

    return (
      <View style={[this.getStyles().container, style]}>
        <Animated.View style={this.getStyles().maximum}/>
        <Animated.View style={this.getStyles().value}/>
      </View>
    )
  }
}