import axios from "axios"
import { useEffect, useState } from "react"
import AppBar from "./componenets/AppBar"
import About from "./componenets/About"
import Skills from "./componenets/Skills"
import Project from "./componenets/Project"
import Service from "./componenets/Service"

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);
  if (user === null) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className="w-screen h-[10000px] bg-violet-950 text-white">
      <AppBar/>
      <div className="md:py-32 py-10">
      <About data={user}/>
      <Skills data={user}/>
      <Project data={user}/>
      <Service data={user}/>
      </div>
    </div>
  )
}

export default App
