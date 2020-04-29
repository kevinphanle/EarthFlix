# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all
Profile.destroy_all
Show.destroy_all
Genre.destroy_all
ShowGenre.destroy_all

# Guest user
guestUser = User.create!(email: 'guest@guest.com', password: 'password')

# Profile
defaultProfile = Profile.create!(user_id: guestUser.id, name: 'Spongebob')
profile_photo = open('https://djqsww0k8h48a.cloudfront.net/profiles/panda.png')
defaultProfile.photo.attach(io: profile_photo, filename: 'panda.png')


# | --------------- VIDEOS ---------------------- |
videos = {}
videos[:earth] = open('https://djqsww0k8h48a.cloudfront.net/Earth.mp4')
videos[:shore] = open('https://djqsww0k8h48a.cloudfront.net/Sea.mp4')
videos[:aurora] = open('https://djqsww0k8h48a.cloudfront.net/Aurora_Borealis.mp4')
videos[:jellyfish] = open('https://djqsww0k8h48a.cloudfront.net/Jellyfish.mp4')
videos[:owl] = open('https://djqsww0k8h48a.cloudfront.net/Sea.mp4')
videos[:snowy_trees] = open('https://djqsww0k8h48a.cloudfront.net/Snowy_trees.mp4')
videos[:aerial] = open('https://djqsww0k8h48a.cloudfront.net/Aerial.mp4')
videos[:blue_shore] = open('https://djqsww0k8h48a.cloudfront.net/Blue_shore.mp4')
videos[:boat] = open('https://djqsww0k8h48a.cloudfront.net/Boat.mp4')
videos[:butterfly] = open('https://djqsww0k8h48a.cloudfront.net/Butterfly.mp4')
videos[:clouds] = open('https://djqsww0k8h48a.cloudfront.net/Clouds.mp4')
videos[:fish_school] = open('https://djqsww0k8h48a.cloudfront.net/Fish_school.mp4')
videos[:flower] = open('https://djqsww0k8h48a.cloudfront.net/Flower.mp4')
videos[:fog] = open('https://djqsww0k8h48a.cloudfront.net/Fog.mp4')
videos[:island] = open('https://djqsww0k8h48a.cloudfront.net/Island.mp4')
videos[:mountain] = open('https://djqsww0k8h48a.cloudfront.net/Mountain.mp4')
videos[:snail] = open('https://djqsww0k8h48a.cloudfront.net/Snail.mp4')
videos[:snowy_mountains] = open('https://djqsww0k8h48a.cloudfront.net/Snowy_mountains.mp4')
videos[:tree] = open('https://djqsww0k8h48a.cloudfront.net/Tree.mp4')
videos[:water_dragon] = open('https://djqsww0k8h48a.cloudfront.net/Water_dragon.mp4')

# | --------------- POSTERS ---------------------- |
posters = {}
posters[:earth] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/earth_snap_shot.png')
posters[:shore] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/sea_snap_shot.png')
posters[:aurora] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/aurora_snap_shot.png')
posters[:jellyfish] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/jellyfish_snap_shot.png')
posters[:owl] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/owl_snap_shot.png')
posters[:snowy_trees] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/snowy_trees_snap_shot.png')
posters[:aerial] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/aerial_snap_shot.png')
posters[:blue_shore] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/blue_shore_snap_shot.png')
posters[:boat] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/boat_snap_shot.png')
posters[:butterfly] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/butterfly_snap_shot.png')
posters[:clouds] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/clouds_snap_shot.png')
posters[:fish_school] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/fish_school_snap_shot.png')
posters[:flower] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/flower_snap_shot.png')
posters[:fog] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/fog_snap_shot.png')
posters[:island] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/island_snap_shot.png')
posters[:mountain] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/mountain_snap_shot.png')
posters[:snail] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/snail_snap_shot.png')
posters[:snowy_mountains] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/snowy_mountains_snap_shot.png')
posters[:tree] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/tree_snap_shot.png')
posters[:water_dragon] = open('https://djqsww0k8h48a.cloudfront.net/snapshots/water_dragon_snap_shot.png')

# | --------------- SHOWS ---------------------- |
earth = Show.create!(title: "Planet Earth", description: "Earth, third planet from the Sun and the fifth largest planet in the solar system in terms of size and mass. Its single most outstanding feature is that its near-surface environments are the only places in the universe known to harbour life. Viewed from another planet in the solar system, Earth would appear bright and bluish in colour.", year: 2017, rating: 9.5, show_type: "SERIES")
shore = Show.create!(title: "The Shore", description: "Golden sand along the shore, tranquil waters, beautiful scenery, good for a nice long walk", year: 2015, rating: 9.5, show_type: "SERIES")
aurora = Show.create!(title: "Aurora Borealis", description: "Natural light display in the Earth's sky. Those who live at or visit high latitudes might at times experience colored lights shimmering across the night sky. Some Inuit believed that the spirits of their ancestors could be seen dancing in the flickering aurora. In Norse mythology, the aurora was a fire bridge to the sky built by the gods.", year: 2012, rating: 10, show_type: "SERIES")
jellyfish = Show.create!(title: "Jellyfish", description: "The infamous box jellyfish developed its frighteningly powerful venom to instantly stun or kill prey, like fish and shrimp, so their struggle to escape wouldn’t damage its delicate tentacles.", year: 2011, rating: 7.5, show_type: "SERIES")
owl = Show.create!(title: "Owl", description: "Historically, the barn owl was Britain’s most common owl species, but today only one farm in about 75 can boast a barn owl nest. The barn owl makes almost no noise when it flies. This enables it to hear the slightest sounds made by its rodent prey hidden in deep vegetation while the owl is flying up to three metres overhead.", year: 2045, rating: 8, show_type: "SERIES")
snowy_trees = Show.create!(title: "Snowy Trees", description: "The skies were glistening with the bright white stars which looked down on the frostbitten trees. They stood together as a pack, sheltering in the cold wind. Mountains loomed above the forest, leaning threateningly over the chilly trees. Ferns stood tall as the saplings shivered. It was fast becoming a cold winter.", year: 2014, rating: 6, show_type: "SERIES")
aerial = Show.create!(title: "Aerial", description: "Above the dense fluffy clouds, the horizon seems to stretch on forever. Only when one is unhindered by obstacles can they really see how vast the world truly is.", year: 2022, rating: 9, show_type: "SERIES")
blue_shore = Show.create!(title: "Blue Shoreline", description: "The sea was like a rippling blanket of brochure-blue. Squabbling seagulls flew overhead, harassing the beachgoers in their endless hunger. Gannets were dive-bombing the stretched surface of the sea far out from shore. The horizon was edged with a silver tint and a cormorant was flying into that place where sun and water meet. His wings were a blur of motion and he soon faded from sight.", year: 2017, rating: 9.5, show_type: "SERIES")
boat = Show.create!(title: "Boat", description: "The sail stands proud, As if a window to the clouds. I watch them sail above, The clouds, And imagine sitting upon puffed bows, Watching myself sail below, On timeless seas, In seamless time, Sailing on.", year: 2017, rating: 7.5, show_type: "SERIES")
butterfly = Show.create!(title: "Butterfly", description: "With fanciful flight and their tapestry of colorful patterns and hues, butterflies bring enchantment to the garden with an ever-changing spectacle of movement and color.", year: 2017, rating: 8.5, show_type: "SERIES")
clouds = Show.create!(title: "Clouds", description: "Massive amounts of wind are both music and the dance-floor for the clouds... vagrant, white and puffy as they are - playing and teasing with other clouds and moving freely in the sky as if they own freedom itself. Yet I wondered why at times they cry with fierce and sonorous thunder...", year: 2017, rating: 7.5, show_type: "SERIES")
fish_school = Show.create!(title: "School of Fish", description: "In biology, any group of fish that stay together for social reasons are shoaling, and if the group is swimming in the same direction in a coordinated manner, they are schooling. In common usage, the terms are sometimes used rather loosely. Fish derive many benefits from shoaling behaviour including defence against predators, enhanced foraging success, and higher success in finding a mate.", year: 2017, rating: 5.5, show_type: "SERIES")
flower = Show.create!(title: "Flower", description: "Pink flowers signify passion, sentiment, and love. The colour is contemporary and hence, the flowers are very versatile. The blooms go on several occasions, from happiness to admiration, from love to gratitude and from showing thankfulness to convey departure.", year: 2017, rating: 8.5, show_type: "SERIES")
fog = Show.create!(title: "Fog", description: "The tranquil valley was swaddled in a veil of poltergeist-white mist. It can move like a quick intruder, venturing in at the front window, drifting across the house and out the back, leaving the air and surfaces cool and clammy from its damp fingerprints. Other times, the fog sits, heavy and still, infusing the entire landscape with moisture and a weighty silence. In a heavy fog the world grows so quiet around you, so motionless and almost breathless, you might come to believe you're the only living creature left on Earth.", year: 2017, rating: 5.5, show_type: "SERIES")
island = Show.create!(title: "Island", description: "The orange gold stretches far and wide above the island, the colour of fire hearths and tangerines. It is but the reflection of the dawn, the promise of the rising sun that comes after the velvety night has had its say and the land has rested once more.", year: 2017, rating: 9.5, show_type: "SERIES")
mountain = Show.create!(title: "Mountain", description: "The mountain is where time stops. The rock does not care for minutes or hours, it doesn't care for days and hardly for years. A mountain only regards the eons.", year: 2017, rating: 4.5, show_type: "SERIES")
snail = Show.create!(title: "Snail", description: "Certainly, land snails are incredibly slow. Their forward speed depends on the species, but usually, it is between 0.5 and 0.7 inches per second. Its slowness is another feature that has made it famous, and some people have known how to play with it. You will find that snails are most active at night. They may come out during the early morning hours as well.", year: 2017, rating: 8.5, show_type: "SERIES")
snowy_mountains = Show.create!(title: "Snowy Mountains", description: "At 3,899 feet, Snowy Mountain is the highest peak in the Adirondacks south of the High Peaks region and the eighth most prominent peak in New York with 2,225 ft of prominence. While the summit of Snowy Mountain is below treeline and mostly forested, there is a fire tower atop the summit that gives climbers a 360 degree view. On a clear day, one can see the Adirondack high peaks to the north, Indian Lake which lays adjacent to the east, Lake Pleasant, Sacandaga Lake, Piseco Lake, the Siamese Ponds Wilderness, and the West Canada Lake Wilderness.", year: 2017, rating: 6.5, show_type: "SERIES")
tree = Show.create!(title: "Tree", description: "The tree is the grand poem of the living world, a beauty that encourages the spirit to dance though words, to make our odes to it's branches that spread heaven-bound. And in the strong light of the new day it creates a kiss for the senses in those moving leaves, the thousand green hues and the soft whispering in the wind.", year: 2017, rating: 9, show_type: "SERIES")
water_dragon = Show.create!(title: "Water Dragon", description: "The Asian water dragon — also called the Thai, Chinese or green water dragon — is a dark to bright green lizard with high horn scales that run from its head to the base of its laterally flattened tail. The tail is banded in brown and green and ends in a fine point. The water dragon uses its tail for balance and leverage when climbing, and whips it to defend against predators.", year: 2017, rating: 9.5, show_type: "SERIES")

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