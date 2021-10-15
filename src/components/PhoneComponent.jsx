import React from 'react'

class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    // console.log(this.props.phone)
  }

  render() {
    return (
      <div>
        <label htmlFor="phone">Телефон</label>
        <input
          type="text"
          id="phone"
          name="phone"
          style={{
            border: `1px solid ${
              this.props.phone.errorMessage ? 'red' : 'black'
            }`,
          }}
          value={this.props.phone.text}
          onChange={this.props.handler}
        />
        <span
          class="error"
          style={{
            visibility: this.props.phone.errorMessage ? 'visible' : 'hidden',
          }}
        >
          Телефон должен иметь не более 9 символов
        </span>
      </div>
    )
  }
}

export default Phone
