import React, { useState, useEffect } from 'react'

function CountDown(props) {
    const [time, setTime] = useState(props.time)
    const [start, setStart] = useState("Start")
    const [last5Seconds, setLast5Seconds] = useState(false);

    // Update the time state whenever the props.time value changes
    useEffect(() => {
        setTime(props.time);
        setStart('Start'); 


    }, [props.time]);

    // Start the countdown when the start state changes from 'Start' to 'Restart'
    useEffect(() => {
        let intervalId = null;
        if (start === 'Start') {
            clearInterval(intervalId);
        } else {
            intervalId = setInterval(() => {
                setTime((prevValue) => {
                    if (prevValue === 1) {
                        clearInterval(intervalId); // stop countdown when it reaches 0
                        return "Time's up"; // set message to "Time's up" when countdown reaches 0
                    }
                    return prevValue - 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [start]);
    

    // Blink the background color of the body when the last 5 seconds of the countdown is reached
    useEffect(() => {
        let intervalId = null;
        if (last5Seconds) {            // set the background color to blue when the blinking starts
            document.body.style.backgroundColor = 'blue';
            intervalId = setInterval(() => {
                document.body.style.backgroundColor = document.body.style.backgroundColor === 'blue' ? 'red' : 'blue';
            }, 100);
        } else {
            // set the background color back to blue when the blinking stops
            document.body.style.backgroundColor = 'blue';
        }
        return () => clearInterval(intervalId);
    }, [last5Seconds]);


    // Set the last5Seconds state to true when the time reaches 5 seconds or 10 seconds

    useEffect(() => {
        if (time <= 5||time===10) {
            setLast5Seconds(true);
        } else {
            setLast5Seconds(false);
        }
    }, [time]);
        // Reset the countdown and start from the beginning when the button is clicked

    function handleClick() {
        setStart((prevState) => (prevState === 'Start' ? 'Restart' : 'Start'));
        setTime(props.time);
    }
    return (
        <div className='section full-height'>
            <div>
                <p className='time'>{time}</p>
            </div>
            <button className='btn btn-warning btn-lg btn-start align-middle'
                onClick={handleClick}>{start}</button>
        </div>
    )
}

export default CountDown