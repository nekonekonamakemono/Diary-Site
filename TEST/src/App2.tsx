import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";


export const Ap2 = () => {
    //const text: string = 'Hello World!'; //stringの変数作成 <h1>{text}</h1>

    const title: string = "Hello World!";

  return (
    <div className="Ap2">
      <h1>{title}</h1>
      <Link to='/test'>{/* ボタンがおされたときにtest.tsx に移動する */}
        ボタン
      </Link>
       
    </div>
  );
}



export default Ap2;
