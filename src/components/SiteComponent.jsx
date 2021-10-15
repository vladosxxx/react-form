import React from 'react'

class Site extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <label htmlFor="site">Сайт</label>
        <input
          type="text"
          id="site"
          name="webSite"
          style={{
            border: `1px solid ${
              this.props.site.errorMessage ? 'red' : 'black'
            }`,
          }}
          value={this.props.site.text}
          onChange={this.props.handler}
        />
        <span
          class="error"
          style={{
            visibility: this.props.site.errorMessage ? 'visible' : 'hidden',
          }}
        >
          Название сайта должно начинаться с https://
        </span>
      </div>
    )
  }
}

export default Site
