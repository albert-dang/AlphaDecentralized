import './Terminal.css'

function Terminal(){
    return(
        <body>
            <form className = 'Terminal'>
                <label className='Console'>
                    Console :
                    <input type='text' name='consoleInput' />
                </label>
                <br></br>
                <input type='submit' value="Let's make money..." />
            </form>
        </body>
    )
}

export default Terminal