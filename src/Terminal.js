import './Terminal.css'

function Terminal(){
    return(
        <body className='Terminal'>
            <form>
                <label className='Console'>
                    Console :
                    <input type='text' name='consoleInput' />
                </label>
                <input type='submit' value="Let's make money..." />
            </form>
        </body>
    )
}

export default Terminal