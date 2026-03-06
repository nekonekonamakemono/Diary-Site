import './App.css'
import { Link } from "react-router-dom";

import { LinkButton } from "./link";

export const Back = () => {
  const title: string = "Back Turn!";

  return (
    <div className="Back">
      <h1>{title}</h1>
      <LinkButton text="戻る" link="/" />
    </div>
  );
}



export default Back;