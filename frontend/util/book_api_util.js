export const fetchBooks = data => {
  return $.ajax({
    url: "/api/book",
    data
  });
};

export const fetchBook = id => {
  return $.ajax({
    url: `/api/book/${id}`
  });
};
