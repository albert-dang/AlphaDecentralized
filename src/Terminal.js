import './Terminal.css'

function Terminal(){
    return(
        <form className='Terminal'>
            <label className='coinLayerKeyLabel'>
                API Key:
                <input type='text' name='coinLayerKey' />
            </label>
            <br></br>
            <label className='startDateLabel'>
                Start Date:
                <input type='text' name='startDate' />
            </label>
            <br></br>
            <label className='endDateLabel'>
                End Date:
                <input type='text' name='endDate' />
            </label>
            <br></br>
            <input type='submit' value="Query" />
        </form>
    )
}

export default Terminal