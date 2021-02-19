import React from 'react'
import Popup from 'reactjs-popup'
import './Tip.css'

const FundamentalTip = () => (
    <Popup
      trigger={open => (
        <button className="tipbutton">Data Info</button>
      )}
      position="right center"
      closeOnDocumentClick
    >
      <span>Identical to Yahoo! Finance live.</span>
    </Popup>
  )

  export default FundamentalTip