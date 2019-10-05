class ColumnRename < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :Gender, :gender
    rename_column :users, :Age, :age
  end
end
