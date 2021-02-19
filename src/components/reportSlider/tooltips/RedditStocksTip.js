import React from 'react'
import Popup from 'reactjs-popup'
import './Tip.css'

const RedditStocksTip = () => (
    <Popup
      trigger={open => (
        <button className="button">Data Info{open ? 'Opened' : 'Closed'}</button>
      )}
      position="right center"
      closeOnDocumentClick
    >
      <span>Mentions are counted from the top threads last 24 hours, not including "more comments" from any comment tree.
          <br/>
          Subreddits include: r/WallStreetBets, r/stocks, r/investing, r/smallstreetbets</span>
    </Popup>
  )

  export default RedditStocksTip