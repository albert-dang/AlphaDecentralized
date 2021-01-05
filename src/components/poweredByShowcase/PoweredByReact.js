import logo from './logo.svg'
//import './PoweredByReact.css'

export default function PoweredByReact(){
    return(
        <a href="https://reactjs.org" rel='noreferrer' target='_blank'>
            <div className="React-showcase">
                <img src={logo} className="App-logo" alt="react logo"/>
            </div>
        </a>
    )
}