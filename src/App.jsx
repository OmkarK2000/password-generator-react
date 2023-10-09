import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [lenght, setLenght] = useState(6)
  const [numAllow, setNumAllow] = useState(false)
  const [spCharAllow, setSpCharAllow] = useState(false)
  const [password, setPassword] = useState('')

  let pass = ''
  const char = 'qwertyuiopasdfghjklzxcvbmnQWERTYUIOPASDFJKLGHZXCVBNM'
  const num = '1234567890'
  const specChar = "!@#$%^&*_-?"
  let str = '';

  const generatePassword = ()=>{
    pass += char
    if(!numAllow){
      pass += num
    }
    if(!spCharAllow){
      pass += specChar
    }
    for(let i = 0; i < lenght; i++){
     
      str += (pass.charAt(Math.floor(Math.random() * lenght) ))
    }
    setPassword(str)
  }
  
  useEffect(()=>{
    generatePassword()
    console.log(pass)
  },[lenght, numAllow, spCharAllow, pass])

  return (
    <div className=" flex justify-center w-screen h-screen bg-black">
      <div className="flex mt-20 w-110 px-9 max-h-60 bg-gray-600 rounded-2xl justify-center flex-col gap-4">
        <h1 className='text-white font-bold text-2xl text-center'>Password generator</h1>
        <div className='flex justify-between'>
          <input type="text" className='bg-white outline-none px-6 py-2 text-lg text-orange-500 font-semibold rounded-l-xl w-full' readOnly value={password}/>
          <button className='bg-blue-500 text-lg px-3 py-2 outline-none rounded-r-xl text-white'>Copy</button>
        </div>
        <div className='flex gap-4'>
          <input type="range" id="bar" min="6" max="10" defaultValue='6' onChange={(e)=> setLenght(e.target.value)}/>
          <label htmlFor="bar" className='text-white' >Lenght : {lenght}</label>
          <div>
          <input type="checkbox" name="number" id="number"  onChange={()=>{ setNumAllow(prev => !prev)}}/>
          <label htmlFor="number" className='text-white'> Numbers</label>
          </div>
          <div>
            <input type="checkbox" name="char" id="char" />
            <label htmlFor="char" className='text-white'  onChange={()=>{ setSpCharAllow(prev => !prev)}}> Special Char</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
