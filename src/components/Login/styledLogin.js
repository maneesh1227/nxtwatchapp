import styled from 'styled-components'

export const Background = styled.div`
  background-color: ${props => (props.dark ? '#313131' : '#f9f9f9')};
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const LabelEle = styled.label`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 600;
`
export const InputEle = styled.input`
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  padding-left: 8px;
`

export const FormEle = styled.form`
  background-color: ${props => (props.dark ? '#000000' : '#f8fafc')};
  box-shadow: ${props =>
    props.dark
      ? '0 4px 8px rgba(255, 255, 255, 0.1)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  border: ${props => (props.dark ? '#ffffff' : '#d3d3d3')};
  padding: 30px;
  width: 30%;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
  }
`
export const Logo = styled.img`
  height: 40px;
  width: 200px;
  margin-bottom: 30px;
  align-self: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
export const CheckBoxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`
export const LoginButton = styled.button`
  height: 30px;
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  margin-bottom: 0px;
`
export const Error = styled.p`
  color: #ff0b37;
  margin-top: 2px;
`
