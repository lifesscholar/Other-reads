class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :shelves, name: "index_shelves_on_user_id"
  end
end
