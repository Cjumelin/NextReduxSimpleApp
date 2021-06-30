import { Component } from "react";
import {useRouter} from 'next/router';

export default function UseAuthentication() {
 return () => {
    const router = useRouter();

    return <Component {...arguments} />;
  };
}