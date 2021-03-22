import Sidebar from '../componenents/sidebar'
import Header from '../componenents/header'
import Button from "@material-ui/core/Button";
import React from "react";
import { useRouter } from 'next/router'

export default function Home() {

    const goToHelloWorld = () => {
        const router = useRouter()
        router.push('/helloworld')
    }

    return (
        <div className={"min-h-screen min-w-full flex flex-col justify-center align-center"}>
            <Sidebar className={"w-full h-full"}/>
            <Button onClick={goToHelloWorld}>Go to hello world</Button>
        </div>
    )
}
