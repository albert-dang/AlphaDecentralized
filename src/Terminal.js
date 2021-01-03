import './Terminal.css'

function Terminal(){
    return(
        <main className='Terminal'>
            <form>
                <label className='ConsoleLabel'>
                    Console :
                    <input type='text' name='consoleInput' />
                </label>
                <input type='submit' value="Let's make money..." />
            </form>
        </main>
    )
}

export default Terminal