import React from 'react';
// class Player extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             Player1:"",
//             Player2:"",
//             submittt:props.onSubmit
//         };
//     }
      
//        handleClick=(p1,p2)=>{
//            console.log(p1,p2)
           
//         }
//     ;
//   render() 
//   {
    const Player=(props)=>{
  return(
      
      
    <div className="player">
    <div className="screen">
      
      <label>Player 1 :</label>
      <input type="name " id="player1"   />
      <label>Player 2 :</label>
      <input type="name " id="player2"  />
    
     <button onClick={()=>{
         props.onSubmit(document.getElementById('player1').value,(document.getElementById('player2').value))
     }} className="btn-primary">Submit</button>
     

   
      </div>
      </div>
      );}
    
      
    
export default Player;