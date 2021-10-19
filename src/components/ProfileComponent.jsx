import React from 'react'

function Profile(props) {
  return (
    <div className="profile">
      <div>
        <h1>
          {props.profile.firstName.text} {props.profile.lastName.text}
        </h1>
      </div>
      <div>
        <h2>День Рождения</h2>
        <p>{props.profile.birthDay.text}</p>
      </div>
      <div>
        <h2>Телефон</h2>
        <p>{props.profile.phone.text}</p>
      </div>
      <div>
        <h2>Сайт</h2>
        <p>{props.profile.webSite.text}</p>
      </div>
      <div>
        <h2>О себе</h2>
        <p>{props.profile.about.text}</p>
      </div>
      <div>
        <h2>Стек технологий</h2>
        <p>{props.profile.stack.text}</p>
      </div>
      <div>
        <h2>Описание последнего проекта</h2>
        <p>{props.profile.lastProject.text}</p>
      </div>
    </div>
  )
}
export default Profile
