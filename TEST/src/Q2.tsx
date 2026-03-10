import './App.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { LinkButton } from "./link";

import { useNavigate } from "react-router-dom";



export let Type2 = ' ';

export const Q2 = () => {
    const title: string = "Q2 今聞きたい曲のテンポは？";
    const navigate = useNavigate();

    // const:　値の再代入不可
    // let  :　値の再代入可(let num: int = 0など)
    /* 
    const [num, setNum] = useState(0);
    useState(0): React のフックで、状態の初期値を 0 に設定　numが文字列なら0ではなく' 'などになる　初期値の設定だから1とか2をいれてもいい
    num: 現在の状態の値（初期は 0）
    setNum: 状態を更新する関数。setNum(新しい値) で num を変更
    */

    const SLOW = () => {
        Type2 = 'a';
        navigate("/ANSWER");
    };

    const FAST = () => {
        Type2 = 'b';
        navigate("/ANSWER");
    };


    return (
    <div className="App">
        <h1>{title}</h1>
        <button type="button" onClick={SLOW}>A ゆっくり</button>
        <button type="button" onClick={FAST}>B 速い</button>
  

    </div>
    );



}
//      <LinkButton text="結果を見る" link="/ANSWER" />


export default Q2;
