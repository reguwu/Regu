import React from 'react'
import type { Portfolio } from '@/types'

interface Props {
  portfolio: Portfolio
}

const PortfolioItem: React.FC<Portfolio> = (props) => {
  return (
    <div>PortfolioItem</div>
  )
}

export default PortfolioItem