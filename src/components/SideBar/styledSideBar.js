import styled from 'styled-components'

export const SideBarUl = styled.ul`
  list-style-type: none;
  padding-left: 5px;
  display: flex;
  flex-direction: ${props => (props.contactus ? 'row' : 'column')};
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 30px;
  margin-top: 0px;
  height: 50px;
  color: ${props => (props.dark ? '#d7dfe9' : '#616e7c')};
`
export const SideBarComponent = styled.div`
  width: 20%;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`
export const Para = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`
export const AppLogo = styled.img`
  height: 40px;
  width: 40px;
`
export const ContactUsSection = styled.div`
  font-size: 15px;
  color: ${props => (props.dark ? '#ebebeb' : '#212121')};
`
