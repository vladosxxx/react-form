import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  render() {
    return (
      <div className="profile">
        <div>
          <h1>
            {this.props.profile.firstName.text}{' '}
            {this.props.profile.lastName.text}
          </h1>
        </div>
        <div>
          <h2>День Рождения</h2>
          <p>{this.props.profile.birthDay.text}</p>
        </div>
        <div>
          <h2>Телефон</h2>
          <p>{this.props.profile.phone.text}</p>
        </div>
        <div>
          <h2>Сайт</h2>
          <p>{this.props.profile.webSite.text}</p>
        </div>
        <div>
          <h2>О себе</h2>
          <p>{this.props.profile.about.text}</p>
        </div>
        <div>
          <h2>Стек технологий</h2>
          <p>{this.props.profile.stack.text}</p>
        </div>
        <div>
          <h2>Описание последнего проекта</h2>
          <p>{this.props.profile.lastProject.text}</p>
        </div>
      </div>
    )
  }
}
export default Profile
