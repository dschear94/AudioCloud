# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
# require 'aws-sdk-s3'

# s3 = Aws::S3::Resource.new(region: 'us-east-1')

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

imagefile1 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4381.jpg')
imagefile2 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4416.jpg')
imagefile3 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4437.jpg')
imagefile4 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_5159.jpg')
imagefile5 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4546.jpg')
imagefile6 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4625.jpg')
imagefile7 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4635.jpg')
imagefile8 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4691.jpg')
imagefile9 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4737.jpg')
imagefile10 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4742.jpg')
imagefile11 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4771.jpg')
imagefile12 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4789.jpg')
imagefile13 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4793.jpg')
imagefile14 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4981.jpg')
imagefile15 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_5374.jpg')
imagefile16 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_5377.jpg')
imagefile17 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_5373.jpg')
imagefile18 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_5233.jpg')
imagefile19 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_5232.jpg')
imagefile20 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_5377.jpg')

imagefile21 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_3194.jpg')
imagefile22 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_3272.jpg')
imagefile23 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_3377.jpg')
imagefile24 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4054.jpg')
imagefile25 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4123.jpg')
imagefile26 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4124.jpg')
imagefile27 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4135.jpg')
imagefile28 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4140.jpg')
imagefile29 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4142.jpg')
imagefile30 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_2506.jpg')
imagefile31 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/IMG_4142.jpg')

derek.avatar.attach({io: imagefile20, filename: "propic1", content_type: "image/jpeg"})
dani.avatar.attach({io: imagefile21, filename: "propic2", content_type: "image/jpeg"})
ali.avatar.attach({io: imagefile22, filename: "propic3", content_type: "image/jpeg"})
larry.avatar.attach({io: imagefile23, filename: "propic4", content_type: "image/jpeg"})
elda.avatar.attach({io: imagefile24, filename: "propic5", content_type: "image/jpeg"})
isaac.avatar.attach({io: imagefile25, filename: "propi61c", content_type: "image/jpeg"})
giselle.avatar.attach({io: imagefile26, filename: "pro6pic", content_type: "image/jpeg"})
alex.avatar.attach({io: imagefile27, filename: "propic7", content_type: "image/jpeg"})
nick.avatar.attach({io: imagefile28, filename: "propi8", content_type: "image/jpeg"})
sam.avatar.attach({io: imagefile29, filename: "propi9", content_type: "image/jpeg"})
ryan.avatar.attach({io: imagefile30, filename: "prop123ic", content_type: "image/jpeg"})




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


audio_file1 = open("https://audiocloud-ds-seeds.s3.amazonaws.com/01+Flume.mp3")
audio_file2 = open("https://audiocloud-ds-seeds.s3.amazonaws.com/01+Give+Life+Back+To+Music.mp3")
audio_file3 = open("https://audiocloud-ds-seeds.s3.amazonaws.com/01+In+the+Air+Tonight.mp3")
audio_file4 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/01+Shine+on+You+Crazy+Diamond%2C+Pts.+1-5.mp3')
audio_file5 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/02+Lump+Sum.mp3')
audio_file6 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/02+Welcome+to+the+Machine.mp3')
audio_file7 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/2-06+Dazed+And+Confused.mp3')
audio_file8 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/03+Have+a+Cigar.mp3')
audio_file9 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/03+Holocene.mp3')
audio_file10 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/03+Skinny+Love.mp3')
audio_file11 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/04+Gravity.mp3')
audio_file12 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/04+Nikes+On+My+Feet.mp3')
audio_file13 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/04+Towers.mp3')
audio_file14 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/04+Wish+You+Were+Here.mp3')
audio_file15 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/05+Michicant.mp3')
audio_file16 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/05+Senior+Skip+Day.mp3')
audio_file17 = open("https://audiocloud-ds-seeds.s3.amazonaws.com/12+Jammin'.mp3")
audio_file18 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/13+Could+You+Be+Loved.mp3')
audio_file19 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/07+The+Chain.mp3')
audio_file20 = open('https://audiocloud-ds-seeds.s3.amazonaws.com/09+Re_+Stacks.mp3')


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

track1.image_file.attach({io: imagefile1, filename: "MGasdfAD1", content_type: "image/jpeg" })
track2.image_file.attach({io: imagefile2, filename: "MGAasdfasdfD1", content_type: "image/jpeg" })
track3.image_file.attach({io: imagefile3, filename: "saMGAdsfgD1", content_type: "image/jpeg" })
track4.image_file.attach({io: imagefile4, filename: "MGafsdaAD1", content_type: "image/jpeg" })
track5.image_file.attach({io: imagefile5, filename: "MGAfasdfD1", content_type: "image/jpeg" })
track6.image_file.attach({io: imagefile6, filename: "MGAasdgdD1", content_type: "image/jpeg" })
track7.image_file.attach({io: imagefile7, filename: "MGAasdfD1", content_type: "image/jpeg" })
track8.image_file.attach({io: imagefile8, filename: "MGAasdfasdfD1", content_type: "image/jpeg" })
track9.image_file.attach({io: imagefile9, filename: "MGADasdfasdfas1", content_type: "image/jpeg" })
track10.image_file.attach({io: imagefile10, filename: "MGAasgdsfhdD1", content_type: "image/jpeg" })
track11.image_file.attach({io: imagefile11, filename: "MGsdfhsdfhAD1", content_type: "image/jpeg" })
track12.image_file.attach({io: imagefile12, filename: "MGAsdfhdsfhdD1", content_type: "image/jpeg" })
track13.image_file.attach({io: imagefile13, filename: "MGAsdfhsD1", content_type: "image/jpeg" })
track14.image_file.attach({io: imagefile14, filename: "MGAsdfhsdfhD1", content_type: "image/jpeg" })
track15.image_file.attach({io: imagefile15, filename: "MGAsdfhsdD1", content_type: "image/jpeg" })
track16.image_file.attach({io: imagefile16, filename: "MGAhsdfshdfD1", content_type: "image/jpeg" })
track17.image_file.attach({io: imagefile17, filename: "MGAhsdfhsD1", content_type: "image/jpeg" })
track18.image_file.attach({io: imagefile18, filename: "MGAdfhsdhfD1", content_type: "image/jpeg" })
track19.image_file.attach({io: imagefile19, filename: "MGasdfasdfasAD1", content_type: "image/jpeg" })
track20.image_file.attach({io: imagefile31, filename: "MGAdfasdfasdfasdfD1", content_type: "image/jpeg" })

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

follow1 = Follow.create({followed_user_id: 5, follower_id: 1})
follow2 = Follow.create({followed_user_id: 3, follower_id: 2})
follow3 = Follow.create({followed_user_id: 2, follower_id: 3})
follow4 = Follow.create({followed_user_id: 1, follower_id: 4})
follow5 = Follow.create({followed_user_id: 6, follower_id: 5})
follow6 = Follow.create({followed_user_id: 2, follower_id: 6})
follow7 = Follow.create({followed_user_id: 4, follower_id: 7})
follow8 = Follow.create({followed_user_id: 3, follower_id: 8})
follow9 = Follow.create({followed_user_id: 6, follower_id: 9})
follow10 = Follow.create({followed_user_id: 6, follower_id: 10})

dfollow1 = Follow.create({followed_user_id: 10, follower_id: 1})
dfollow2 = Follow.create({followed_user_id: 2, follower_id: 1})
dfollow3 = Follow.create({followed_user_id: 3, follower_id: 1})
dfollow4 = Follow.create({followed_user_id: 4, follower_id: 1})
dfollow6 = Follow.create({followed_user_id: 6, follower_id: 1})
dfollow7 = Follow.create({followed_user_id: 7, follower_id: 1})
dfollow8 = Follow.create({followed_user_id: 8, follower_id: 1})
dfollow10 = Follow.create({followed_user_id: 9, follower_id: 1})