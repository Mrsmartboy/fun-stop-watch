import {useState,useEffect} from 'react'

import {StopWatchContainer,Header,Timercard,TimerImg,
    Timer,StopWatchButtonsContainer,StartButton,
    StopButton,ResetButton,TimerImgContainer,TimerText} from './styled'

const StopWatch=()=>{
     const [timerInMinutes,setTimerInMinutes] = useState(0)
     const [timerInSeconds,setTimerInSeconds]= useState(0)
     const [timerRunning,setTimerRunning]= useState(false)

     useEffect(()=>{
        if (timerRunning){
            const timerId= setInterval(() => {
                setTimerInSeconds(prevState=>prevState+1)
            }, 1000);

            return ()=>{
                clearInterval(timerId)
            }
        }
     })

    const onStartButton=()=>{

        setTimerRunning(true)
    }

    const onStopButton=()=>{
         setTimerRunning(false)
    }

    const onResetButton=()=>{
         setTimerInMinutes(0)
         setTimerInSeconds(0)
         setTimerRunning(false)
    }

    const getStopWatchTimer=()=>{
        const totalSeconds = timerInMinutes*60 + timerInSeconds 
        const minutes = Math.floor(totalSeconds/60)
        const seconds = Math.floor(totalSeconds%60) 
        const stringifiedMinutes = minutes>9?minutes:`0${minutes}`
        const stringifiedSeconds = seconds>9?seconds:`0${seconds}`

        return `${stringifiedMinutes}:${stringifiedSeconds}`

    }

    return(
        <StopWatchContainer>
            <Header>Stop Watch</Header>
             <Timercard>
                <TimerImgContainer>
                <TimerImg src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                <TimerText>Timer</TimerText>
                </TimerImgContainer>
                <Timer>{getStopWatchTimer()}</Timer>
                <StopWatchButtonsContainer>
                    <StartButton type="button" onClick={onStartButton}>Start</StartButton>
                    <StopButton type="button" onClick={onStopButton}>Stop</StopButton>
                    <ResetButton type="button" onClick={onResetButton}>Reset</ResetButton>
                </StopWatchButtonsContainer>
             </Timercard>
        </StopWatchContainer>
    )
}

export default StopWatch