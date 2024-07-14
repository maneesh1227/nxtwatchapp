import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'

import {
  TrendingContainer,
  WithSideBar,
  VideosList,
  TrendingHead,
} from './styledTrending'

import ItemContext from '../../context/ItemContext'

const apistatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingData: [], status: apistatus.initial}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apistatus.inProgress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
      this.setState({trendingData: updatedData, status: apistatus.success})
    } else {
      this.setState({status: apistatus.failure})
    }
  }

  render() {
    const {status, trendingData} = this.state
    let code
    switch (status) {
      case apistatus.success:
        code = (
          <VideosList>
            {trendingData.map(eachItem => (
              <VideoCard item={eachItem} key={eachItem.id} trending />
            ))}
          </VideosList>
        )
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
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request.Please try
              again
            </p>
            <button>Retry</button>
          </div>
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
            <div>
              <Header />
              <WithSideBar>
                <SideBar />
                <TrendingContainer dark={isDark} data-testid="trending">
                  <TrendingHead dark={isDark}>Trending</TrendingHead>
                  <div>{code}</div>
                </TrendingContainer>
              </WithSideBar>
            </div>
          )
        }}
      </ItemContext.Consumer>
    )
  }
}

export default Trending
