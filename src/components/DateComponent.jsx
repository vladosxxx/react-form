import React from 'react'

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <input
        type="date"
        label="date"
        name="birthDay"
        value={this.props.date}
        onChange={this.props.handler}
      />
    )
  }
}

export default Date
