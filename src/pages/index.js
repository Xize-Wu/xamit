import Image from 'next/image'
import { Inter } from 'next/font/google'
import Register from '../components/frontpage/register'
import Login from '../components/frontpage/login'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [login, setLogin] = useState(true)
  const toLogin = () =>{
    setLogin(true)
  }
  const toRegister = () =>{
    setLogin(false)
  }
  return (
    <main className="min-h-screen flex items-center justify-evenly px-20">
      <Image src="/frontpage.jpeg" alt="frontpage" width={500} height={500} />
  
      {
        login?<Login toRegister={toRegister}/>:<Register toLogin={toLogin}/>
      }{/* <Register /> */}
      {/* <Login /> */}
    </main>
  )
}
