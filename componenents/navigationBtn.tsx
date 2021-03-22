import Button from "@material-ui/core/Button";
import { useRouter } from 'next/router'
import {FC} from "react";

interface propsTypes {
    routeName?: string;
}

const NavigationBtn: FC<propsTypes> = ({routeName = "/"}) =>{
    const router = useRouter()

    const goToHelloWorld = () => {
        router.push(routeName)
    }

    return <Button onClick={goToHelloWorld}>Go to {routeName}</Button>
}

export default NavigationBtn;