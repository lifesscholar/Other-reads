export const fetchBooks = () => {
  return $.ajax({
    url: "/api/books",
    // data
  });
};

export const fetchBook = id => {
  return $.ajax({
    url: `/api/books/${id}`
  });
};
