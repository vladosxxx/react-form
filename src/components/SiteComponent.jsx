import React from 'react'

class Site extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="site"></label>
        <input
          type="text"
          id="site"
          name="webSite"
          value={this.props.site.text}
          onChange={this.props.handler}
        />
      </div>
    )
  }
}

export default Site
