import {Link} from 'react-router-dom'

import {
  ThumbnailImg,
  VideoCardContainer,
  TitleHead,
  VideoCardMatterContainer,
  ChannelContainerPara,
} from './styledGamingCard'

import ItemContext from '../../context/ItemContext'

const GamingCard = props => {
  const {item} = props
  const {id, thumbnailUrl, viewCount, title} = item

  return (
    <ItemContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`}>
            <VideoCardContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardMatterContainer dark={isDark}>
                <TitleHead dark={isDark}>{title}</TitleHead>
                <ChannelContainerPara dark={isDark}>
                  {viewCount} Watching Worldwide
                </ChannelContainerPara>
              </VideoCardMatterContainer>
            </VideoCardContainer>
          </Link>
        )
      }}
    </ItemContext.Consumer>
  )
}

export default GamingCard
