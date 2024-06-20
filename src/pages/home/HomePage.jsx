import React from 'react'
import SymbolTable from '../../components/homePage/SymbolTable'

function Main() {
  return (
    <div className='wrapper'>
      <h1>GH Live Exchange Rates</h1>
      <div>
        <SymbolTable />
      </div>
    </div>
  )
}

export default Main