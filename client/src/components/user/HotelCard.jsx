import { Link } from 'react-router-dom';
import PlaceHolder from './../../assets/placeholder.svg'

const HotelCard = ({ hotel }) => {
  return (
    <div className="border border-gray-300 overflow-hidden rounded-lg bg-white flex flex-col">
      <img src={PlaceHolder} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-full">
        <div className='flex-1'>
          <h3 className="text-lg font-bold ">{hotel.name}</h3>
          <p className="text-sm text-gray-400">{hotel.location}</p>
          <p className="text-gray-500 line-clamp-2 text-sm">
            {hotel.description}
          </p>
        </div>

        <Link
          to={`/hotels/${hotel._id}`}
          className="text-blue-600 mt-2 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
