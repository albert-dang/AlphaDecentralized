import logo from './logo.svg'
import './PoweredByReact.css'

export default function PoweredByReact(){
    return(
        <div className="React-showcase">
            <a href="https://reactjs.org">
                <img src={logo} className="App-logo" alt="react logo"/>
            </a>
            
        </div>
    )
}