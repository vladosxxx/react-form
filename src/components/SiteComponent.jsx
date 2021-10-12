import React from 'react'

class Site extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <input
        type="text"
        label="site"
        name="webSite"
        value={this.props.site}
        onChange={this.props.handler}
      />
    )
  }
}

export default Site
