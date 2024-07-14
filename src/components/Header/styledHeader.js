import styled from 'styled-components'

export const HeaderComponent = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  justify-content: space-between;
  padding-left: 20px;
`
export const ProfileImg = styled.img`
  display: flex;
  height: 30px;
  width: 30px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const Logo = styled.img`
  height: 35px;
  width: 200px;
  align-self: center;
  @media (max-width: 767px) {
    height: 30px;
    width: 130px;
  }
`

export const HeaderButtons = styled.ul`
  margin-right: 20px;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  @media (max-width: 767px) {
    justify-content: space-around;
  }
`
export const BarsBtn = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
  background-color: transparent;
  border: none;
`
export const LogOutBtn = styled.button`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`
export const LogOutIcon = styled.button`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
  background-color: transparent;
  border: none;
`
export const ThemeBtn = styled.button`
  background-color: ${props => (props.dark ? 'white' : 'black')};
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: none;
  color: ${props => (props.dark ? 'black' : 'white')};
`
export const LogOutCard = styled.div`
  background-color: ${props => (props.dark ? 'white' : 'black')};
  color: ${props => (props.dark ? 'black' : 'white')};
`
