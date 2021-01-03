import logo from './logo.svg'
import './PoweredByReact.css'

function PoweredByReact(){
    return(
        <head className="React-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Powered by</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                React
            </a>
        </head>
    )
}

export default PoweredByReact