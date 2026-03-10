import './App.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { LinkButton } from "./link";

import { useNavigate } from "react-router-dom";



export let Type1 = ' ';



export const Q1 = () => {
    const title: string = "Q1 今聞きたい曲の雰囲気は？";
    const navigate = useNavigate();
    // const:　値の再代入不可
    // let  :　値の再代入可(let num: int = 0など)
    /* 
    const [num, setNum] = useState(0);
    useState(0): React のフックで、状態の初期値を 0 に設定　numが文字列なら0ではなく' 'などになる　初期値の設定だから1とか2をいれてもいい
    num: 現在の状態の値（初期は 0）
    setNum: 状態を更新する関数。setNum(新しい値) で num を変更
    */

    const FIRST = () => {
        Type1 = ' ';
    }

    const CUTE = () => {
        Type1 = 'A';
        navigate("/Q2");
    };

    const COOL = () => {
        Type1 = 'B';
        navigate("/Q2");
    };

    const NORINORI = () => {
        Type1 = 'C';
        navigate("/Q2");
    };

    const KOWAI = () => {
        Type1 = 'D';
        navigate("/Q2");
    }

    return (
    <div className="App">
        <h1>{title}</h1>
        <button type="button" onClick={CUTE}>A かわいい系</button>
        <button type="button" onClick={COOL}>B かっこいい系</button>
        <button type="button" onClick={NORINORI}>C ノリノリ系</button>
        <button type = "button" onClick={KOWAI}>D こわい系</button>


    </div>
    );

//        <LinkButton text="次の質問に進む" link="/Q2" />

}



export default Q1;
