import React from 'react'

class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="phone"></label>
        <input
          type="text"
          id="phone"
          name="phone"
          maxLength="12"
          value={this.props.phone.text}
          onChange={this.props.handler}
        />
      </div>
    )
  }
}

export default Phone
