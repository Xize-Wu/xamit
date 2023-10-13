import Image from 'next/image'
import { Inter } from 'next/font/google'
import Register from '../components/frontpage/register'
import Login from '../components/frontpage/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Register/>
      <Login/>
    </main>
  )
}
