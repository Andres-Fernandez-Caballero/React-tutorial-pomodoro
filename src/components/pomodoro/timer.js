import React from "react";
import './timer.css'

class Timer extends React.Component{

    constructor() {
        super();

        this.state = {
            alert:{
                type: '',
                message: ''
            },
            time: 0
        };

        this.TIMES = {
            DEFAULT_TIMES: 1500,
            SHORT_BREAK: 300,
            LONG_BREAK: 900
        };
    }

    componentDidMount() {
        this.setDefaultTime(this.TIMES.DEFAULT_TIMES);
    }

    setDefaultTime(time) {
        this.setState({ time: time});
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'Work',
                message: 'Working'
            }
        });
        return this.setTime(this.TIMES.DEFAULT_TIMES);
    }
    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortbreak',
                message: 'taking a short break'
            }
        });
        return this.setTime(this.TIMES.SHORT_BREAK);
    }
    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longbreak',
                message: 'taking a long break'
            }
        });
        return this.setTime(this.TIMES.LONG_BREAK);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({time: newTime});
    }

    restartInterval = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state ===0){
            this.setState({
                alert: {
                    type: 'buz',
                    message: 'Buzzzzzzzz'
                }
            })   ;
        }else {
            this.setState({
                time: this.state.time - 1
            });
        }
    }

    dislplayTimer = (seconds) => {
        const m = Math.floor(seconds % 3600/60);
        const s = Math.floor(seconds %3600 % 60);
        return `${m<10? '0': ''}${m}:${s<10? 0: ''}${s}`;
    }

    render() {
        const {alert: {message, type}, time} = this.state;

        return(
            <div className="pomodoro">
                <div className={`alert ${type}`}>
                    {message}
                </div>

                <div className="timer">
                    {this.dislplayTimer(time)}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="types col-4">
                            <button className="start" onClick={this.setTimeForWork}>
                                Start Working
                            </button>
                        </div>

                        <div className="types col-4">
                            <button className="short" onClick={this.setTimeForShortBreak}>
                                Short Break
                            </button>
                        </div>

                        <div className="types col-4">
                            <button className="long" onClick={this.setTimeForLongBreak}>
                                Long Break
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Timer;