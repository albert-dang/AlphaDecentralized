import logo from './logo.svg'
import './PoweredByReact.css'

export default function PoweredByReact(){
    return(
        <div className="React-showcase">
            <img src={logo} className="App-logo" alt="react logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                React
            </a>
        </div>
    )
}