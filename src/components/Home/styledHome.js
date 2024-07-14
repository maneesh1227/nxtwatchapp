import styled from 'styled-components'

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
`
export const Logo = styled.img`
  height: 35px;
  width: 200px;
  @media (max-width: 767px) {
    height: 30px;
    width: 130px;
  }
`
export const HomeContainer = styled.div`
  height: 90vh;
  width: 80%;
  background-color: ${props => (props.dark ? '#000000' : ' #f9f9f9')};
  overflow-y: auto;
  @media (max-width: 767px) {
    width: 100vw;
  }
`
export const WithSideBar = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideosList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`
export const HomeComponentSection = styled.div`
  background-color: ${props => (props.dark ? '#000000' : ' #ffffff')};
  background-size: cover;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  align-self: flex-end;
`
export const GetItNow = styled.button`
  border: solid 1px;
  background-color: transparent;
  width: 150px;
  height: 30px;
`
export const InputContainer = styled.form`
  display: felx;
  flex-direction: row;
  align-items: center;
  width: 450px;
  height: 35px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 300px;
    height: 30px;
    padding-left: 30px;
  }
`
export const SearchButton = styled.button`
  height: 100%;
  width: 60px;
`

export const SearchInput = styled.input`
  height: 100%;
  width: 300px;
  margin-top: 0px;
  @media (max-width: 767px) {
    width: 200px;
    height: 30px;
  }
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
export const SideBar = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`
