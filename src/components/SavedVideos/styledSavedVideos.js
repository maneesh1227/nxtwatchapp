import styled from 'styled-components'

export const TrendingContainer = styled.div`
  height: 90vh;
  width: 80%;
  background-color: ${props => (props.dark ? '#000000' : ' #f9f9f9')};
  overflow-y: auto;
`
export const WithSideBar = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideosList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const TrendingHead = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NoSavedPara = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NoSavedHead = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NoSavedImg = styled.img`
  height: 200px;
  width: 200px;
`
export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
