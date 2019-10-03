class AddEntryFieldToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :entryField, :string
  end
end
