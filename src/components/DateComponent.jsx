import React from 'react'

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="date"></label>
        <input
          type="date"
          id="date"
          name="birthDay"
          value={this.props.date.text}
          onChange={this.props.handler}
        />
      </div>
    )
  }
}

export default Date
