import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import PhotoCard from "./components/PhotoCard";
import favouritesReducer from "./reducers/favouritesReducer";

function App() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    (initialState) => {
      const savedFavourites = localStorage.getItem("favourites");

      return savedFavourites ? JSON.parse(savedFavourites) : initialState;
    },
  );

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  const handleToggleFavourite = useCallback((photo) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photo,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
          role="status"
          aria-label="Loading"
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Photo Gallery
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by author..."
            value={search}
            onChange={handleSearch}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.some(
                (favourite) => favourite.id === photo.id,
              )}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <p className="mt-8 text-center text-gray-600">No photos found.</p>
        )}
      </div>
    </main>
  );
}

export default App;
