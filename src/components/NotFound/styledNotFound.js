import styled from 'styled-components'

export const NotFoundPara = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NotFoundHead = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const Logo = styled.img`
  height: 200px;
  width: 200px;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const WithSideBar = styled.div`
  display: flex;
  flex-direction: row;
`
