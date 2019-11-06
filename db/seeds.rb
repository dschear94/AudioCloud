# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

derek = User.create({username: "derek", password:"123456", email:"123@aol.com", gender:"male", age: 8});
dani = User.create({username: "dani", password:"123456", email:"1234@aol.com", gender:"male", age: 8});
ali = User.create({username: "ali", password:"123456", email:"1235@aol.com", gender:"male", age: 8});
larry = User.create({username: "larry", password:"123456", email:"1236@aol.com", gender:"male", age: 8});
elda = User.create({username: "elda", password:"123456", email:"1237@aol.com", gender:"male", age: 8});
isaac = User.create({username: "isaac", password:"123456", email:"1238@aol.com", gender:"male", age: 8});
giselle = User.create({username: "giselle", password:"123456", email:"12324237@aol.com", gender:"male", age: 8});
alex = User.create({username: "alex", password:"123456", email:"12315237@aol.com", gender:"male", age: 8});
nick = User.create({username: "nick", password:"123456", email:"123234237@aol.com", gender:"male", age: 8});
sam = User.create({username: "sam", password:"123456", email:"123117@aol.com", gender:"male", age: 8});
ryan = User.create({username: "ryan", password:"123456", email:"1222237@aol.com", gender:"male", age: 8});
dean = User.create({username: "dean", password:"123456", email:"12333337@aol.com", gender:"male", age: 8});


track1 = Track.create({title: "01 Flume.mp3", album: "none", artist_id: 1 })
track2 = Track.create({title: "01 Give Life Back To Music.mp3" , album: "none", artist_id: 2 })
track3 = Track.create({title: "01 In the Air Tonight.mp3" , album: "none", artist_id: 3 })
track4 = Track.create({title: "01 Shine on You Crazy Diamond, Pts. 1-5.mp3" , album: "none", artist_id: 4 })
track5 = Track.create({title: "02 Lump Sum.mp3" , album: "none", artist_id: 5 })
track6 = Track.create({title: "02 Welcome to the Machine.mp3" , album: "none", artist_id: 1 })
track7 = Track.create({title: "2-06 Dazed And Confused.mp3" , album: "none", artist_id: 2 })
track8 = Track.create({title: "03 Have a Cigar.mp3" , album: "none", artist_id: 3 })
track9 = Track.create({title: "03 Holocene.mp3" , album: "none", artist_id: 4 })
track10 = Track.create({title: "03 Skinny Love.mp3" , album: "none", artist_id: 5 })
track11 = Track.create({title: "04 Gravity.mp3" , album: "none", artist_id: 1 })
track12 = Track.create({title: "04 Nikes On My Feet.mp3" , album: "none", artist_id: 2 })
track13 = Track.create({title: "04 Towers.mp3" , album: "none", artist_id: 3 })
track14 = Track.create({title: "04 Wish You Were Here.mp3" , album: "none", artist_id: 4 })
track15 = Track.create({title: "05 Michicant.mp3" , album: "none", artist_id: 5 })
track16 = Track.create({title: "05 Senior Skip Day.mp3" , album: "none", artist_id: 1 })
track17 = Track.create({title: "12 Jammin'.mp3" , album: "none", artist_id: 2 })
track18 = Track.create({title: "13 Could You Be Loved.mp3" , album: "none", artist_id: 3 })
track19 = Track.create({title: "07 The Chain.mp3" , album: "none", artist_id: 4 })
track20 = Track.create({title: "09 Re_ Stacks.mp3" , album: "none", artist_id: 5 })



audio_file1 = open(Rails.root.join('app', 'assets', 'tracks', '01 Flume.mp3'))
audio_file2 = open(Rails.root.join('app', 'assets', 'tracks', '01 Give Life Back To Music.mp3'))
audio_file3 = open(Rails.root.join('app', 'assets', 'tracks', '01 In the Air Tonight.mp3'))
audio_file4 = open(Rails.root.join('app', 'assets', 'tracks', '01 Shine on You Crazy Diamond, Pts. 1-5.mp3'))
audio_file5 = open(Rails.root.join('app', 'assets', 'tracks', '02 Lump Sum.mp3'))
audio_file6 = open(Rails.root.join('app', 'assets', 'tracks', '02 Welcome to the Machine.mp3'))
audio_file7 = open(Rails.root.join('app', 'assets', 'tracks', '2-06 Dazed And Confused.mp3'))
audio_file8 = open(Rails.root.join('app', 'assets', 'tracks', '03 Have a Cigar.mp3'))
audio_file9 = open(Rails.root.join('app', 'assets', 'tracks', '03 Holocene.mp3'))
audio_file10 = open(Rails.root.join('app', 'assets', 'tracks', '03 Skinny Love.mp3'))
audio_file11 = open(Rails.root.join('app', 'assets', 'tracks', '04 Gravity.mp3'))
audio_file12 = open(Rails.root.join('app', 'assets', 'tracks', '04 Nikes On My Feet.mp3'))
audio_file13 = open(Rails.root.join('app', 'assets', 'tracks', '04 Towers.mp3'))
audio_file14 = open(Rails.root.join('app', 'assets', 'tracks', '04 Wish You Were Here.mp3'))
audio_file15 = open(Rails.root.join('app', 'assets', 'tracks', '05 Michicant.mp3'))
audio_file16 = open(Rails.root.join('app', 'assets', 'tracks', '05 Senior Skip Day.mp3'))
audio_file17 = open(Rails.root.join('app', 'assets', 'tracks', "12 Jammin'.mp3"))
audio_file18 = open(Rails.root.join('app', 'assets', 'tracks', '13 Could You Be Loved.mp3'))
audio_file19 = open(Rails.root.join('app', 'assets', 'tracks', '07 The Chain.mp3'))
audio_file20 = open(Rails.root.join('app', 'assets', 'tracks', '09 Re_ Stacks.mp3'))


track1.audio_file.attach({io: audio_file1, filename: "01 Flume.mp3" })
track2.audio_file.attach({io: audio_file2, filename: "01 Give Life Back To Music.mp3" })
track3.audio_file.attach({io: audio_file3, filename: "01 In the Air Tonight.mp3" })
track4.audio_file.attach({io: audio_file4, filename: "01 Shine on You Crazy Diamond, Pts. 1-5.mp3" })
track5.audio_file.attach({io: audio_file5, filename: "02 Lump Sum.mp3" })
track6.audio_file.attach({io: audio_file6, filename: "02 Welcome to the Machine.mp3" })
track7.audio_file.attach({io: audio_file7, filename: "2-06 Dazed And Confused.mp3" })
track8.audio_file.attach({io: audio_file8, filename: "03 Have a Cigar.mp3" })
track9.audio_file.attach({io: audio_file9, filename: "03 Holocene.mp3" })
track10.audio_file.attach({io: audio_file10, filename: "03 Skinny Love.mp3" })
track11.audio_file.attach({io: audio_file11, filename: "04 Gravity.mp3" })
track12.audio_file.attach({io: audio_file12, filename: "04 Nikes On My Feet.mp3" })
track13.audio_file.attach({io: audio_file13, filename: "04 Towers.mp3" })
track14.audio_file.attach({io: audio_file14, filename: "04 Wish You Were Here.mp3" })
track15.audio_file.attach({io: audio_file15, filename: "05 Michicant.mp3" })
track16.audio_file.attach({io: audio_file16, filename: "05 Senior Skip Day.mp3" })
track17.audio_file.attach({io: audio_file17, filename: "12 Jammin'.mp3" })
track18.audio_file.attach({io: audio_file18, filename: "13 Could You Be Loved.mp3" })
track19.audio_file.attach({io: audio_file19, filename: "07 The Chain.mp3" })
track20.audio_file.attach({io: audio_file20, filename: "09 Re_ Stacks.mp3" })






imagefile1 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4381.jpg'))
imagefile2 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4416.jpg'))
imagefile3 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4437.jpg'))
imagefile4 = open(Rails.root.join('app', 'assets', 'images', 'IMG_5159.jpg'))
imagefile5 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4546.jpg'))
imagefile6 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4625.jpg'))
imagefile7 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4635.jpg'))
imagefile8 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4691.jpg'))
imagefile9 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4737.jpg'))
imagefile10 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4742.jpg'))
imagefile11 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4771.jpg'))
imagefile12 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4789.jpg'))
imagefile13 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4793.jpg'))
imagefile14 = open(Rails.root.join('app', 'assets', 'images', 'IMG_4981.jpg'))
imagefile15 = open(Rails.root.join('app', 'assets', 'images', 'IMG_5374.jpg'))
imagefile16 = open(Rails.root.join('app', 'assets', 'images', 'IMG_5377.jpg'))
imagefile17 = open(Rails.root.join('app', 'assets', 'images', 'IMG_5373.jpg'))
imagefile18 = open(Rails.root.join('app', 'assets', 'images', 'IMG_5233.jpg'))
imagefile19 = open(Rails.root.join('app', 'assets', 'images', 'IMG_5232.jpg'))
imagefile20 = open(Rails.root.join('app', 'assets', 'images', 'IMG_5377.jpg'))








track1.image_file.attach({io: imagefile1, filename: "MGasdfAD1" })
track2.image_file.attach({io: imagefile2, filename: "MGAasdfasdfD1" })
track3.image_file.attach({io: imagefile3, filename: "saMGAdsfgD1" })
track4.image_file.attach({io: imagefile4, filename: "MGafsdaAD1" })
track5.image_file.attach({io: imagefile5, filename: "MGAfasdfD1" })
track6.image_file.attach({io: imagefile6, filename: "MGAasdgdD1" })
track7.image_file.attach({io: imagefile7, filename: "MGAasdfD1" })
track8.image_file.attach({io: imagefile8, filename: "MGAasdfasdfD1" })
track9.image_file.attach({io: imagefile9, filename: "MGADasdfasdfas1" })
track10.image_file.attach({io: imagefile10, filename: "MGAasgdsfhdD1" })
track11.image_file.attach({io: imagefile11, filename: "MGsdfhsdfhAD1" })
track12.image_file.attach({io: imagefile12, filename: "MGAsdfhdsfhdD1" })
track13.image_file.attach({io: imagefile13, filename: "MGAsdfhsD1" })
track14.image_file.attach({io: imagefile14, filename: "MGAsdfhsdfhD1" })
track15.image_file.attach({io: imagefile15, filename: "MGAsdfhsdD1" })
track16.image_file.attach({io: imagefile16, filename: "MGAhsdfshdfD1" })
track17.image_file.attach({io: imagefile17, filename: "MGAhsdfhsD1" })
track18.image_file.attach({io: imagefile18, filename: "MGAdfhsdhfD1" })
track19.image_file.attach({io: imagefile19, filename: "MGasdfasdfasAD1" })
track20.image_file.attach({io: imagefile20, filename: "MGAdfasdfasdfasdfD1" })





comment1 = Comment.create({author_id: 1, track_id: 1, body: "nice"})
comment2 = Comment.create({author_id: 2, track_id: 2, body: "sweet!"})
comment3 = Comment.create({author_id: 3, track_id: 3, body: "cool"})
comment4 = Comment.create({author_id: 4, track_id: 4, body: "awesome"})
comment5 = Comment.create({author_id: 5, track_id: 5, body: "amazing"})
comment6 = Comment.create({author_id: 1, track_id: 6, body: "beautiful"})
comment7 = Comment.create({author_id: 2, track_id: 7, body: "lovely!"})
comment8 = Comment.create({author_id: 3, track_id: 8, body: "melodies"})
comment9 = Comment.create({author_id: 6, track_id: 9, body: "rhythm"})
comment10 = Comment.create({author_id: 7, track_id: 10, body: "structure"})
comment11 = Comment.create({author_id: 8, track_id: 11, body: "balance"})
comment12 = Comment.create({author_id: 9, track_id: 12, body: "awesome"})
comment13 = Comment.create({author_id: 10, track_id: 13, body: "so great"})
comment14 = Comment.create({author_id: 6, track_id: 14, body: "so smooth"})
comment15 = Comment.create({author_id: 1, track_id: 15, body: "hard!"})
comment16 = Comment.create({author_id: 2, track_id: 16, body: "dancing!!!!!!!!"})
comment17 = Comment.create({author_id: 3, track_id: 17, body: "chillllll"})
comment18 = Comment.create({author_id: 2, track_id: 18, body: "sweeeeeeet"})
comment19 = Comment.create({author_id: 1, track_id: 19, body: "wowwwwwwwwww"})
comment20 = Comment.create({author_id: 1, track_id: 20, body: "oooeeeeeeeee"})






like1 = Like.create({user_id: 1, track_id: 1})
like2 = Like.create({user_id: 2, track_id: 2})
like3 = Like.create({user_id: 3, track_id: 3})
like4 = Like.create({user_id: 4, track_id: 4})
like5 = Like.create({user_id: 1, track_id: 5})
like6 = Like.create({user_id: 2, track_id: 6})
like7 = Like.create({user_id: 3, track_id: 7})
like8 = Like.create({user_id: 4, track_id: 8})
like9 = Like.create({user_id: 5, track_id: 9})
like10 = Like.create({user_id: 6, track_id: 10})

# avatars

derek.avatar.attach({io: imagefile6, filename: "MGAasdgdD1" })
dani.avatar.attach({io: imagefile11, filename: "MGsdfhsdfhAD1" })
ali.avatar.attach({io: imagefile3, filename: "saMGAdsfgD1" })
larry.avatar.attach({io: imagefile4, filename: "MGafsdaAD1" })
elda.avatar.attach({io: imagefile9, filename: "MGADasdfasdfas1" })
isaac.avatar.attach({io: imagefile7, filename: "MGAasdfD1" })
giselle.avatar.attach({io: imagefile20, filename: "MGAdfasdfasdfasdfD1" })
alex.avatar.attach({io: imagefile8, filename: "MGAasdfasdfD1" })
nick.avatar.attach({io: imagefile5, filename: "MGAfasdfD1" })
sam.avatar.attach({io: imagefile1, filename: "MGasdfAD1" })
ryan.avatar.attach({io: imagefile2, filename: "MGAasdfasdfD1" })
dean.avatar.attach({io: imagefile10, filename: "MGAasgdsfhdD1" })
