# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all
Video.destroy_all
Show.destroy_all
ShowVideo.destroy_all

# Guest user
User.create!(email: 'guest@guest.com', password: 'password')

# Shows

# / -------------------------- PLANET EARTH ---------------------------------------------------------- /
planet_earth_1_show = Show.create!(
    title: 'Planet Earth', 
    description: "The show about Earth", 
    year: 2001, 
    rating: 7.6,
    show_type: "SERIES"
)

planet_earth_poster_file = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/earth_snap_shot.png')
planet_earth_1_show.poster_file.attach(io: planet_earth_poster_file, filename: 'earth_snap_shot.png')
planet_earth_1_show.save!

planet_earth_1_video = planet_earth_1_show.videos.create!( 
    name: "The Earth", 
    description: "The Earth from space", 
    video_type: "EPISODE", 
    duration: 600000
)

ShowVideo.create!(show_id: planet_earth_1_show.id, video_id: planet_earth_1_video.id)


planet_earth_1_video_file = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Earth.mp4')

planet_earth_1_video.video_file.attach(io: planet_earth_1_video_file, filename: "Earth.mp4")
planet_earth_1_video.save!

# / ---------------------------- Planet Ocean ----------------------------------------------- /

ocean_show = Show.create!(
    title: "Planet Ocean",
    description: "All about the Ocean and its creatures",
    year: 2003,
    rating: 8.5,
    show_type: "SERIES"
)

ocean_poster_file = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/sea_snap_shot.png')
ocean_show.poster_file.attach(io: ocean_poster_file, filename: "sea_snap_shot.png")
ocean_show.save!

ocean_video = ocean_show.videos.create!(
    name: "The Shore",
    description: "Golden sun on the golden shore",
    video_type: "EPISODE",
    duration: 600000
)
# ocean_video_file = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Sea.mp4');
# ocean_video.video_file.attach(io: ocean_video, filename: "Sea.mp4");
# ocean_video.save!


# ---------------- Artic ------------- /

aurora_show = Show.create!(
    title: "The Aurora Borealis",
    description: "A beautiful display of lights in the Artic",
    year: 2019,
    rating: 7.0,
    show_type: "SERIES"

)

aurora_poster_file = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/aurora_snap_shot.png')
aurora_show.poster_file.attach(io: aurora_poster_file, filename: "aurora_snap_shot.png")
aurora_show.save!


# / --------------Forest Show -------------- /

forest_show = Show.create!(
    title: "The Forest",
    description: "Green greeen and more green. and sometimes white.",
    year: 2020,
    rating: 8.9,
    show_type: "SERIES"

)

forest_poster_file= open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/snowy_trees_snap_shot.png')
forest_show.poster_file.attach(io: forest_poster_file, filename: "snowy_trees_snap_shot.png")
forest_show.save!

# /-------------------- Animals ---------------- /

owl_show = Show.create!(
    title: "The Snowy Owl",
    description: "He spins his head all the way around",
    year: 2010,
    rating: 4.5,
    show_type: "SERIES"

)

owl_poster_file = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/owl_snap_shot.png')
owl_show.poster_file.attach(io: owl_poster_file, filename: "owl_snap_shot.png")
owl_show.save!


# ----------- Jellyfish ------------------------ /

jellyfish_show = Show.create!(
    title: "Jellyfish",
    description: "These jellyfish are hungry",
    year: 2012,
    rating: 9.9,
    show_type: "SERIES"

)

jellyfish_poster_file = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/jellyfish_snap_shot.png')
jellyfish_show.poster_file.attach(io: jellyfish_poster_file, filename: 'jellyfish_snap_shot.png')
jellyfish_show.save!