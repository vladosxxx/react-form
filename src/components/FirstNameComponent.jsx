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
        <label htmlFor="firstName">Имя</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
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
          Имя должно начинаться с заглавной буквы
        </span>
      </div>
    )
  }
}

export default FirstName
