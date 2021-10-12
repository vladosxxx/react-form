import React from 'react'

class FirstName extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <input
        type="text"
        label="firstName"
        name="firstName"
        value={this.props.name}
        onChange={this.props.handler}
      />
    )
  }
}

export default FirstName
