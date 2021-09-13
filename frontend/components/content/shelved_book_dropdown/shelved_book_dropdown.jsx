import React from "react";
import { Link } from "react-router-dom";

class ShelvedBookDropdown extends React.Component {
  constructor(props) {
    super(props);
    
    this.container = React.createRef();
    
    this.state = {
      open: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    // this.dropdown = this.dropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchShelves();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false
      });
    }
  }

  handleButtonClick() {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  }

  addBookToShelf (newShelf) {
    // debugger
    // if (this.props.book.shelves.includes(newShelf)) {
    //   this.props.updateShelvedBook(newShelf);
    // } else {
    //   this.props.createShelvedBook(newShelf);
    // }
  }

  
 
  
  render() {
    if (!this.props.shelves) {
      return null;
    }

    const { shelves } = this.props;

    return (
      <div className="shelved-dropdown" ref={this.container}>
        <span>Add to Shelf</span>
        <button className="shelved-dropdown-button" onClick={this.handleButtonClick}/>
        {this.state.open && (
          <div className="shelved-shown">
            <ul>
              {shelves.map(shelf => (
                <li
                  key={shelf.id} className="shelved-button"
                  onClick={this.addBookToShelf(shelf)}
                >{shelf.shelf_name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default ShelvedBookDropdown;
  