import React from 'react'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="lastProject">Описание последнего проекта</label>
        <textarea
          id="lastProject"
          name="lastProject"
          style={{
            border: `1px solid ${
              this.props.project.errorMessage ? 'red' : 'black'
            }`,
          }}
          value={this.props.project.text}
          onChange={this.props.handler}
        />
        <span
          style={{
            color: this.props.project.errorMessage ? 'red' : 'black',
          }}
        >
          600/{this.props.project.symbols}
        </span>
        <span
          class="error"
          style={{
            visibility: this.props.project.errorMessage ? 'visible' : 'hidden',
          }}
        >
          Вы превысили число символов!
        </span>
      </div>
    )
  }
}

export default Project
