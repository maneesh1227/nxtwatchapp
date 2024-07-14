import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'

import ItemContext from '../../context/ItemContext'
import {
  NotFoundContainer,
  Logo,
  NotFoundHead,
  NotFoundPara,
  WithSideBar,
} from './styledNotFound'

console.log('notfount')

class NotFound extends Component {
  render() {
    return (
      <ItemContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div>
              <Header />
              <WithSideBar>
                <SideBar />
                <NotFoundContainer>
                  <Logo
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                  <NotFoundHead dark={isDark}>Page Not Found</NotFoundHead>
                  <NotFoundPara dark={isDark}>
                    We are sorry, the page your requested could not be found.
                  </NotFoundPara>
                </NotFoundContainer>
              </WithSideBar>
            </div>
          )
        }}
      </ItemContext.Consumer>
    )
  }
}
export default NotFound
