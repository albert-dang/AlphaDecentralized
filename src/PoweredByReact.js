import logo from './logo.svg'


function PoweredByReact(){
    return(
        <header className="App-header">
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
        </header>
    )
}

export default PoweredByReact