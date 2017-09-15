import React from 'react'
import PropTypes from 'prop-types'
import randomColor from 'randomcolor'

class Username extends React.Component {
  render() {
    return (
      <span className="username" style={{color: randomColor({seed: this.props.username})}}>
        {this.props.username}
      </span>
    )
  }
}

Username.propTypes = {
  username: PropTypes.string.isRequired
}

export default Username
