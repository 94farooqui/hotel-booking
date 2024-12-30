import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AdminHotelEdit = () => {
  const {hotelId} = useParams()

  useEffect(()=>{
    console.log(hotelId)
  },[])


  return (
    <div>AdminHotelEdit</div>
  )
}

export default AdminHotelEdit