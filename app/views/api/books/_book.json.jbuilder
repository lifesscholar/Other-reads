json.extract! book, :id, :title, :author, :description
json.picture_url book.cover_image_url
# json.shelves book.shelves.where(user_id: current_user.id)