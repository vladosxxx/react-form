import React from 'react'

class Stack extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="stack">Стек технологий</label>
        <textarea
          id="stack"
          name="stack"
          style={{
            border: `1px solid ${
              this.props.stack.errorMessage ? 'red' : 'black'
            }`,
          }}
          value={this.props.stack.text}
          onChange={this.props.handler}
        />
        <span
          style={{
            color: this.props.stack.errorMessage ? 'red' : 'black',
          }}
        >
          600/{this.props.stack.symbols}
        </span>
        <span
          class="error"
          style={{
            visibility: this.props.stack.errorMessage ? 'visible' : 'hidden',
          }}
        >
          Вы превысили число символов!
        </span>
      </div>
    )
  }
}

export default Stack
