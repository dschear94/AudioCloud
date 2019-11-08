follows.each do |follow|
    json.set! follow.id do 
            json.extract! follow, :id, :follower_id, :followed_user_id
    end
end
