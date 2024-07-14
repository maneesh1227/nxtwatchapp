import styled from 'styled-components'

export const ThumbnailImg = styled.img`
  height: 55%;
  width: ${props => (props.isTrending ? '35%' : '100%')};
  margin-right: ${props => (props.isTrending ? '20px' : '0px')};
`

export const ProfileImg = styled.img`
  height: 30px;
  width: 40px;
  margin: 10px;
`
export const VideoCardContainer = styled.div`
  height: 280px;
  width: ${props => (props.isTrending ? '100%' : '300px')};
  margin-bottom: 10px;
  display: flex;
  flex-direction: ${props => (props.isTrending ? 'row' : 'column')};
  outline: none;
  text-decoration: none;
  color: inherit;
`
export const TitleHead = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  margin-top: 0px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const VideoCardMatterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 45%;
  margin-top: 10px;
  width: ${props => (props.isTrending ? '50%' : '100%')};
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const ChannelContainerPara = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  margin-right: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const DateSection = styled.div`
  display: flex;
  margin-top: 5px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
