class RemoveNamesFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :FirstName
    remove_column :users, :LastName
  end
end
