import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  height: 90vh;
  width: 80%;
  background-color: ${props => (props.dark ? '#000000' : ' #f9f9f9')};
  overflow-y: auto;
`
export const WithSideBar = styled.div`
  display: flex;
  flex-direction: row;
`

export const LikeButton = styled.button`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`
export const DisLikeBtn = styled.button`
  color: ${props => (props.disLike ? '#2563eb' : '#64748b')};
`
export const SavedBtn = styled.button`
  color: ${props => (props.save ? '#2563eb' : '#64748b')};
`
export const ProfileImg = styled.img`
  height: 30px;
  width: 40px;
  margin: 10px;
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelContainerPara = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  margin-right: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const RetryBtn = styled.button`
  height: 30px;
  width: 100px;
  background-color: #4f46e5;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  margin-bottom: 0px;
  cursor: pointer;
`

export const FailurePara = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const FailureHead = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const FailureImg = styled.img`
  height: 200px;
  width: 200px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
