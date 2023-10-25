import Image from 'next/image'
import { Inter } from 'next/font/google'
import Register from '../components/frontpage/register'
import Login from '../components/frontpage/login'
import Header from '../components/header/header'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [login, setLogin] = useState(true)
  const toLogin = () => {
    setLogin(true)
  }
  const toRegister = () => {
    setLogin(false)
  }
  return (
    <main className='min-h-screen flex flex-col  bg-beige'>
      <Header />
      <div className="flex-grow h-full flex items-center justify-evenly px-20">
        <Image src="/frontpage.png" alt="frontpage" width={500} height={500} />

        {
          login ? <Login toRegister={toRegister} /> : <Register toLogin={toLogin} />
        }
      </div>
      <h2 className='text-center flex-grow  font-semibold'>
        <p className='pb-3 text-3xl text-gray-500'>Participation matters, and you matter</p>
        <p className='text-xl pb- text-gray-400'>Personal web project of Aster Wu</p>
      </h2>
    </main>
  )
}