import React from 'react'
import { Portfolio } from '@/models/portfolio'

interface Props {
  portfolio: Portfolio
}

const PortfolioItem: React.FC<Portfolio> = (props) => {
  return (
    <div>PortfolioItem</div>
  )
}

export default PortfolioItem