import React from 'react'

const List = (assets) => {
  const {assets} = props
  if (!assets || assets.length === 0) return <p>No assets found.</p>
  return (
    <ul>
      <h2 className='list-head'>Assets</h2>
      {assets.map((asset) => {
        return (
          <li key={asset.index} className='list'>
              <span className='asset-symbol'>{asset.index}</span>
            <span className='asset-price'>{asset.rates}</span>
          </li>
        )
      })}
    </ul>
  )
}
export default List