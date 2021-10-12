import React from 'react'

class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <input
        type="text"
        label="phone"
        name="phone"
        maxLength="12"
        value={this.props.phone}
        onChange={this.props.handler}
      />
    )
  }
}

export default Phone
