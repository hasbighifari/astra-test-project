import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login/index'

const App = () =>
    <>
        <Head>
            <title>Login Page</title>
            {/* <Link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Login />
    </>

export default App