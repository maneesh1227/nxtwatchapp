import styled from 'styled-components'

export const ThumbnailImg = styled.img`
  height: 80%;
  width: 100%;
`

export const VideoCardContainer = styled.div`
  height: 280px;
  width: 250px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`
export const TitleHead = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  margin-top: 0px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const VideoCardMatterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  margin-top: 5px;
`

export const ChannelContainerPara = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  margin-right: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
