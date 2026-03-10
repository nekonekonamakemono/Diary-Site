"use client";
import {Type1} from './Q1.tsx';
import {Type2} from './Q2.tsx';

import YouTube from "react-youtube";
import { LinkButton } from "./link";

export const ANSWER = () => {
    const title: string = "あなたにおすすめのボカロ曲は・・・";
    if (Type1 === 'A') {
        if (Type2 === 'a') {
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>Melty Magic</h1>
                    <YouTube videoId="_simNO6CW" />
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }

        else{
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>不死身ごっこ</h1>
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }
    }

    else if (Type1 === 'B') {
        if (Type2 === 'a') {
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>マインドブランド</h1>
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }

        else{
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>KING</h1>
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }
    }

    else if (Type1 === 'C') {
        if (Type2 === 'a') {
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>ドレミファロンド</h1>
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }

        else{
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>エイリアンエイリアン</h1>
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }
    }

    else{
        if (Type2 === 'a') {
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>ラストファラオ</h1>
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }

        else{
            return (
                <div className="App">
                    <h1>{title}</h1>
                    <h1>歪なわけ、教えてあげる</h1>
                    <LinkButton text="スタートに戻る" link="/" />
                </div>
            );
        }
    }

}

export default ANSWER;