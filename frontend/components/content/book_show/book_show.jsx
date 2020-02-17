import React from "react";

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchBook(this.props.match.params.bookId);
  }

  render () {

    return(
      null
    );
  }

}
export default BookShow;