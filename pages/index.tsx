import Button from "@material-ui/core/Button";
import React from "react";
import { useRouter } from 'next/router'
import {toggleSidebar} from "../core/uiState/sidebar/sidebar"
import NavigationBtn from "../components/navigationBtn"

export default function Home() {
    const router = useRouter()
    
    const goToHelloWorld = () => {
        router.push('/helloworld')
    }

    return (
        <div className={"min-h-screen min-w-full flex flex-col justify-center align-center"}>
            <Button onClick={toggleSidebar}>Sidebar</Button>
            <NavigationBtn routeName="/helloworld" />
        </div> 
    )
}
