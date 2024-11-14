
import { FaEye } from "react-icons/fa";

function NewsCard({news}) {
    const {details,image_url,thumbnail_url,total_view,title,author} = news
  return (
    <div className="card bg-base-100 shadow-md p-4">
      {/* Author and Date */}
      <div className="flex items-center mb-4">
        <img
          src={author.img}
          alt="Author"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-bold text-gray-700">{author.name}</p>
          <p className="text-sm text-gray-500">{author.published_date}</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="card-title text-lg font-semibold text-blue-600 mb-2">
        {title}
      </h2>

      {/* Thumbnail */}
      <figure>
        <img
          src={image_url}
          alt="Thumbnail"
          className="w-full h-40 object-cover rounded-md"
        />
      </figure>

      {/* Details */}
      <p className="text-sm text-gray-600 mt-2 mb-4">
        {details}
      </p>

      {/* Footer - Rating and Views */}
      <div className="flex justify-between items-center mt-4">
        {/* Rating */}
        <div className="flex items-center">
          <div className="rating rating-sm mr-1">
            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
          </div>
          <span className="text-gray-600 ml-1">4.8</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-600">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
