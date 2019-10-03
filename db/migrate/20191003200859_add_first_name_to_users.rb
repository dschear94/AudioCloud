class AddFirstNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :FirstName, :string
    
    add_column :users, :LastName, :string
    
    add_column :users, :Gender, :string
    
    add_column :users, :Age, :integer
    
  end
end
