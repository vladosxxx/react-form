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
import React, { useEffect, useState } from 'react'
function App() {
  const [state, setState] = useState({
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
  })
  const [confirm, setConfirm] = useState(false)

  const validNames = (name, value) => {
    value = value.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '')
    setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        errorMessage:
          value === '' || value[0] === value[0].toUpperCase() ? false : true,
      },
      hasError: state[name].errorMessage ? true : false,
    }))

    return value
  }
  const validPhone = (value) => {
    value = value
      .replace(/[^\d]/g, '')
      .replace(
        /(\d{1}(?=\d))((\d{4}(?=\d))|(\d{0,3}$))((\d{2}(?=\d))|(\d{0,4}$))/,
        (m, $1, $2, $3, $4, $5, $6, $7) =>
          ($1 ? $1 + '-' : m) + ($3 ? $3 + '-' : $4) + ($6 ? $6 + '-' : $7)
      )
    setState((prevState) => ({
      ...prevState,
      phone: {
        ...prevState.phone,
        errorMessage: value.length > 12 ? true : false,
      },
      hasError: state.phone.errorMessage ? true : false,
    }))
    return value
  }
  const validSite = (value) => {
    setState((prevState) => ({
      ...prevState,
      webSite: {
        ...prevState.webSite,
        errorMessage: value.substr(0, 8) !== 'https://' ? true : false,
      },
      hasError: state.webSite.errorMessage ? true : false,
    }))
    return value
  }
  const validTextArea = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        symbols: value.length,
        errorMessage: value.length > 600 ? true : false,
      },
      hasError: state[name].errorMessage ? true : false,
    }))
    return value
  }
  const handlerOnChange = ({ target: { name, value } }) => {
    if (name === 'about' || name === 'stack' || name === 'lastProject') {
      value = validTextArea(name, value)
    } else {
      value = value.trim()
    }
    if (name === 'firstName' || name === 'lastName') {
      value = validNames(name, value)
    }
    if (name === 'phone') {
      value = validPhone(value)
    }
    if (name === 'webSite') {
      value = validSite(value)
    }
    setState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], text: value, errorEmpty: false },
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    Object.keys(state).forEach((fieldName) => {
      if (fieldName !== 'hasError' && fieldName !== 'profileDone') {
        if (state[fieldName].text === '') {
          setState((prevState) => ({
            ...prevState,
            [fieldName]: {
              ...prevState[fieldName],
              errorEmpty: true,
            },
            hasError: true,
          }))
        }
      }
    })
    setConfirm(true)
  }
  const handleCancel = (e) => {
    e.preventDefault()
    Object.keys(state).forEach((fieldName) => {
      setState((prevState) => ({
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
  useEffect(() => {
    if (confirm === true && state.hasError === false) {
      setState((prevState) => ({
        ...prevState,
        profileDone: true,
      }))
    }
    // eslint-disable-next-line
  }, [confirm])
  return (
    <div className="App">
      <h2 className="form-title">My profile</h2>
      {state.profileDone ? (
        <Profile profile={state} />
      ) : (
        <form className="profile-form" onSubmit={handleSubmit}>
          <FirstName name={state.firstName} handler={handlerOnChange} />
          <LastName name={state.lastName} handler={handlerOnChange} />
          <Date date={state.birthDay} handler={handlerOnChange} />
          <Phone phone={state.phone} handler={handlerOnChange} />
          <Site site={state.webSite} handler={handlerOnChange} />
          <About about={state.about} handler={handlerOnChange} />
          <Stack stack={state.stack} handler={handlerOnChange} />
          <Project project={state.lastProject} handler={handlerOnChange} />
          <div className="buttons">
            <button className="confirm" type="submit">
              Сохранить
            </button>
            <button className="cancel" onClick={handleCancel}>
              Отменить
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default App
