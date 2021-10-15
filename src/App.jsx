import FirstName from './components/FirstNameComponent'
import LastName from './components/LastNameComponent'
import Date from './components/DateComponent'
import Phone from './components/PhoneComponent'
import Site from './components/SiteComponent'
import About from './components/AboutComponent'
import Stack from './components/StackComponent'
import Project from './components/ProjectComponent'
import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: {
        text: '',
        errorMessage: false,
      },
      lastName: {
        text: '',
        errorMessage: false,
      },
      birthDay: {
        text: '',
        errorMessage: false,
      },
      phone: {
        text: '',
        errorMessage: false,
      },
      webSite: {
        text: '',
        errorMessage: false,
      },
      about: {
        text: '',
        symbols: 0,
        errorMessage: false,
      },
      stack: {
        text: '',
        symbols: 0,
        errorMessage: false,
      },
      lastProject: {
        text: '',
        symbols: 0,
        errorMessage: false,
      },
      hasError: false,
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
    }))
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
    }))
    console.log(this.state.phone)
    return value
  }
  validSite = (value) => {
    this.setState((prevState) => ({
      webSite: {
        ...prevState.webSite,
        errorMessage: value.substr(0, 8) !== 'https://' ? true : false,
      },
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
    }))
  }
  handlerOnChange = ({ target: { name, value } }) => {
    value = value.trim()
    if (name === 'firstName' || name === 'lastName') {
      value = this.validNames(name, value)
    }
    if (name === 'phone') {
      value = this.validPhone(value)
    }
    if (name === 'webSite') {
      value = this.validSite(value)
    }
    if (name === 'about' || name === 'stack' || name === 'lastProject') {
      value = this.validTextArea(name, value)
    }
    console.log(typeof name)
    this.setState((prevState) => ({
      [name]: { ...prevState[name], text: value },
    }))
  }
  handlerDate = () => {}
  render() {
    return (
      <div className="App">
        <form>
          <FirstName
            name={this.state.firstName}
            handler={this.handlerOnChange}
          />
          <LastName name={this.state.lastName} handler={this.handlerOnChange} />
          <Date date={this.state.birthDay} handler={this.handlerOnChange} />
          <Phone phone={this.state.phone} handler={this.handlerOnChange} />
          <Site site={this.state.webSite} handler={this.handlerOnChange} />
          <About about={this.state.about} handler={this.handlerOnChange} />
          <Stack stack={this.state.stack} handler={this.handlerOnChange} />
          <Project
            project={this.state.lastProject}
            handler={this.handlerOnChange}
          />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    )
  }
}

export default App
