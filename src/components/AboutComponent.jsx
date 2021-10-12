import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <input
        type="textarea"
        name="about"
        value={this.props.site}
        onChange={this.props.handler}
      />
    )
  }
}

export default About
