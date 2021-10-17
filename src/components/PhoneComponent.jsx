import React from 'react'

class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className="input-block">
        <label htmlFor="phone">Телефон</label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="form-control"
          style={{
            border: `${
              this.props.phone.errorMessage || this.props.phone.errorEmpty
                ? '1px solid red'
                : 'none'
            }`,
          }}
          value={this.props.phone.text}
          onChange={this.props.handler}
        />
        <span
          className="error"
          style={{
            visibility:
              this.props.phone.errorMessage || this.props.phone.errorEmpty
                ? 'visible'
                : 'hidden',
          }}
        >
          {this.props.phone.errorMessage
            ? 'Телефон должен иметь не более 9 символов'
            : 'Поле пустое. Заполните пожалуйста'}
        </span>
      </div>
    )
  }
}

export default Phone
