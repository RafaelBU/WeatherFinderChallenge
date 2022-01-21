import styled from 'styled-components'

export const FormContainer = styled.div`
  background-color: #2c3e50;
  height: 90vh;
  padding-top: 100px;
  padding-left: 50px;
  width: 61%;
`

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #f16051;
  width: 30%;
  padding-bottom: 4px;
  color: #fff !important;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-right: 20px;
  font-size: 20px;
  outline: none;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #2c3e50 inset;
    -webkit-text-fill-color: #fff !important;
  }
`

export const StyledButton = styled.button`
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 15px;
  cursor: pointer;
  background-color: #f16051;
  color: #fff;
  font-weight: 100;

  &:active {
    outline: none;
  }
`

export const WeatherInfo = styled.div`
  width: 60%;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 2px;
`

export const WeatherKey = styled.p`
  color: #f16051;
  border-bottom: solid 2px rgba(255,255,255,0.06);
  padding: 20px 0 20px 0;
  font-weight: 400;

  &:last-child {
    border: 0;
  }
`
export const WeatherValue = styled.span`
 color: #fff;
 font-weight: 200;
`

export const WeatherError = styled.p`
 color: #f16051;
 font-size: 20px;
 letter-spacing: 1px;
 font-weight: 200;
`
