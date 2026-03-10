import './App.css'
import './Q1.tsx'
import { Link } from "react-router-dom";




export const START = () => {
  const title: string = "ボカロ曲診断";

  return (
    <div className="Ap2">
      <h1>{title}</h1>
      <Link to='/Q1'>{/* ボタンがおされたときにtest.tsx に移動する */}
        スタート
      </Link>
       
    </div>
  );
}



export default START;
