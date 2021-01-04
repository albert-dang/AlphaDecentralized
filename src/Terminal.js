import './Terminal.css'

function Terminal(){
    return(
        <form className='Terminal'>
            <label className='CoinLayerKeyLabel'>
                API Key:
                <input type='text' name='coinLayerKey' />
            </label>
            <br></br>
            <label className='StartDateLabel'>
                Start Date:
                <input type='text' name='startDate' />
            </label>
            <br></br>
            <label className='EndDateLabel'>
                End Date:
                <input type='text' name='endDate' />
            </label>
            <br></br>
            <input className='QueryButton' type='submit' value="Query" />
        </form>
    )
}

export default Terminal