import React from 'react'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    console.log(this.props.project.symbols)
  }

  render() {
    return (
      <div className="input-block">
        <label htmlFor="lastProject">Описание последнего проекта</label>
        <textarea
          id="lastProject"
          name="lastProject"
          className="form-control"
          style={{
            border: `${
              this.props.project.errorMessage || this.props.project.errorEmpty
                ? '1px solid red'
                : 'none'
            }`,
          }}
          value={this.props.project.text}
          onChange={this.props.handler}
        />
        <span
          className="counter"
          style={{
            color: this.props.project.errorMessage ? 'red' : 'black',
          }}
        >
          600/{this.props.project.symbols}
        </span>
        <span
          className="error"
          style={{
            visibility:
              this.props.project.errorMessage || this.props.project.errorEmpty
                ? 'visible'
                : 'hidden',
          }}
        >
          {this.props.project.errorMessage
            ? 'Вы превысили число символов!'
            : 'Поле пустое. Заполните пожалуйста'}
        </span>
      </div>
    )
  }
}

export default Project
