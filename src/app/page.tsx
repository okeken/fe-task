import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
    <Link className='border p-2 rounded-xl ' href="/dashboard">Dashboard</Link>
    
    </main>
  )
}
