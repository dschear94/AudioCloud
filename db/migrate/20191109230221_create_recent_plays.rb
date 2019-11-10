class CreateRecentPlays < ActiveRecord::Migration[5.2]
  def change
    create_table :recent_plays do |t|
        t.integer :user_id, null: false
        t.integer :track_id, null: false

      t.timestamps
    end
    add_index :recent_plays, [:user_id, :track_id], unique: true
  end
end
