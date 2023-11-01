import { Header } from "./components/Header";

//named export
export function Post(props){
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
        
}


//default export