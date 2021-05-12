import React from 'react';

const AppHeader=(args)=>{
    // console.log('args',args)
    let headerstyle={
        height:'40px',
        border:'10px solid lawngreen',
        
    };
    let theme=' '
    if(args.theme=='dark'){
        theme='dark'
    }
    
    return <h1 className={theme} style={headerstyle}>{args.title}</h1>

   
};

export default AppHeader