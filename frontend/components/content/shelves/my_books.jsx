import React from "react";
import ShelvesIndex from "./shelves_index";

const MyBooks = ({ shelves, fetchShelves, createShelf, deleteShelf }) => {
  return (
    <div className="bookshelf-container">
      <ShelvesIndex
        shelves={shelves}
        fetchShelves={fetchShelves}
        createShelf={createShelf}
        deleteShelf={deleteShelf}
      />
    </div>
  )
}

export default MyBooks;