class AddIndexForShelfScopedUser < ActiveRecord::Migration[5.2]
  def change
    add_index :shelves, [:user_id, :shelf_name], unique: true
  end
end
