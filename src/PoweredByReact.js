import logo from './logo.svg'
import './PoweredByReact.css'

export default function PoweredByReact(){
    return(
        <span className="React-showcase">
            <img src={logo} className="App-logo" alt="react logo" href="https://reactjs.org"/>
        </span>
    )
}