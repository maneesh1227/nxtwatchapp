import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon, FaBars} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import ItemContext from '../../context/ItemContext'

import {
  HeaderComponent,
  ProfileImg,
  Logo,
  HeaderButtons,
  BarsBtn,
  LogOutBtn,
  LogOutIcon,
  ThemeBtn,
  LogOutCard,
} from './styledHeader'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ItemContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const onClickTheme = () => {
          changeTheme()
        }
        return (
          <HeaderComponent dark={isDark}>
            <Link to="/">
              <Logo
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <HeaderButtons>
              <li>
                <ThemeBtn
                  data-testid="theme"
                  dark="isDark"
                  onClick={onClickTheme}
                >
                  {isDark ? <IoSunnyOutline /> : <FaMoon />}
                </ThemeBtn>
              </li>
              <li>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>
              <Popup
                trigger={
                  <li>
                    <BarsBtn>
                      <FaBars />
                    </BarsBtn>
                  </li>
                }
                position="bottom right"
                className="popup-content"
              >
                <Link to="/">
                  <li>
                    <h1>Home</h1>
                  </li>
                </Link>
                <Link to="/trending">
                  <li>
                    <h1>Trending</h1>
                  </li>
                </Link>
                <Link to="/gaming">
                  <li>
                    <h1>Gaming</h1>
                  </li>
                </Link>
                <Link to="/saved-videos">
                  <li>
                    <h1>Saved Videos</h1>
                  </li>
                </Link>
              </Popup>

              <Popup
                modal
                trigger={
                  <li>
                    <LogOutBtn>Logout</LogOutBtn>
                  </li>
                }
              >
                {close => (
                  <>
                    <LogOutCard dark={isDark}>
                      <p>Are you sure, you want to logout</p>
                      <button type="button" onClick={onClickLogOut}>
                        Confirm
                      </button>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancle
                      </button>
                    </LogOutCard>
                  </>
                )}
              </Popup>

              <li>
                <LogOutIcon>
                  <FiLogOut />
                </LogOutIcon>
              </li>
            </HeaderButtons>
          </HeaderComponent>
        )
      }}
    </ItemContext.Consumer>
  )
}

export default withRouter(Header)
