import { LinkButton } from "./link";

export const Test = () => {
    const title2: string = "test";

    return (
        <div className="Test">
            <h1>{title2}</h1>
            <LinkButton text="戻る" link="/" />
        </div>
    );
}
