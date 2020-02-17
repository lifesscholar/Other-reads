export const fetchBooks = data => {
  return $.ajax({
    url: "/api/books",
    data
  });
};

export const fetchBook = id => {
  return $.ajax({
    url: `/api/books/${id}`
  });
};
