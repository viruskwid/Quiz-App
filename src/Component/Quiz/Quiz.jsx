import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'
const Quiz = () => {
    const[index,setindex] = useState(0)
    const [qus,setqus] = useState(data[index])
    const [lock,setlock] = useState(false)
    const[score,setscore] = useState(0)
    const [result,setresult] = useState(false)
    
    

let option1 = useRef(null)
let option2 = useRef(null)
let option3 = useRef(null)
let option4 = useRef(null)

let option_array =[option1,option2,option3,option4]
    const checkAns=(e,ans)=>{
   if(lock===false){
    if(qus.ans===ans){
        e.target.classList.add('win')
      setlock(true)
      setscore(score+1)
       }else{
        e.target.classList.add('fail')
        setlock(true)
        option_array[qus.ans-1].current.classList.add('win')
       }
        }
   }

   
    const addindex = ()=>{
       if(lock===true){
        if(index===data.length-1){
            setresult(true)
            return 0
        }
        setindex(index+1)
        setqus(data[index+1])
       setlock(false)
    option_array.map((option)=>{
        option.current.classList.remove("fail")
        option.current.classList.remove("win")
        
        return null;
    }
    
  )}
}
  
    

    let startingQus=index+1
    let EndingQus =data.length

    const reset=()=>{
        setindex(0)
        setlock(false)
        setqus(data[0])
        setscore(0)
        setresult(false)

    }




       




  return (
    <div style={{height:'550px',marginLeft:'30px'}} className='container-fluids d-flex flex-row align-items-center'>
      <div className='text-center' style={{marginTop:'-10px'}}>
      <div className='d-flex justify-content-between'>
          <h3 className='head'>Quiz App</h3>
          
          <h4 className='head'>{startingQus}/{EndingQus} Qus</h4>
      </div>
      
        <hr />
  
  {result?<></>:<><h5 className='question'>{index+1}.{qus.question} </h5> 
  <ul>
      <li ref={option1} className='fixcolor'  onClick={(e)=>checkAns(e,1)}>{qus.option1}</li>
      <li  ref={option2} className='fixcolor' onClick={(e)=>checkAns(e,2)} >{qus.option2}</li>
      <li  ref={option3} className='fixcolor' onClick={(e)=>checkAns(e,3)}>{qus.option3}</li>
      <li  ref={option4}className='fixcolor' onClick={(e)=>checkAns(e,4)}>{qus.option4}</li>
  </ul>
  <button style={{marginLeft:'220px',width:'300px'}} onClick={addindex} className='btn i pt-3 pb-3 ps-5 pe-5 ' >Next</button>
  </>}
  {result?<div style={{width:'300px',marginLeft:'110px'}} className='d-flex flex-column '><h3> Nice try, You Scored {score} out of {data.length}</h3>
  <button className='btn i' onClick={reset}>reset</button></div>:<></>}
      </div>
      <div style={{marginLeft:'300px'}} className='d-flex align-items-center flex-column '>
        <h5 className='text-light'>Designed By Aswin</h5>
        <div style={{ color: 'white',width:'350px' }} className="icons mt-3 d-flex justify-content-between align-items-center">
               <a style={{textDecoration:'none',color:'white'}} href='mailto: aswinbiju0101@gmail.com'> <i style={{ height: '50px' }} class="fa-solid fa-envelope fa-2x"></i></a>
               <a style={{textDecoration:'none',color:'white'}} href=''> <i style={{ height: '50px' }} class="fa-brands fa-twitter fa-2x"></i></a>
              <a style={{textDecoration:'none',color:'white'}} href='https://github.com/viruskwid'>  <i style={{ height: '50px' }} class="fa-brands fa-github fa-2x"></i></a>
               <a style={{textDecoration:'none',color:'white'}} href='https://www.facebook.com/aswin.b.14'> <i style={{ height: '50px' }} class="fa-brands fa-facebook fa-2x"></i></a>
              <a style={{textDecoration:'none',color:'white'}} href='https://www.instagram.com/virus_kwid'>  <i style={{ height: '50px' }} class="fa-brands fa-instagram fa-2x"></i></a>
                <a style={{textDecoration:'none',color:'white'}} href='linkedin.com/in/aswin-biju-20906b298'><i style={{ height: '50px' }} class="fa-brands fa-linkedin fa-2x"></i></a>
    
              </div>
      </div>
</div>
  )
  
}

export default Quiz
