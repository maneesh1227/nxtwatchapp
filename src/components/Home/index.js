import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import {RiCloseLine} from 'react-icons/ri'
import ItemContext from '../../context/ItemContext'

import {
  Banner,
  Logo,
  HomeContainer,
  WithSideBar,
  VideosList,
  HomeComponentSection,
  CloseBtn,
  GetItNow,
  InputContainer,
  SearchInput,
  SearchButton,
  RetryBtn,
  FailureContainer,
  FailureImg,
  FailureHead,
  FailurePara,
} from './styledHome'

import VideoCard from '../VideoCard'
import Header from '../Header'
import SideBar from '../SideBar'

const apistatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchValue: '',
    videosList: [],
    status: apistatus.initial,
    banner: true,
  }

  componentDidMount = () => {
    this.getDate()
  }

  getDate = async () => {
    this.setState({status: apistatus.inProgress})
    const token = Cookies.get('jwt_token')
    const {searchValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      headers: {Authorization: `Bearer ${token}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const {videos} = fetchedData
      const updatedData = videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        title: eachItem.title,
      }))
      this.setState({videosList: updatedData, status: apistatus.success})
    } else {
      this.setState({status: apistatus.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getDate()
  }

  onClickCloseBtn = () => {
    this.setState({banner: false})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.getDate()
  }

  handleSearchChange = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue, videosList, status, banner} = this.state
    let code

    switch (status) {
      case apistatus.success:
        if (videosList.length !== 0) {
          code = (
            <VideosList>
              {videosList.map(eachItem => (
                <VideoCard item={eachItem} key={eachItem.id} trending={false} />
              ))}
            </VideosList>
          )
        } else {
          code = (
            <FailureContainer>
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureHead>No Search results found</FailureHead>
              <FailurePara>
                Try different Key words or remove search filters
              </FailurePara>
              <RetryBtn onClick={this.onClickRetryBtn}>Retry</RetryBtn>
            </FailureContainer>
          )
        }
        break
      case apistatus.inProgress:
        code = (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
        break
      case apistatus.failure:
        code = (
          <FailureContainer>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailureHead>Oops! Something Went Wrong</FailureHead>
            <FailurePara>
              We are having some trouble to complete your request.Please try
              again
            </FailurePara>
            <RetryBtn onClick={this.onClickRetryBtn}>Retry</RetryBtn>
          </FailureContainer>
        )
        break
      default:
        code = null
    }

    return (
      <ItemContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeComponentSection>
              <Header />
              <WithSideBar>
                <SideBar />
                <HomeContainer dark={isDark} data-testid="home">
                  {banner && (
                    <Banner data-testid="banner">
                      <CloseBtn
                        data-testid="close"
                        onClick={this.onClickCloseBtn}
                      >
                        <RiCloseLine />
                      </CloseBtn>
                      <br />
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p>Buy NXT Watch Premium prepaid plans with UPI</p>
                      <GetItNow>GET IT NOW</GetItNow>
                    </Banner>
                  )}
                  <div>
                    <InputContainer onSubmit={this.onSubmitForm}>
                      <SearchInput
                        type="search"
                        value={searchValue}
                        onChange={this.handleSearchChange}
                        placeholder="Search"
                      />
                      <SearchButton type="submit" data-testid="searchButton">
                        <IoIosSearch />
                      </SearchButton>
                    </InputContainer>
                    <div>{code}</div>
                  </div>
                </HomeContainer>
              </WithSideBar>
            </HomeComponentSection>
          )
        }}
      </ItemContext.Consumer>
    )
  }
}

export default Home
