import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold">{hotel.name}</h3>
      <p>{hotel.location}</p>
      <p className='text-gray-500 line-clamp-3'>{hotel.description}</p>
      <Link to={`/hotels/${hotel._id}`} className="text-blue-600 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default HotelCard;
