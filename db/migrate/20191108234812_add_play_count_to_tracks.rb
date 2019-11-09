class AddPlayCountToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :play_count, :integer
  end
end
