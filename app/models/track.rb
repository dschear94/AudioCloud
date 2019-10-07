class Track < ApplicationRecord
    has_one_attached :audio_file
end
