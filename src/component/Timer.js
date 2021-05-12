// import React,{Component, component} from 'react';

// class Timer extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time: 0,
//       start: 0,
//       isOn: false
//     }
//     this.startTimer = this.startTimer.bind(this)
//     this.stopTimer = this.stopTimer.bind(this)
//     this.resetTimer = this.resetTimer.bind(this)
//   }
//   startTimer() {
//     this.setState({
//       time: this.state.time,
//       start: Date.now() - this.state.time,
//       isOn: true
//     })
//     this.timer = setInterval(() => this.setState({
//       time: Date.now() - this.state.start
//     }), 1);
//   }
//   stopTimer() {
//     this.setState({isOn: false})
//     clearInterval(this.timer)
//   }
//   resetTimer() {
//     this.setState({time: 0})
//   }
//   render() {
//     let start = (this.state.time == 0) ?
//       <button onClick={this.startTimer}>start</button> :
//       null
//     let stop = (this.state.isOn) ?
//       <button onClick={this.stopTimer}>stop</button> :
//       null
//     let reset = (this.state.time != 0 && !this.state.isOn) ?
//       <button onClick={this.resetTimer}>reset</button> :
//       null
//     let resume = (this.state.time != 0 && !this.state.isOn) ?
//       <button onClick={this.startTimer}>resume</button> :
//       null
//     return(
//       <div>
//         <h3>timer: {this.state.time}</h3>
//         {start}
//         {resume}
//         {stop}
//         {reset}
//       </div>
//     )
//   }
// }
// export default Timer

import React,{Component, component} from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      timer:{playertimer1:0,playertimer2:0},
      timerid:null,
      current:null
    }
  }
  static getDerivedStateFromProps(props,state){
    return{
      timer:{playertimer1:state.timer.playertimer1,playertimer2:state.timer.playertimer2},
      timerid:state.timerid,
      current:state.current
    }
  }
 
    setTimer(player) {
      if(this.state.timerid){
        clearInterval(this.state.timerid)
      }
      if(player===this.props.Players.player1){
        let iid=setInterval(()=>{
         this.setState({
           timer:{playertimer1:this.state.timer.playertimer1+1,playertimer2:this.state.timer.playertimer2}
                 ,timerid:iid,
                current:player })
        },1000)
      }
      else{
        let iid=setInterval(()=>{
          this.setState({
            timer:{playertimer1:this.state.timer.playertimer1,playertimer2:this.state.timer.playertimer2+1}
            ,timerid:iid,
            current:player })
         },1000)
      }
     }
     
    
     render() {
       console.log(this.props.activePlayer1)
       console.log(this.props.Players)
       if(this.props.activePlayer1 === this.props.Players.player1 && this.props.activePlayer1 !== this.state.current){
         this.setTimer(this.props.Players.player1)
       }
       else if(this.props.activePlayer1 === this.props.Players.player2 && this.props.activePlayer1 !== this.state.current){
        this.setTimer(this.props.Players.player2)
       }
     return(
       <div ><h3 className="timer">{this.props.Players.player1} {this.state.timer.playertimer1} </h3>
        <h3 className="timer">{this.props.Players.player2} {this.state.timer.playertimer2}</h3></div>
     )
     }
    }
  export default Timer