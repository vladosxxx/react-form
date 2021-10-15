import React from 'react'

class LastName extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="lastName">Фамилия</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          style={{
            border: `1px solid ${
              this.props.name.errorMessage ? 'red' : 'black'
            }`,
          }}
          value={this.props.name.text}
          onChange={this.props.handler}
        />
        <span
          class="error"
          style={{
            visibility: this.props.name.errorMessage ? 'visible' : 'hidden',
          }}
        >
          Фамилия должна начинаться с заглавной буквы
        </span>
      </div>
    )
  }
}

export default LastName
