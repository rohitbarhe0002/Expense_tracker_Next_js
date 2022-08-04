import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Header from './components/Header'
import Balance from './components/Balance'

const Home: NextPage = () => {
  const router = useRouter()

  console.log(router.asPath,"huudu ");
  
  return (
    <>
       <h3 className='text-center mt-5'>Welcome To Expense Tracker</h3>
      {/* <Balance/> */}
      <Header/>
      

    </>

  )
}

export default Home;
