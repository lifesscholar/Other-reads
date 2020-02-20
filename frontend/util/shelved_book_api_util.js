export const createShelvedBook = shelvedBook => {
  return $.ajax ({
    url: `/api/shelved_books`,
    method: "POST",
    data: { shelvedBook }
  });
};

export const updateShelvedBook = shelvedBook => {
  return $.ajax ({
    method: "PATCH",
    url: `/api/shelved_books/${shelvedBook.id}`,
    data: { shelvedBook }
  });
};

export const removeShelvedBook = shelvedBookId => {
  return $.ajax ({
    method: "DELETE",
    url: `/api/shelved_books/${shelvedBookId}`
  });
};
