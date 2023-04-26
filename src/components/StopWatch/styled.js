import styled from 'styled-components'

export const StopWatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png");
  background-size: cover;
   padding-left: 30px;
  align-items: flex-start;
   min-height: 100vh;

   @media screen and (max-width:576px){
      background-image: url("https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png");
      align-items: center;
      padding-left: 0px;
   }
`

export const Header = styled.h1`
  color: #333333;
  font-size: 30px;
  font-weight: bold;
  
`
export const Timercard = styled.div`
   background-color: #ffffff;
   box-shadow: 0px 4px 16px 0px #bfbfbf;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
    border-radius: 10px;
    align-items: center;
`

export const  TimerImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const TimerImg= styled.img`
  height: 32px;
  width: 32px;
  margin-right: 10px;
`


export const TimerText = styled.p`
  color: #333333;
  font-size: 20px;
  font-weight: 500;
`

export const Timer = styled.p`
   color: #333333;
   font-size: 30px;
   font-weight: bold;
`

export const StopWatchButtonsContainer= styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
`

export const StartButton= styled.button`
    background-color: #1db05f;
    color: #ffffff;
     font-weight: bold;
     padding: 10px;
     border-radius: 10px;
     border: none;
     outline: none;
     margin-right: 10px;
     cursor: pointer;
`

export const StopButton = styled.button`
     background-color: #ef0d36;
     color: #ffffff;
     font-weight: bold;
     padding: 10px;
     border-radius: 10px;
     border: none;
     outline: none;
     margin-right: 10px;
     cursor: pointer;
`
export const ResetButton = styled.button`
     background-color: #eaa800;
     color: #ffffff;
     font-weight: bold;
     padding: 10px;
     border-radius: 10px;
     border: none;
     outline: none;
     cursor: pointer;

`