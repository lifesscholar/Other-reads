import React from "react";
import ShelvesIndex from "./shelves_index";
import { deleteShelf } from "../../../actions/shelf_actions";

const MyBooks = ({ shelves, fetchShelves, createShelf }) => {
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