class ChangeTracksPlayCountColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :tracks, :play_count, :integer, :default => 0
  end
end
