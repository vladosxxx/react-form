import FirstName from './components/FirstNameComponent'
import LastName from './components/LastNameComponent'
import Date from './components/DateComponent'
import Phone from './components/PhoneComponent'
import Site from './components/SiteComponent'
import About from './components/AboutComponent'
import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      birthDay: '',
      phone: '',
      webSite: '',
      about: '',
      stack: '',
      lastProject: '',
      hasError: false,
    }
  }
  isError = (error) => {
    this.setState(() => ({
      hasError: error,
    }))
  }
  validNames = (value) => {
    if (value[0]) value = value[0].toUpperCase() + value.slice(1)
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
    return value
  }
  validSite = (value) => {
    if (value.substr(0, 8) !== 'https://') {
      this.isError(true)
    } else {
      this.isError(false)
    }
    return value
  }
  validTextArea = (value) => {}
  handlerOnChange = ({ target: { name, value } }) => {
    value = value.trim()
    console.log('name:', name)
    console.log('value:', value)
    if (name === 'firstName' || name === 'lastName') {
      value = this.validNames(value)
    }
    if (name === 'phone') {
      value = this.validPhone(value)
    }
    if (name === 'webSite') {
      value = this.validSite(value)
    }
    if (name === 'about' || name === 'stack' || name === 'lastProject') {
      value = this.validTextArea(value)
    }
    this.setState(() => ({
      [name]: value,
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
          <button type="submit">Сохранить</button>
        </form>
      </div>
    )
  }
}

export default App
