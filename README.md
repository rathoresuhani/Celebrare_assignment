# Photo Gallery Web App

A responsive Photo Gallery web application built with **React, Vite, and Tailwind CSS** as part of the Celebrare Frontend React Internship assignment.

## Features

- Fetches 30 photos from the Picsum Photos API
- Responsive photo grid:
  - 4 columns on desktop
  - 2 columns on tablet
  - 1 column on mobile
- Search photos by author name
- Real-time client-side filtering
- Add or remove photos from favourites
- Favourites managed using `useReducer`
- Favourites persist across page refreshes using `localStorage`
- Loading spinner while fetching photos
- Error handling for failed API requests
- Custom `useFetchPhotos` hook
- `useCallback` for the search handler
- `useMemo` for the filtered photo list

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- Browser Local Storage

## Project Structure

```text
src/
├── components/
│   └── PhotoCard.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favouritesReducer.js
├── App.jsx
├── index.css
└── main.jsx
```

## React Concepts Used

### Custom Hook

`useFetchPhotos` handles fetching the photos and manages:

- Photos data
- Loading state
- Error state

### useCallback

`useCallback` is used for the search input handler to memoize the function.

### useMemo

`useMemo` is used to calculate the filtered list of photos based on the search text and fetched photos.

### useReducer

`useReducer` manages the favourites state.

The reducer supports toggling a photo between favourite and non-favourite states.

### Local Storage

Favourites are stored in the browser's `localStorage`, allowing them to remain available after refreshing the page.

## API

The application uses the Picsum Photos API:

```text
https://picsum.photos/v2/list?limit=30
```

The photos are fetched once when the application loads. Searching is performed locally on the already-fetched photos.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rathoresuhani/Celebrare_assignment
```

### 2. Navigate to the project

```bash
cd Celebrare_Assignment
```

### 3. Install
