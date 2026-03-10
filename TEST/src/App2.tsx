import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";

import { LinkButton } from "./link";



export const Ap = () => {
  const title: string = "Hello World!";

  return (
    <div className="App">
      <h1>{title}</h1>
      <LinkButton text="ボタン" link="/test" />
    </div>
  );
}


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

//import { LinkButton } from "./children/LinkButton";

export const App = () => {
  const title: string = "Hello World!";
  const [num, setNum] = useState(0);

  // const:　値の再代入不可
  // let  :　値の再代入可(let num: int = 0など)
  /* 
  const [num, setNum] = useState(0);
  useState(0): React のフックで、状態の初期値を 0 に設定　numが文字列なら0ではなく' 'などになる　初期値の設定だから1とか2をいれてもいい
  num: 現在の状態の値（初期は 0）
  setNum: 状態を更新する関数。setNum(新しい値) で num を変更
  */

  const increment = () => {
    setNum(num + 1);
    console.log(num);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      {num}回押しました。
      <LinkButton text="ボタン" link="/test" />
      <button type="button" onClick={increment}>増やす</button>
    </div>
  );
}

/* 
<button type="button" onClick={increment}>増やす</button>: ボタンの要素を表す
type="button": ボタンの種類を指定。"button" は通常のボタンで、フォームの送信（submit）を防ぎます。
onClick={increment}: クリックイベントのハンドラー。ボタンがクリックされると、increment 関数が実行されます。この関数は num の値を 1 増やし、コンソールに表示します。
>増やす</button>: ボタンに表示されるテキスト（「増やす」）と要素の終了タグ。
*/



export default App;
