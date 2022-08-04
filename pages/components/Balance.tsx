import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Balance: NextPage = () => {
  const router = useRouter()

//   console.log(router.asPath,"huudu ");
  
  return (
    <div className='w-25'>
   
<span className='text-dark d-block align-item-center' > <span> total balance : $6522 </span></span>
    </div>
  )
}

export default Balance;
