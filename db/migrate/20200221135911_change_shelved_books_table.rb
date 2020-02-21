class ChangeShelvedBooksTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :shelved_books, :shelf_id
    remove_column :shelved_books, :book_id
    add_column :shelved_books, :shelf_id, :integer
    add_column :shelved_books, :book_id, :integer
  end
end
