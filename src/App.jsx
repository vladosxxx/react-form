import FirstName from './components/FirstNameComponent'
import LastName from './components/LastNameComponent'
import Date from './components/DateComponent'
import Phone from './components/PhoneComponent'
import Site from './components/SiteComponent'
import About from './components/AboutComponent'
import Stack from './components/StackComponent'
import Project from './components/ProjectComponent'
import Profile from './components/ProfileComponent'
import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: {
        text: '',
        errorEmpty: false,
        errorMessage: false,
      },
      lastName: {
        text: '',
        errorEmpty: false,
        errorMessage: false,
      },
      birthDay: {
        text: '',
        errorMessage: false,
        errorEmpty: false,
      },
      phone: {
        text: '',
        errorEmpty: false,
        errorMessage: false,
      },
      webSite: {
        text: '',
        errorEmpty: false,
        errorMessage: false,
      },
      about: {
        text: '',
        symbols: 0,
        errorEmpty: false,
        errorMessage: false,
      },
      stack: {
        text: '',
        symbols: 0,
        errorEmpty: false,
        errorMessage: false,
      },
      lastProject: {
        text: '',
        symbols: 0,
        errorEmpty: false,
        errorMessage: false,
      },
      hasError: false,
      profileDone: false,
    }
  }
  validNames = (name, value) => {
    value = value.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '')
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        errorMessage:
          value === '' || value[0] === value[0].toUpperCase() ? false : true,
      },
      hasError: this.state[name].errorMessage ? true : false,
    }))
    console.log(this.state)
    return value
  }
  validPhone = (value) => {
    value = value
      .replace(/[^\d]/g, '')
      .replace(
        /(\d{1}(?=\d))((\d{4}(?=\d))|(\d{0,3}$))((\d{2}(?=\d))|(\d{0,4}$))/,
        (m, $1, $2, $3, $4, $5, $6, $7) =>
          ($1 ? $1 + '-' : m) + ($3 ? $3 + '-' : $4) + ($6 ? $6 + '-' : $7)
      )
    this.setState((prevState) => ({
      phone: {
        ...prevState.phone,
        errorMessage: value.length > 12 ? true : false,
      },
      hasError: this.state.phone.errorMessage ? true : false,
    }))
    return value
  }
  validSite = (value) => {
    this.setState((prevState) => ({
      webSite: {
        ...prevState.webSite,
        errorMessage: value.substr(0, 8) !== 'https://' ? true : false,
      },
      hasError: this.state.webSite.errorMessage ? true : false,
    }))
    return value
  }
  validTextArea = (name, value) => {
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        symbols: value.length,
        errorMessage: value.length > 600 ? true : false,
      },
      hasError: this.state[name].errorMessage ? true : false,
    }))
    return value
  }
  handlerOnChange = ({ target: { name, value } }) => {
    console.log('haser: ', this.state.hasError)
    if (name === 'about' || name === 'stack' || name === 'lastProject') {
      value = this.validTextArea(name, value)
    } else {
      value = value.trim()
    }
    if (name === 'firstName' || name === 'lastName') {
      value = this.validNames(name, value)
    }
    if (name === 'phone') {
      value = this.validPhone(value)
    }
    if (name === 'webSite') {
      value = this.validSite(value)
    }
    this.setState((prevState) => ({
      [name]: { ...prevState[name], text: value, errorEmpty: false },
    }))
  }
  profileShow = () => {
    this.setState((prevState) => ({
      ...prevState,
      profileDone: this.state.hasError ? false : true,
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    Object.keys(this.state).forEach((fieldName) => {
      if (fieldName !== 'hasError' && fieldName !== 'profileDone') {
        if (this.state[fieldName].text === '') {
          this.setState(
            (prevState) => ({
              ...prevState,
              [fieldName]: {
                ...prevState[fieldName],
                errorEmpty: true,
              },
              hasError: true,
            }),
            () => this.profileShow()
          )
        }
      }
    })
    this.profileShow()
  }
  handleCancel = (e) => {
    e.preventDefault()
    Object.keys(this.state).forEach((fieldName) => {
      this.setState((prevState) => ({
        ...prevState,
        [fieldName]: {
          text: '',
          errorEmpty: false,
          errorMessage: false,
          symbols: 0,
        },
        hasError: false,
        profileDone: false,
      }))
    })
  }
  render() {
    return (
      <div className="App">
        <h2 className="form-title">My profile</h2>
        {this.state.profileDone ? (
          <Profile profile={this.state} />
        ) : (
          <form className="profile-form" onSubmit={this.handleSubmit}>
            <FirstName
              name={this.state.firstName}
              handler={this.handlerOnChange}
            />
            <LastName
              name={this.state.lastName}
              handler={this.handlerOnChange}
            />
            <Date date={this.state.birthDay} handler={this.handlerOnChange} />
            <Phone phone={this.state.phone} handler={this.handlerOnChange} />
            <Site site={this.state.webSite} handler={this.handlerOnChange} />
            <About about={this.state.about} handler={this.handlerOnChange} />
            <Stack stack={this.state.stack} handler={this.handlerOnChange} />
            <Project
              project={this.state.lastProject}
              handler={this.handlerOnChange}
            />
            <div className="buttons">
              <button className="confirm" type="submit">
                Сохранить
              </button>
              <button className="cancel" onClick={this.handleCancel}>
                Отменить
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default App
