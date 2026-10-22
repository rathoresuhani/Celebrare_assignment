function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="h-64 w-full object-cover"
      />

      <div className="flex items-center justify-between p-4">
        <p className="font-medium text-gray-800">{photo.author}</p>

        <button
          type="button"
          onClick={() => onToggleFavourite(photo)}
          className={`text-2xl transition hover:scale-110 ${
            isFavourite ? "text-red-500" : "text-gray-500"
          }`}
          aria-label={
            isFavourite
              ? `Remove ${photo.author} from favourites`
              : `Add ${photo.author} to favourites`
          }
        >
          {isFavourite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
