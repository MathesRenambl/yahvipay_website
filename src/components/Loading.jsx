import React from 'react'

const Loading = () => {
  return (
    <div>
      {/* Spinner Start */}      
      <div 
        id = "spinner"
        className = "show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className = "spinner-grow text-danger"
          style = {{ width: "3rem", height: "3rem" }}
          role = "status"
        >
          <span className = "sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}
    </div>
  )
}

export default Loading
