class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index(:likes, [:user_id, :track_id], unique: true)
    add_index(:follows, [:followed_user_id, :follower_id], unique: true)
  end
end
