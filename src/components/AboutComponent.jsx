import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className="input-block">
        <label htmlFor="about">О себе</label>
        <textarea
          id="about"
          name="about"
          className="form-control"
          style={{
            border: `${
              this.props.about.errorMessage || this.props.about.errorEmpty
                ? '1px solid red'
                : 'none'
            }`,
          }}
          value={this.props.about.text}
          onChange={this.props.handler}
        />
        <span
          className="counter"
          style={{
            color: this.props.about.errorMessage ? 'red' : 'black',
          }}
        >
          600/{this.props.about.symbols}
        </span>
        <span
          className="error"
          style={{
            visibility:
              this.props.about.errorMessage || this.props.about.errorEmpty
                ? 'visible'
                : 'hidden',
          }}
        >
          {this.props.about.errorMessage
            ? 'Вы превысили число символов!'
            : 'Поле пустое. Заполните пожалуйста'}
        </span>
      </div>
    )
  }
}

export default About
