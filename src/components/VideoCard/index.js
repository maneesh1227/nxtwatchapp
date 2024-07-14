import {Link} from 'react-router-dom'
import {
  ThumbnailImg,
  ProfileImg,
  VideoCardContainer,
  TitleHead,
  VideoCardMatterContainer,
  ChannelContainer,
  ChannelContainerPara,
  DateSection,
} from './styledVideoCard'

import ItemContext from '../../context/ItemContext'

const VideoCard = props => {
  const {item, trending} = props
  const {id, channel, publishedAt, thumbnailUrl, viewCount, title} = item

  return (
    <ItemContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`}>
            <VideoCardContainer isTrending={trending}>
              <ThumbnailImg
                isTrending={trending}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoCardMatterContainer isTrending={trending}>
                <ProfileImg
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <ChannelContainer>
                  <TitleHead dark={isDark}>{title}</TitleHead>
                  <ChannelContainerPara dark={isDark}>
                    {channel.name}
                  </ChannelContainerPara>
                  <DateSection>
                    <ChannelContainerPara dark={isDark}>
                      {viewCount}
                    </ChannelContainerPara>
                    <ChannelContainerPara dark={isDark}>
                      {publishedAt}
                    </ChannelContainerPara>
                  </DateSection>
                </ChannelContainer>
              </VideoCardMatterContainer>
            </VideoCardContainer>
          </Link>
        )
      }}
    </ItemContext.Consumer>
  )
}

export default VideoCard
