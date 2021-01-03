import './Terminal.css'

function Terminal(){
    return(
        <div className='Terminal'>
            <form>
                <label className='ConsoleLabel'>
                    Console :
                    <input type='text' name='consoleInput' />
                </label>
                <input type='submit' value="Let's make money..." />
            </form>
        </div>
    )
}

export default Terminal