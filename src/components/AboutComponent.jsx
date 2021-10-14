import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="about"></label>
        <input
          type="textarea"
          id="about"
          name="about"
          value={this.props.site.text}
          onChange={this.props.handler}
        />
      </div>
    )
  }
}

export default About
