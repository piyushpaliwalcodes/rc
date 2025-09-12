import { FaStar } from "react-icons/fa";
// ------------------- Rating Component -------------------
const StarRating = ({ rating, size = "text-lg", peoplerated }: { rating: number; size?: string; peoplerated:string }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className={`${size} text-yellow-400`} />);
    }
    if (hasHalfStar) {
        stars.push(
            <div key="half" className="relative">
                <FaStar className={`${size} text-gray-300`} />
                <FaStar 
                    className={`${size} text-yellow-400 absolute top-0 left-0`}
                    style={{ clipPath: 'inset(0 50% 0 0)' }}
                />
            </div>
        );
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={`empty-${i}`} className={`${size} text-gray-300`} />);
    }
    
    return (
        <div className="flex items-center gap-1 ">
            <div className="flex items-center">{stars}<span className="ml-2 text-md text-gray-600">{rating}</span></div>
        </div>
    );
};

export default StarRating;