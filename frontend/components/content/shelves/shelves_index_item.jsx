import React from "react";
import { Link } from "react-router-dom";

class ShelfIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.exclusiveSwitch = this.exclusiveSwitch.bind(this);
    this.deleteShelf = this.deleteShelf.bind(this);
  }

  deleteShelf() {
    debugger
    this.props.deleteShelf(this.props.shelf.id);
  }

  exclusiveSwitch() {
    if (this.props.shelf.exclusive) {
      return null;
    } else {
      return (
        <button 
          onClick={ () => this.deleteShelf()}
          className="delete-shelf-button"
        >X</button>
      )
    }
  }

  render() {
    const { id, shelf_name } = this.props.shelf;
    return (
      <li className="shelf-index-item-container">
        <Link to={`/shelves/${id}`} className="shelf-index-item">{shelf_name}</Link>
        {this.exclusiveSwitch()}
      </li>
    )
  }
}

export default ShelfIndexItem;