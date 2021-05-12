import React from 'react';
import AppHeader from './component/AppHeader';
import Board from './component/board';
const App=()=>{
    return(
        <div>
<AppHeader title='Tic-tac-toe' theme='dark'/>
<div className="displayboard">
<Board/>
</div>
</div>
)
}

export default App