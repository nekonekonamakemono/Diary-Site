import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { Test } from "./test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App2.tsx' //' 'のフォルダの関数AP2を呼び出す-☆
import { Back } from './back.tsx';


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>{/* 同じサイトの中でボタンとかを押したときに文字を表示させるとかページ移動ではなく表示させるファイル(.tsx)を変更する */}
//       <Ap2 /> {/*☆の関数を呼び出す*/}
//     </BrowserRouter>
//   </StrictMode>,  
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>{/* 同じサイトの中でボタンとかを押したときに文字を表示させるとかページ移動ではなく表示させるファイル(.tsx)を変更する */}
      
      <Routes>
        <Route path="/" element={<App />} />  
        <Route path="/test" element={<Test />} />
        <Route path="/back" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


/*
<Route path="/" element={<App />} /> 　App関数で表示するもの全てだから、testに表示が移るとボタンだけでなくhello worledも消える
<Route> = このURLに来たら、このコンポーネントを表示するという指示
path="/" ブラウザの URL が localhost:5173/ （ホーム）のとき
element={<App />} App.tsxの内容を表示する

path="/test" ブラウザの URL が localhost:5173/test のとき

<LinkButton>は自分でボタンに関する様々なこと（ボタンの大きさ、色、押したときに何か処理の追加など）ができる
<Link>はシンプル

EX)
➀大きさ変更
type LinkButtonProps = {
    text: string,
    link: string,
    size: "small" | "medium" | "large"  // ← サイズ選択を追加
}

// 使い方
<LinkButton text="ボタン" link="/test" size="large" />

➁クリック時に何かしらの処理を実行
type LinkButtonProps = {
    text: string,
    link: string,
    onClick?: () => void  // ← クリック時の処理を追加
}
*/