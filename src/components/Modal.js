import React from 'react'

function Modal({ handleShowModal }) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center min-h-screen min-w-100"
      onClick={handleShowModal}
    >
      <div
        className="fixed inset-0 bg-black opacity-35"
        style={{ backgroundColor: 'black', opacity: 0.7 }}
      ></div>
      <div className="bg-white p-0 md:p-6 z-10" style={{height: 500, width:800}}>
        <div className="w-screen pb-56  md:pb-56 relative z-50">
          <div className="absolute" style={{ height:450, width:750 }}>
            <iframe
              title="video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
