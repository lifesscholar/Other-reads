import React from "react";
import ShelfIndexItem from "./shelves_index_item";

class ShelvesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {addBookshelf: false, name: ""};

    this.shelfTitle = this.shelfTitle.bind(this);
    this.newBookshelf = this.newBookshelf.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchShelves();
  }

  shelfTitle () {
    if (this.props.shelf) {
      return (
        <span className="shelf-name">{this.props.shelf.shelf_name}</span>
      )
    }
    else {
      return null;
    }
  }

  update(name) {
    return e => this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createShelf({shelf_name: this.state.name});
    this.setState({ addBookshelf: false, name: ""})
  }

  newBookshelf() {
    if (this.state.addBookshelf) {
      return (
        <form onSubmit={this.handleSubmit} className="add-shelf-form">Add a Shelf:
          <input 
            type="text" 
            className="add-shelf-name"
            value={this.state.name}
            onChange={this.update("name")}
          />
          <input type="submit" className="add-shelf-button-add" value="add"/>
        </form>
      )
    } else {
      return (
        <button
          onClick={() => this.setState({ addBookshelf: true })}
          className="add-shelf-button"
        >Add shelf</button>
      )
    }
  }

  render () {
    debugger
    const { shelves, deleteShelf } = this.props;

    if (shelves.length < 1) {
      return null;
    }


    return (
      <section className="bookshelf">
        <h2 className="bookshelf-title">
          My Books
          {this.shelfTitle()}
        </h2>
        <ul className="shelves-index">
          <li className="shelves-index-title">Bookshelves</li>
          {shelves.map (shelf => (
            <ShelfIndexItem
              shelf={shelf}
              deleteShelf={deleteShelf}
              key={shelf.id}
            />
          ))}
          {this.newBookshelf()}
        </ul>
      </section>
    )
  }
}

export default ShelvesIndex;