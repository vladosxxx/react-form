import React from 'react'

class Stack extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className="input-block">
        <label htmlFor="stack">Стек технологий</label>
        <textarea
          id="stack"
          name="stack"
          className="form-control"
          style={{
            border: `${
              this.props.stack.errorMessage || this.props.stack.errorEmpty
                ? '1px solid red'
                : 'none'
            }`,
          }}
          value={this.props.stack.text}
          onChange={this.props.handler}
        />
        <span
          className="counter"
          style={{
            color: this.props.stack.errorMessage ? 'red' : 'black',
          }}
        >
          600/{this.props.stack.symbols}
        </span>
        <span
          className="error"
          style={{
            visibility:
              this.props.stack.errorMessage || this.props.stack.errorEmpty
                ? 'visible'
                : 'hidden',
          }}
        >
          {this.props.stack.errorMessage
            ? 'Вы превысили число символов!'
            : 'Поле пустое. Заполните пожалуйста'}
        </span>
      </div>
    )
  }
}

export default Stack
