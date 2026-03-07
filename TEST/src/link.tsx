// LinkButtonPropsという型を設定している
import { Link } from "react-router-dom";

type LinkButtonProps = {
  text: string,
  link: string
}

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <div className="LinkButton">
      <Link to={props.link}>
        {props.text}
      </Link>
    </div>
  );
}

/*
export: LinkButtonを他のファイルから使えるようにエクスポート
他のファイルで import { LinkButton } from './link.tsx' とすると、LinkButtonを使える

(props: LinkButtonProps): 引数の型指定
※import { LinkButtonProps } from "./link";　というように他のファイルでこの型を使いたい場合はここでただの宣言ではなく
export type LinkButtonProps = {...というようにexportする必要がある
(？？？？？？？？今回は自動で判定してくれるため不要)

<div>: HTMLで表示するものをこれで囲む

className="LinkButton": CSSクラス名を付ける
これによって、このdivにスタイル見た目を変更できる
ex) CSSファイルで .LinkButton { ... } と定義して、ボタンのデザインをカスタマイズできる

<Link to={props.link}>: Link-指定されたリンクに飛ぶ　to-Linkに移動先のパスを指定する　props.link-今回の移動先のリンク　これは引数として受け取ったリンク

{props.text}
テキストとして、props.text（受け取ったテキスト）を表示
ex) 「ホーム」や「詳細を見る」などの文字列が入ります。
*/