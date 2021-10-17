import React from 'react'

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className="input-block">
        <label htmlFor="date">Дата рождения</label>
        <input
          type="date"
          id="date"
          name="birthDay"
          className="form-control"
          style={{
            border: `${this.props.date.errorEmpty ? '1px solid red' : 'none'}`,
          }}
          value={this.props.date.text}
          onChange={this.props.handler}
        />
        <span
          className="error"
          style={{
            visibility: this.props.date.errorEmpty ? 'visible' : 'hidden',
          }}
        >
          Поле пустое. Заполните пожалуйста
        </span>
      </div>
    )
  }
}

export default Date
