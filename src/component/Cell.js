import React from 'react';
import './color.css'
class Cell extends React.Component{
    constructor(props)
    {
        super(props);
    
    this.state={
        value:'O',
        // cellval:' '
    }
}
 
    //  onCellClick=()=>{
    //     console.log('Clicked',this.props.id);
    // //    this.state.value=this.state.value==='O'?'X':'O';
    //     console.log(this.state)
    //    let newVal=this.state.value==='O'?'X':'O';
    //    this.setState({cellval:newVal})
    //    console.log(this.state)
    //    }
render(){
    const style={
     color:this.props.value? 'black' : 'transparent'
    }
    let val=this.props.value||'X';
    console.log(this.props.id+this.props.bg+"bye")
    return(
           
           <button className= " colored "  style={style} onClick={()=>this.props.onCellClick(this.props.id)} className='Cell'>{val}</button>
        
    );
}
}






export default Cell

// const Cell=(props)=>{
//   let val='-'
//     const onCellClick=()=>{
//      console.log('Clicked',props.id);
//     }
//     return(
        
//            <button onClick={onCellClick} className='Cell'>{val}</button>
           
        
//     )
// }
