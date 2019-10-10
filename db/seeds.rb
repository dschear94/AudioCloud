# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo = User.create({username: "derek", password:"123456", email:"123@aol.com", gender:"male", age: 8});


track1 = Track.create({title: "underground1", album: "none", artist_id: 2 });
track2 = Track.create({title: "underground2" , album: "none", artist_id: 2 });
track3 = Track.create({title: "underground3" , album: "none", artist_id: 2 });
track4 = Track.create({title: "underground4" , album: "none", artist_id: 2 });
track5 = Track.create({title: "underground5" , album: "none", artist_id: 2 });
track6 = Track.create({title: "underground6" , album: "none", artist_id: 2 });
track7 = Track.create({title: "underground7" , album: "none", artist_id: 2 });
track8 = Track.create({title: "underground8" , album: "none", artist_id: 2 });
track9 = Track.create({title: "underground9" , album: "none", artist_id: 2 });
track10 = Track.create({title: "underground10" , album: "none", artist_id: 2 });
track11 = Track.create({title: "underground11" , album: "none", artist_id: 2 });
track12 = Track.create({title: "underground12" , album: "none", artist_id: 2 });
track13 = Track.create({title: "underground13" , album: "none", artist_id: 2 });
track14 = Track.create({title: "underground14" , album: "none", artist_id: 2 });
track15 = Track.create({title: "underground15" , album: "none", artist_id: 2 });
track16 = Track.create({title: "underground16" , album: "none", artist_id: 2 });
track17 = Track.create({title: "underground17" , album: "none", artist_id: 2 });
track18 = Track.create({title: "underground18" , album: "none", artist_id: 2 });
track19 = Track.create({title: "underground19" , album: "none", artist_id: 2 });
track20 = Track.create({title: "underground20" , album: "none", artist_id: 2 });



musicfile1 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Serge Devant - This Moment (Original Mix).wav'))
musicfile2 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/01 Esente (Original Mix).mp3'))
musicfile3 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/01 Trimming.mp3'))
musicfile4 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/02 le grand dome.mp3'))
musicfile5 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/03 Effect (Original Mix).mp3'))
musicfile7 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Audiojack - Spirit (Original Mix).wav'))
musicfile8 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Fatima Yamaha - Whats a Girl to Do (Original Mix)120bpm.mp3'))
musicfile9 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Gizeh - Original Mix.mp3'))
musicfile10 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Hugo Oak, Satori (NL) - Shoeless feat. Hugo Oak (Original Mix)101bpm.mp3'))
musicfile11 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Kermesse - Nostalgia (Mira & Chris Schwarzwalder Remix)84bpm.mp3'))
musicfile12 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/La Feinte N.mp3'))
musicfile6 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Maxi Dance.mp3'))
musicfile13 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Montat.mp3'))
musicfile14 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/NINZE & OKAXY - Apollo (Original Mix)110bpm.mp3'))
musicfile15 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Padap - Bruno Ponsanto Remix.mp3'))
musicfile16 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Rodrigo Gallardo - El Abuelo Feat. Fernando Milagros (Dandara Remix)105bpm.mp3'))
musicfile17 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Sabo - Open Up the Channel (Original Mix)99bpm.mp3'))
musicfile18 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Serge Devant - This Moment (Original Mix).wav'))
musicfile19 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Suspecte.mp3'))
musicfile20 = open(Rails.root.join('/Users/derekschear/Desktop/audiocloud_tracks/Tau.mp3'))

track1.audio_file.attach({io: musicfile1, filename: "MGAD1" })
track2.audio_file.attach({io: musicfile2, filename: "MGAD2" })
track3.audio_file.attach({io: musicfile3, filename: "MGAD3" })
track4.audio_file.attach({io: musicfile4, filename: "MGAD4" })
track5.audio_file.attach({io: musicfile5, filename: "MGAD5" })
track6.audio_file.attach({io: musicfile6, filename: "MGAD1235" })
track7.audio_file.attach({io: musicfile7, filename: "MGAD235" })
track8.audio_file.attach({io: musicfile8, filename: "MGAD6" })
track9.audio_file.attach({io: musicfile9, filename: "MGAD7" })
track10.audio_file.attach({io: musicfile10, filename: "MGA8D" })
track11.audio_file.attach({io: musicfile11, filename: "MGA52345D" })
track12.audio_file.attach({io: musicfile12, filename: "MGA456745D" })
track13.audio_file.attach({io: musicfile13, filename: "MGAsdfgsfD" })
track14.audio_file.attach({io: musicfile14, filename: "MGAsdfgsdfgD" })
track15.audio_file.attach({io: musicfile15, filename: "MGAsdfgsdfgD" })
track16.audio_file.attach({io: musicfile16, filename: "MGdgfhdfhfghAD" })
track17.audio_file.attach({io: musicfile17, filename: "MGAjfghjfghjD" })
track18.audio_file.attach({io: musicfile18, filename: "MGwertfsvAD" })
track19.audio_file.attach({io: musicfile19, filename: "MGsdgfsdfgsAD" })
track20.audio_file.attach({io: musicfile20, filename: "MGAsdfgsjtyrhtyhtD" })

photofile1 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_0070.JPG')
photofile2 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_3179.jpg')
photofile3 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5373.jpg')
photofile4 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5374.jpg')
photofile5 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile6 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile7 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile8 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile9 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile10 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile11 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile12 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile13 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile14 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile15 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile16 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile17 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile18 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile19 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')
photofile20 = open('/Users/derekschear/Desktop/audiocloud_photos/IMG_5377.jpg')

track1.image_file.attach({io: photofile1, filename: "MGasdfAD1" })
track2.image_file.attach({io: photofile2, filename: "MGAasdfasdfD1" })
track3.image_file.attach({io: photofile3, filename: "saMGAdsfgD1" })
track4.image_file.attach({io: photofile4, filename: "MGafsdaAD1" })
track5.image_file.attach({io: photofile5, filename: "MGAfasdfD1" })
track6.image_file.attach({io: photofile6, filename: "MGAasdgdD1" })
track7.image_file.attach({io: photofile7, filename: "MGAasdfD1" })
track8.image_file.attach({io: photofile8, filename: "MGAasdfasdfD1" })
track9.image_file.attach({io: photofile9, filename: "MGADasdfasdfas1" })
track10.image_file.attach({io: photofile10, filename: "MGAasgdsfhdD1" })
track11.image_file.attach({io: photofile11, filename: "MGsdfhsdfhAD1" })
track12.image_file.attach({io: photofile12, filename: "MGAsdfhdsfhdD1" })
track13.image_file.attach({io: photofile13, filename: "MGAsdfhsD1" })
track14.image_file.attach({io: photofile14, filename: "MGAsdfhsdfhD1" })
track15.image_file.attach({io: photofile15, filename: "MGAsdfhsdD1" })
track16.image_file.attach({io: photofile16, filename: "MGAhsdfshdfD1" })
track17.image_file.attach({io: photofile17, filename: "MGAhsdfhsD1" })
track18.image_file.attach({io: photofile18, filename: "MGAdfhsdhfD1" })
track19.image_file.attach({io: photofile19, filename: "MGasdfasdfasAD1" })
track20.image_file.attach({io: photofile20, filename: "MGAdfasdfasdfasdfD1" })