import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'

import {
  TrendingContainer,
  WithSideBar,
  VideosList,
  TrendingHead,
  NoSavedImg,
  NoSavedHead,
  NoSavedPara,
  NoSavedContainer,
} from './styledSavedVideos'

import ItemContext from '../../context/ItemContext'

class SavedVideos extends Component {
  render() {
    return (
      <ItemContext.Consumer>
        {value => {
          const {isDark, savedVideosList} = value
          return (
            <div>
              <Header />
              <WithSideBar>
                <SideBar />
                <TrendingContainer dark={isDark} data-testid="trending">
                  <TrendingHead dark={isDark}>Saved Videos</TrendingHead>
                  <div>
                    {savedVideosList.length > 0 ? (
                      <VideosList>
                        {savedVideosList.map(eachItem => (
                          <VideoCard
                            item={eachItem}
                            key={eachItem.id}
                            trending
                          />
                        ))}
                      </VideosList>
                    ) : (
                      <NoSavedContainer>
                        <NoSavedImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                          alt="no saved videos"
                        />
                        <NoSavedHead dark={isDark}>
                          No saved videos found
                        </NoSavedHead>
                        <NoSavedPara dark={isDark}>
                          You can save your videos while watching them
                        </NoSavedPara>
                      </NoSavedContainer>
                    )}
                  </div>
                </TrendingContainer>
              </WithSideBar>
            </div>
          )
        }}
      </ItemContext.Consumer>
    )
  }
}
export default SavedVideos
