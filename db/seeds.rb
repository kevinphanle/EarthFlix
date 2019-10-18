# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all
Show.destroy_all
ShowGenre.destroy_all
Genre.destroy_all
Profile.destroy_all

# Guest user
guestUser = User.create!(email: 'guest@guest.com', password: 'password')

# Profile
defaultProfile = Profile.create!(user_id: guestUser.id, name: 'Spongebob')
profile_photo = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/profiles/panda.png')
defaultProfile.photo.attach(io: profile_photo, filename: 'panda.png')


# | --------------- VIDEOS ---------------------- |
videos = {}
videos[:earth] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Earth.mp4')
videos[:shore] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Sea.mp4')
videos[:aurora] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Aurora_Borealis.mp4')
videos[:jellyfish] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Jellyfish.mp4')
videos[:owl] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Sea.mp4')
videos[:snowy_trees] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Snowy_trees.mp4')
videos[:aerial] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Aerial.mp4')
videos[:blue_shore] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Blue_shore.mp4')
videos[:boat] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Boat.mp4')
videos[:butterfly] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Butterfly.mp4')
videos[:clouds] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Clouds.mp4')
videos[:fish_school] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Fish_school.mp4')
videos[:flower] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Flower.mp4')
videos[:fog] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Fog.mp4')
videos[:island] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Island.mp4')
videos[:mountain] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Mountain.mp4')
videos[:snail] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Snail.mp4')
videos[:snowy_mountains] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Snowy_mountains.mp4')
videos[:tree] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Tree.mp4')
videos[:water_dragon] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/Water_dragon.mp4')

# | --------------- POSTERS ---------------------- |
posters = {}
posters[:earth] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/earth_snap_shot.png')
posters[:shore] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/sea_snap_shot.png')
posters[:aurora] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/aurora_snap_shot.png')
posters[:jellyfish] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/jellyfish_snap_shot.png')
posters[:owl] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/owl_snap_shot.png')
posters[:snowy_trees] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/snowy_trees_snap_shot.png')
posters[:aerial] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/aerial_snap_shot.png')
posters[:blue_shore] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/blue_shore_snap_shot.png')
posters[:boat] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/boat_snap_shot.png')
posters[:butterfly] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/butterfly_snap_shot.png')
posters[:clouds] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/clouds_snap_shot.png')
posters[:fish_school] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/fish_school_snap_shot.png')
posters[:flower] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/flower_snap_shot.png')
posters[:fog] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/fog_snap_shot.png')
posters[:island] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/island_snap_shot.png')
posters[:mountain] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/mountain_snap_shot.png')
posters[:snail] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/snail_snap_shot.png')
posters[:snowy_mountains] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/snowy_mountains_snap_shot.png')
posters[:tree] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/tree_snap_shot.png')
posters[:water_dragon] = open('https://earthflix-dev.s3-us-west-1.amazonaws.com/snapshots/water_dragon_snap_shot.png')

# | --------------- SHOWS ---------------------- |
earth = Show.create!(title: "Planet Earth", description: "The planet Earth", year: 2017, rating: 9.5, show_type: "SERIES")
shore = Show.create!(title: "The Shore", description: "Golden sands alogn the shore", year: 2015, rating: 9.5, show_type: "SERIES")
aurora = Show.create!(title: "Aurora Borealis", description: "Beautiful northen lights", year: 2012, rating: 9.5, show_type: "SERIES")
jellyfish = Show.create!(title: "Jellyfish", description: "World of the jellyfish", year: 2011, rating: 9.5, show_type: "SERIES")
owl = Show.create!(title: "Owl", description: "Snowy barn owl turns head", year: 2045, rating: 9.5, show_type: "SERIES")
snowy_trees = Show.create!(title: "Snowy Trees", description: "The forest in the winter", year: 2014, rating: 9.5, show_type: "SERIES")
aerial = Show.create!(title: "Aerial", description: "Overhead shot of the clouds", year: 2022, rating: 9.5, show_type: "SERIES")
blue_shore = Show.create!(title: "Blue Shoreline", description: "The beautiful blue coast with white sand", year: 2017, rating: 9.5, show_type: "SERIES")
boat = Show.create!(title: "Boat", description: "A boat sailing amoungst blue hues", year: 2017, rating: 9.5, show_type: "SERIES")
butterfly = Show.create!(title: "Butterfly", description: "A butterfly rest on a flower", year: 2017, rating: 9.5, show_type: "SERIES")
clouds = Show.create!(title: "Clouds", description: "Moving with the wind, Clouds", year: 2017, rating: 9.5, show_type: "SERIES")
fish_school = Show.create!(title: "School of Fish", description: "A school of small fish", year: 2017, rating: 9.5, show_type: "SERIES")
flower = Show.create!(title: "Flower", description: "Adorable pink flowers in bloom", year: 2017, rating: 9.5, show_type: "SERIES")
fog = Show.create!(title: "Fog", description: "The fog encasing the mountain shoreline", year: 2017, rating: 9.5, show_type: "SERIES")
island = Show.create!(title: "Island", description: "A beautiful sunset over the island", year: 2017, rating: 9.5, show_type: "SERIES")
mountain = Show.create!(title: "Mountain", description: "The peak of the mountain", year: 2017, rating: 9.5, show_type: "SERIES")
snail = Show.create!(title: "Snail", description: "A snail", year: 2017, rating: 9.5, show_type: "SERIES")
snowy_mountains = Show.create!(title: "Snowy Mountains", description: "A snowy montain covered in trees", year: 2017, rating: 9.5, show_type: "SERIES")
tree = Show.create!(title: "Tree", description: "An old and wise tree in a forest", year: 2017, rating: 9.5, show_type: "SERIES")
water_dragon = Show.create!(title: "Water Dragon", description: "A curious water dragon resting on a branch", year: 2017, rating: 9.5, show_type: "SERIES")

# | --------------- GENRES ---------------------- |
genres = Genre.create!([{name: "Space"}, {name: "Sky"}, {name: "Ocean"}, {name: "Forest"}, {name: "Animal"}])
genres.push(Genre.create!(name: "Mountains"))

# Space
genres[0].shows << earth
genres[0].shows << aurora

# Sky
genres[1].shows << aurora
genres[1].shows << aerial
genres[1].shows << clouds
genres[1].shows << fog

# Ocean
genres[2].shows << shore
genres[2].shows << jellyfish
genres[2].shows << blue_shore
genres[2].shows << fish_school
genres[2].shows << boat


# Forest
genres[3].shows << owl
genres[3].shows << snowy_trees
genres[3].shows << flower
genres[3].shows << snowy_mountains
genres[3].shows << tree
genres[3].shows << water_dragon


# Animal
genres[4].shows << jellyfish
genres[4].shows << owl
genres[4].shows << snail
genres[4].shows << butterfly
genres[4].shows << fish_school
genres[4].shows << water_dragon

# Mountains
genres[5].shows << snowy_trees
genres[5].shows << fog
genres[5].shows << snowy_mountains
genres[5].shows << mountain
genres[5].shows << island

# | --------------- ATTACH TO SHOW ---------------------- |
earth.video_file.attach(io: videos[:earth], filename: "earth.mp4")
earth.poster_file.attach(io: posters[:earth], filename: "earth.png")

shore.video_file.attach(io: videos[:shore], filename: "shore.mp4")
shore.poster_file.attach(io: posters[:shore], filename: "shore.png")

aurora.video_file.attach(io: videos[:aurora], filename: "aurora.mp4")
aurora.poster_file.attach(io: posters[:aurora], filename: "aurora.png")

jellyfish.video_file.attach(io: videos[:jellyfish], filename: "jellyfish.mp4")
jellyfish.poster_file.attach(io: posters[:jellyfish], filename: "jellyfish.png")

owl.video_file.attach(io: videos[:owl], filename: "owl.mp4")
owl.poster_file.attach(io: posters[:owl], filename: "owl.png")

snowy_trees.video_file.attach(io: videos[:snowy_trees], filename: "snowy_trees.mp4")
snowy_trees.poster_file.attach(io: posters[:snowy_trees], filename: "snowy_trees.png")

aerial.video_file.attach(io: videos[:aerial], filename: "aerial.mp4")
aerial.poster_file.attach(io: posters[:aerial], filename: "aerial.png")

blue_shore.video_file.attach(io: videos[:blue_shore], filename: "blue_shore.mp4")
blue_shore.poster_file.attach(io: posters[:blue_shore], filename: "blue_shore.png")

boat.video_file.attach(io: videos[:boat], filename: "boat.mp4")
boat.poster_file.attach(io: posters[:boat], filename: "boat.png")

butterfly.video_file.attach(io: videos[:butterfly], filename: "butterfly.mp4")
butterfly.poster_file.attach(io: posters[:butterfly], filename: "butterfly.png")

clouds.video_file.attach(io: videos[:clouds], filename: "clouds.mp4")
clouds.poster_file.attach(io: posters[:clouds], filename: "clouds.png")

fish_school.video_file.attach(io: videos[:fish_school], filename: "fish_school.mp4")
fish_school.poster_file.attach(io: posters[:fish_school], filename: "fish_school.png")

flower.video_file.attach(io: videos[:flower], filename: "flower.mp4")
flower.poster_file.attach(io: posters[:flower], filename: "flower.png")

fog.video_file.attach(io: videos[:fog], filename: "fog.mp4")
fog.poster_file.attach(io: posters[:fog], filename: "fog.png")

island.video_file.attach(io: videos[:island], filename: "island.mp4")
island.poster_file.attach(io: posters[:island], filename: "island.png")

mountain.video_file.attach(io: videos[:mountain], filename: "mountain.mp4")
mountain.poster_file.attach(io: posters[:mountain], filename: "mountain.png")

snail.video_file.attach(io: videos[:snail], filename: "snail.mp4")
snail.poster_file.attach(io: posters[:snail], filename: "snail.png")

snowy_mountains.video_file.attach(io: videos[:snowy_mountains], filename: "snowy_mountains.mp4")
snowy_mountains.poster_file.attach(io: posters[:snowy_mountains], filename: "snowy_mountains.png")

tree.video_file.attach(io: videos[:tree], filename: "tree.mp4")
tree.poster_file.attach(io: posters[:tree], filename: "tree.png")

water_dragon.video_file.attach(io: videos[:water_dragon], filename: "water_dragon.mp4")
water_dragon.poster_file.attach(io: posters[:water_dragon], filename: "water_dragon.png")