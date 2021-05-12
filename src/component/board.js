import React from 'react';
import Cell from './Cell';
import Table from './table';
import Player from './Players';
import Timer from './Timer';
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            next:'O',
            cell:[null,null,null,null,null,null,null,null,null],
            moveList:[],
            No_of_moves:0,
            players:{player1:null,player2:null},
            activeplayer:null,
            move:0,
            message:'move O',
            displayboard:'none',
            displayform:'display',
            bg:[null,null,null,null,null,null,null,null,null]
        }
    }

    handleid=(id)=>{
       let curval=this.state.cell[id]
       if(curval){
           return
       }
        this.state.cell[id]=this.state.next;
       let newnext=this.state.next==='O'?'X':'O';
       let newmove=this.state.No_of_moves+1;
       let row=[newmove,this.state.next,id];  //table print 
       let newactiveplayer=this.state.next==='O'?this.state.players.player2:this.state.players.player1;
       let table=[...this.state.moveList];//
       let countmove=this.state.move+1;
       table.push(row);
       this.setState({
           next:newnext,
           No_of_moves:newmove,
           moveList:table,
           activeplayer:newactiveplayer,
           move:countmove,
           message:'Move '+newnext
           
       },()=>{
           if(this.state.move===9){
               this.setState({
                   message:'Draw'
               })
           }
       })
       console.log(this.state.cell,newnext,this.state.next)
       let winner=this.checkGame()
       console.log(winner);
       if(winner){
           let bg=[...this.state.bg]
           for(let i=0;i<winner.length;i++){
               bg[winner[i]]='lets'
           }
           this.setState({
             message:this.state.cell[winner[0]]+'  WON   ',
             bg:bg
           })
       }
       

    }
    reset(){
        console.log("hi")
        this.setState({
            next:'O',
            cell:[null,null,null,null,null,null,null,null,null],
            moveList:[],
            No_of_moves:0,
            players:{player1:null,player2:null},
            activeplayer:null,
           
        }

        )
        
    }

   
    checkGame() {
       
        const wins = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
       
        let cells = this.state.cell;
        for (let i = 0; i < 8; i++) {
          let [a, b, c] = wins[i];
          if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return [a, b, c];
         
          }
        }
        return null;
      }
      onSubmit(p1,p2){
       console.log(p1);
       console.log(p2);
       this.setState({
           players:{player1:p1,player2:p2},
           activeplayer:p1,
           displayboard:'display',
          displayform:'none'
       })

      }
      static getDerivedStateFromProps(props,state){
          return(
             {activeplayer:state.activeplayer,bg:state.bg}

          )
      }
    render(){
        
       console.log(this.state.bg+"hii")
       
        return(
            <div className="table">
        <div className={this.state.displayform}>< Player onSubmit={this.onSubmit.bind(this)}/></div>
          <div className={this.state.displayboard}><div className="table"> <Table row={this.state.moveList}/> </div>
            <Timer activePlayer1={this.state.activeplayer} Players={this.state.players}/> 
           <h4>Message: {this.state.message}</h4>
          <h2>Move:{this.state.activeplayer}</h2> 
            <div className="board"  >
                <Cell id={0} value={this.state.cell[0]}  bg={this.state.bg[0] }onCellClick={this.handleid}/>
                <Cell id={1} value={this.state.cell[1]}  bg={this.state.bg[1] }onCellClick={this.handleid}/>
                <Cell id={2} value={this.state.cell[2]}  bg={this.state.bg[2] }onCellClick={this.handleid}/>
                <Cell id={3} value={this.state.cell[3]}  bg={this.state.bg[3] }onCellClick={this.handleid}/>
                <Cell id={4} value={this.state.cell[4]}  bg={this.state.bg[4] }onCellClick={this.handleid}/>
                <Cell id={5} value={this.state.cell[5]}  bg={this.state.bg[5] }onCellClick={this.handleid}/>
                <Cell id={6} value={this.state.cell[6]}  bg={this.state.bg[6] }onCellClick={this.handleid}/>
                <Cell id={7} value={this.state.cell[7]}  bg={this.state.bg[7] }onCellClick={this.handleid}/>
                <Cell id={8} value={this.state.cell[8]}  bg={this.state.bg[8] }onCellClick={this.handleid}/>
            </div>
            <div className="reset"><button  onClick={this.reset.bind(this)}>Reset</button></div>
            </div>
            </div> 
        )
    }

  }
export default Board