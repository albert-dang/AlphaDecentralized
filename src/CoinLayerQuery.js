import './CoinLayerQuery.css'

function CoinLayerQuery(){
    return(
            <form className='QueryForm'>
                <label className='CoinLayerKeyLabel'>
                    API Key:
                    <input type='text' name='coinLayerKey' />
                </label>
                <label className='StartDateLabel'>
                    Start Date:
                    <input type='text' name='startDate' />
                </label>
                <label className='EndDateLabel'>
                    End Date:
                    <input type='text' name='endDate' />
                </label>

                <input className='QueryButton' type='submit' value="Query" />
            </form>
    )
}

export default CoinLayerQuery