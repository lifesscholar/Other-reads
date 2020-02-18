class CreateShelvedBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :shelved_books do |t|
      t.string :shelf_id, null: false
      t.string :book_id, null: false
      t.timestamps
    end
    add_index :shelved_books, :shelf_id
    add_index :shelved_books, :book_id
  end
end
