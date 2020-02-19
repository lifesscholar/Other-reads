class RemoveIndexFromShelf < ActiveRecord::Migration[5.2]
  def change
    remove_index :shelves, name: "index_shelves_on_shelf_name"
  end
end
