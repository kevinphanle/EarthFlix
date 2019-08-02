# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all
Show.destroy_all
ShowVideo.destroy_all

# Guest user
User.create!(email: 'guest@guest.com', password: 'password')

# Shows

show1 = Show.create(title: 'Planet Earth', description: "The show about Earth", year: 2001, rating: 7.6)
show2 = Show.create(title: 'Planet Earth 2', description: "The show about Earth twice", year: 2002, rating: 7.7)

# Videos

video1 = Video.create!(video_url: 'https://www.youtube.com/watch?v=GKALmB0W8jI', thumbnail_url: "https://m.media-amazon.com/images/M/MV5BNzVhMTU4ZTMtZmZhNC00YjIwLWJiM2ItMWI0NzIxNTE4ZmRmXkEyXkFqcGdeQXVyODE1NDM3MDQ@._V1_.jpg", name: 'Lava Monsters', description: 'Episode 1 of Planet Earth', video_type: 'EPISODE', duration: 600000)
video2 = Video.create!(video_url: 'https://www.youtube.com/watch?v=GHlHqvoRSwo', thumbnail_url: "https://images-na.ssl-images-amazon.com/images/I/81nq7aMbr8L._SL1500_.jpg", name: 'Ice Man', description: 'Ice Man of the Ice', video_type: 'EPISODE', duration: 600000)
video3 = Video.create!(video_url: 'https://www.youtube.com/watch?v=nX6ZEcwRrw0', thumbnail_url: "https://cdn3.movieweb.com/i/article/kLIetakj0M6JO1K0z8EykZQSDPri6y/798:50/Ghost-Rider-Movie-Originally-R-Rated-Nicolas-Cage.jpg", name: 'Ghost Rider Habitat', description: 'GhostRider: Planet Earth 2', video_type: 'EPISODE', duration: 600000)

# show_videos joins

j1 = ShowVideo.create!(show_id: show1.id, video_id: video1.id)
j2 = ShowVideo.create!(show_id: show1.id, video_id: video2.id)
j3 = ShowVideo.create!(show_id: show2.id, video_id: video3.id)