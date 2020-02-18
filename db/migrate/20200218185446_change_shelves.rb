class ChangeShelves < ActiveRecord::Migration[5.2]
  def change
    add_column :shelves, :exclusive, :boolean, default: false, null: false
  end
end
