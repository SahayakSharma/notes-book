
import { useState } from 'react';
import './App.css';

import style from './dataentry.module.css'
import style1 from './sidebar.module.css'

function App() {

  const [noteslist,setnoteslist]=useState([
    {},
  
  ])
  const [activehead,setactivehead]=useState()
  const [activetext,setactivetext]=useState()

  const handlechangehead=(e)=>{
    let a=e.target.value;
    setactivehead(a);
    

  }
  const handlechangetext=(e)=>{
    setactivetext(e.target.value)
  }
  const handleclick=()=>{
    
    setnoteslist((previous)=>[...previous,{heading:activehead,desc:activetext}])
    setactivehead("")
    setactivetext("")
  }
  const handleclear=()=>{
    setactivehead("")
    setactivetext("")
    
  }
  
  return (
    <div className="App">
      <div className={style1.sidebar}>
        <div className={style1.sidebar_wrapper}>
            <h2 className={style1.heading}>Your Work</h2>
            <ul>
            {
                noteslist.map((list,key)=>{
                    return(
                        <>
                        <li onClick={()=>{
                          setactivehead(noteslist[key].heading)
                          setactivetext(noteslist[key].desc)}}  className={style1.list_item}>{list.heading}</li>
                        </>
                        
                    )
                })
            }
            </ul>

        </div>
      
    </div>
      <div className={style.entry}>
        <h1>Make/Edit Notes</h1>
        <div className={style.entry_wrapper}>
            <input placeholder='Enter Heading' spellCheck="false" onChange={handlechangehead} value={activehead} type="text" className={style.heading} />
            <hr />
            <textarea placeholder='Enter Your Text Here' spellCheck="false" value={activetext} onChange={handlechangetext} type="text" className={style.notes} />

        </div>
        <div className='btn_box'>
          <button className='btn' onClick={handleclear}> Clear Notes </button>
          <button className='btn' onClick={handleclick}> Save Notes </button>

        </div>

      
    </div>
    
    
    </div>
    
  );
}

export default App;
