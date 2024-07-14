import {Link} from 'react-router-dom'

import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'

import ItemContext from '../../context/ItemContext'

import {
  SideBarUl,
  ListItem,
  SideBarComponent,
  Para,
  AppLogo,
  ContactUsSection,
} from './styledSideBar'

const SideBar = () => (
  <ItemContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SideBarComponent dark={isDark}>
          <SideBarUl>
            <Link to="/">
              <ListItem dark={isDark}>
                <IoMdHome />
                <Para>Home</Para>
              </ListItem>
            </Link>
            <Link to="/trending">
              <ListItem dark={isDark}>
                <FaFire />
                <Para>Trending</Para>
              </ListItem>
            </Link>
            <Link to="/gaming">
              <ListItem dark={isDark}>
                <SiYoutubegaming />
                <Para>Gaming</Para>
              </ListItem>
            </Link>
            <Link to="/saved-videos">
              <ListItem dark={isDark}>
                <RiPlayListAddFill />
                <Para>Saved Videos</Para>
              </ListItem>
            </Link>
          </SideBarUl>
          <ContactUsSection dark={isDark}>
            <p>CONTACT US</p>
            <SideBarUl contactus>
              <ListItem>
                <AppLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </ListItem>
              <ListItem>
                <AppLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </ListItem>
              <ListItem>
                <AppLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ListItem>
            </SideBarUl>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </ContactUsSection>
        </SideBarComponent>
      )
    }}
  </ItemContext.Consumer>
)

export default SideBar
