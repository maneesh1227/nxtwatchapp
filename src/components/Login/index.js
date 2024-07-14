import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import ItemContext from '../../context/ItemContext'
import {
  Background,
  LabelEle,
  FormEle,
  Logo,
  InputContainer,
  InputEle,
  CheckBoxInputContainer,
  LoginButton,
  Error,
} from './styledLogin'

class Login extends Component {
  state = {userName: '', password: '', showPassword: false, error: false}

  onTogglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState(prevState => ({error: !prevState.error}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const {jwt_token} = data
      this.onSubmitSuccess(jwt_token)
    } else {
      this.onSubmitFailure()
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {userName, password, showPassword, error} = this.state

    return (
      <ItemContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Background dark={isDark}>
              <FormEle dark={isDark} onSubmit={this.onSubmitForm}>
                <Logo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>
                  <LabelEle dark={isDark} htmlFor="userName">
                    USERNAME
                  </LabelEle>
                  <InputEle
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={this.onChangeUserName}
                    placeholder="Username"
                  />
                </InputContainer>
                <InputContainer>
                  <LabelEle dark={isDark} htmlFor="password">
                    PASSWORD
                  </LabelEle>
                  <InputEle
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                </InputContainer>
                <CheckBoxInputContainer>
                  <input
                    onChange={this.onTogglePassword}
                    type="checkbox"
                    id="checkbox"
                  />
                  <LabelEle dark={isDark} htmlFor="checkbox">
                    Show Password
                  </LabelEle>
                </CheckBoxInputContainer>
                <LoginButton type="submit">LogIn</LoginButton>
                {error && <Error>Username and Password didn't match</Error>}
              </FormEle>
            </Background>
          )
        }}
      </ItemContext.Consumer>
    )
  }
}

export default Login
