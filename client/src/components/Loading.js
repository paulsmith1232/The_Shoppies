import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '30px',
    marginTop: '20px',
    marginLeft: '250px'  }
}

export default class Loading extends React.Component {
  state = { content: this.props.text }
  componentDidMount () {
    const { speed, text } = this.props

    this.interval = window.setInterval(() => {
      this.state.content === text + '...'
      ? this.setState({ content: text })
      : this.setState(({ content }) => ({ content: content + '.'}))
    }, speed)
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.content}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 1000
}