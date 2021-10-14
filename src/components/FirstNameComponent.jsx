import React from 'react'

class FirstName extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    console.log(this.props.err)
  }

  render() {
    return (
      <div>
        <label htmlFor="firstName">Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={this.props.name.text}
          onChange={this.props.handler}
        />
        <span class="error" aria-live="polite">
          {this.props.err}
        </span>
      </div>
    )
  }
}

export default FirstName
