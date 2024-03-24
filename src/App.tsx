import axios from "axios"
import { useEffect, useState } from "react"
import AppBar from "./componenets/AppBar"

function App() {
  const [user, setUser] = useState({})
  useEffect(()=>{
    async function call(){
       const res = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
    setUser(res.data.user)        
      }
    call()
  },[])

  console.log(user)
  return (
    <div className="w-screen h-[10000px] bg-gray-900/95 text-white">
      <AppBar/>
    </div>
  )
}

export default App
