import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import ItemContext from '../../context/ItemContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  WithSideBar,
  VideoDetailsContainer,
  LikeButton,
  DisLikeBtn,
  SavedBtn,
  ProfileImg,
  ProfileContainer,
  ChannelContainerPara,
  RetryBtn,
  FailureContainer,
  FailureImg,
  FailureHead,
  FailurePara,
} from './styledVideoDetailView'

const apistatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailView extends Component {
  state = {data: {}, status: apistatus.initial}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apistatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${token}`},
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const {video_details} = data
      const updatedData = {
        channel: video_details.channel,
        id: video_details.id,
        videoUrl: video_details.video_url,
        publishedAt: video_details.published_at,
        thumbnailUrl: video_details.thumbnail_url,
        viewCount: video_details.view_count,
        title: video_details.title,
        description: video_details.description,
      }
      this.setState({data: updatedData, status: apistatus.success})
    } else {
      this.setState({status: apistatus.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getDate()
  }

  render() {
    const {data, status} = this.state
    const {
      channel,
      videoUrl,
      publishedAt,
      id,
      thumbnailUrl,
      viewCount,
      title,
      description,
    } = data

    const obj = {
      id,
      channel,
      publishedAt,
      thumbnailUrl,
      viewCount,
      title,
    }

    return (
      <ItemContext.Consumer>
        {value => {
          const {
            isDark,
            addToLikedVideos,
            likedVideosList,
            addToDisLikedVideos,
            disLikedVideosList,
            savedVideosList,
            addToSavedVideos,
          } = value
          const onClickLikeBtn = () => {
            addToLikedVideos(id)
          }

          const onClickDislikeBtn = () => {
            addToDisLikedVideos(id)
          }

          const onClickSaveBtn = () => {
            addToSavedVideos(obj)
          }

          const isLiked = likedVideosList.includes(id)
          const isDisLiked = disLikedVideosList.includes(id)
          const savedObj = savedVideosList.filter(
            eachItem => eachItem.id === obj.id,
          )
          const isSaved = savedObj.length > 0

          return (
            <div>
              <Header />
              <WithSideBar>
                <SideBar />
                {status === apistatus.success ? (
                  <VideoDetailsContainer dark={isDark} data-testid='trending'>
                    <ReactPlayer url={videoUrl} />
                    <h1>{title}</h1>
                    <div>
                      <p>{viewCount} views</p>
                      <p>{publishedAt}</p>
                      <div>
                        <LikeButton onClick={onClickLikeBtn} like={isLiked}>
                          <AiOutlineLike /> Like
                        </LikeButton>
                        <DisLikeBtn
                          onClick={onClickDislikeBtn}
                          disLike={isDisLiked}
                        >
                          <AiOutlineDislike /> Dislike
                        </DisLikeBtn>
                        <SavedBtn onClick={onClickSaveBtn} save={isSaved}>
                          <RiPlayListAddFill /> Save
                        </SavedBtn>
                      </div>
                    </div>
                    <hr />
                    <ProfileContainer>
                      <ProfileImg
                        src={channel.profile_image_url}
                        alt='channel logo'
                      />
                      <div>
                        <ChannelContainerPara dark={isDark}>
                          {channel.name}
                        </ChannelContainerPara>
                        <ChannelContainerPara dark={isDark}>
                          {channel.subscriber_count}
                        </ChannelContainerPara>
                      </div>
                    </ProfileContainer>
                    <p>{description}</p>
                  </VideoDetailsContainer>
                ) : status === apistatus.inProgress ? (
                  <div className='loader-container' data-testid='loader'>
                    <Loader
                      type='ThreeDots'
                      color={isDark ? '#ffffff' : '#000000'}
                      height='50'
                      width='50'
                    />
                  </div>
                ) : (
                  <FailureContainer>
                    <FailureImg
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                      alt='failure view'
                    />
                    <FailureHead>Oops! Something Went Wrong</FailureHead>
                    <FailurePara>
                      We are having some trouble to complete your request.Please
                      try again
                    </FailurePara>
                    <RetryBtn onClick={this.onClickRetryBtn}>Retry</RetryBtn>
                  </FailureContainer>
                )}
              </WithSideBar>
            </div>
          )
        }}
      </ItemContext.Consumer>
    )
  }
}

export default VideoDetailView
