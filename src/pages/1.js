import dynamic from 'next/dynamic'
import Header from '@/components/header/header'
const NoSSR = dynamic(() => import("@/components/frontpage/Info"), { ssr: false })


export default function Temp_Test() {

    return (
        <main className='min-h-screen flex flex-col  bg-beige'>
            <Header/>
            <NoSSR/>
        </main>

    )
}

