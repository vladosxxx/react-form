import React from 'react'

class LastName extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="lastName">Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={this.props.name.text}
          onChange={this.props.handler}
        />
      </div>
    )
  }
}

export default LastName
