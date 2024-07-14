import styled from 'styled-components'

export const TrendingContainer = styled.div`
  height: 90vh;
  width: 80%;
  background-color: ${props => (props.dark ? '#000000' : ' #f9f9f9')};
  overflow-y: auto;
  @media (max-width: 767px) {
    width: 100vw;
    padding: 10px;
  }
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
