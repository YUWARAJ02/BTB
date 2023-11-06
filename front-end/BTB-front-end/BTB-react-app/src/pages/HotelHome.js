import React from 'react'
import Contents from '../components/Contents';

function HotelHome() {
    const imageUrls = [
        '/instantcashbacklp-1@2x.png',
        '/trainticketlp1-1@2x.png',
        '/image-1@2x.png',
        '/phonepe-irctc-ticket-booking-offer-1@2x.png',
        '/coupongiftfornewuserdesigntemplated79eb825d8d9cacba9f340652db93eba-screen-1@2x.png',
        '/rectangle-19@2x.png'
      ];
  return (
    <div>
        <main>
            <Contents imageUrls={imageUrls}/>
        </main>
    </div>
  )
}

export default HotelHome;