import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { Test } from "./test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ap2 from './App2.tsx' //' 'のフォルダの関数AP2を呼び出す-☆


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
      <Ap2 /> {/*☆の関数を呼び出す*/}
      <Routes>
        <Route path="/" element={<Ap2 />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
