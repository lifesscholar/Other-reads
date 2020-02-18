class CreateShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :shelves do |t|
      t.string :shelf_name, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :shelves, :shelf_name, unique: true
    add_index :shelves, :user_id, unique: true
  end
end
