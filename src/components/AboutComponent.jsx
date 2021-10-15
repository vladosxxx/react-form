import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="about">О себе</label>
        <textarea
          id="about"
          name="about"
          style={{
            border: `1px solid ${
              this.props.about.errorMessage ? 'red' : 'black'
            }`,
          }}
          value={this.props.about.text}
          onChange={this.props.handler}
        />
        <span
          style={{
            color: this.props.about.errorMessage ? 'red' : 'black',
          }}
        >
          600/{this.props.about.symbols}
        </span>
        <span
          class="error"
          style={{
            visibility: this.props.about.errorMessage ? 'visible' : 'hidden',
          }}
        >
          Вы превысили число символов!
        </span>
      </div>
    )
  }
}

export default About
