import React from 'react'

class LastName extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <input
        type="text"
        label="lastName"
        name="lastName"
        value={this.props.name}
        onChange={this.props.handler}
      />
    )
  }
}

export default LastName
