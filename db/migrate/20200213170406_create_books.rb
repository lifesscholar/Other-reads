class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :description
      t.date :published_date
      t.string :cover_image_url
      t.timestamps
    end
    add_index :books, :title
    add_index :books, :author
    add_index :books, [:title, :author], unique: true
  end
end
