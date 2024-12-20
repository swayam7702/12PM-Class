import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page-not'>
            <img src="https://img.freepik.com/premium-vector/error-404-unavailable-web-page-file-found-concept_1198-834.jpg?ga=GA1.1.682724094.1724996015&semt=ais_hybrid" width="600px" alt="" />
            <p>Unfortunately the page you are looking for has been moved or deleted, please redirect to home page</p>
            <button>
            <Link to="/">Go To Home</Link>
            </button>
    </div>
  )
}

export default NotFound
