# Categories Seed id: 1 -8
categories = ['Restaurant', 'Bar', 'Hotel', 'Landmark', 'Museum', 'Store', 'Park', 'Entertainment']

categories.each do |c|
    Category.create(category_name: c)
end

puts "#{Category.count} categories created."

# Places Seed id: 1-25

london_places = [
    ["London Eye", 4, "https://cdn.pixabay.com/photo/2017/11/04/02/41/london-2916322_1280.jpg"],
    ["Tate Modern", 5, "https://cdn.pixabay.com/photo/2017/08/26/20/05/tate-2684212_1280.jpg"],
    ["Duck & Waffle", 1, "https://cdn.pixabay.com/photo/2016/01/15/13/06/gherkin-1141632_1280.jpg"], 
    ["The Porterhouse", 2, "https://cdn.pixabay.com/photo/2017/04/19/20/16/pub-2243488_1280.jpg"], 
    ["Buckingham Palace", 4, "https://cdn.pixabay.com/photo/2016/02/19/23/12/london-1211303_1280.jpg"]
]
ny_places = [
    ["Hamilton on Broadway", 8, "https://cdn.pixabay.com/photo/2015/07/31/11/45/city-869064_1280.jpg"],
    ["Central Park", 7, "https://cdn.pixabay.com/photo/2016/11/07/00/47/central-park-1804588_1280.jpg"],
    ["High Line", 7, "https://cdn.pixabay.com/photo/2018/12/24/03/15/high-line-3892179_1280.jpg"], 
    ["Macy's Herald Square", 6, "https://cdn.pixabay.com/photo/2015/04/13/03/57/store-719946_1280.jpg"], 
    ["Metropolitan Museum of Art", 5, "https://cdn.pixabay.com/photo/2017/04/27/00/04/the-met-2264072_1280.jpg"]
]
dublin_places = [
    ["Trinity College", 4, "https://cdn.pixabay.com/photo/2014/07/30/23/00/trinity-college-405783_1280.jpg"],
    ["Phoenix Park", 7, "https://cdn.pixabay.com/photo/2018/01/26/10/41/duck-3108353_1280.jpg"],
    ["Guiness Storehouse", 4, "https://cdn.pixabay.com/photo/2017/04/29/20/57/pub-2271549_1280.jpg"], 
    ["Dublin Castle", 4, "https://cdn.pixabay.com/photo/2015/11/18/16/14/dublin-1049427_1280.jpg"], 
    ["Temple Bar", 2, "https://cdn.pixabay.com/photo/2017/05/25/21/23/temple-bar-2344400_1280.jpg"]
]
porto_places = [
    ["Douro Valley", 4, "https://cdn.pixabay.com/photo/2020/01/15/18/42/douro-4768654_1280.jpg"],
    ["Sao Bento Train Station", 4, "https://cdn.pixabay.com/photo/2017/09/11/19/32/porto-2740174_1280.jpg"],
    ["Livraria Lello", 4, "https://cdn.pixabay.com/photo/2018/07/23/18/44/the-livraria-lello-3557551_1280.jpg"], 
    ["Ribeira", 4, "https://cdn.pixabay.com/photo/2018/10/20/01/33/porto-3760094_1280.jpg"], 
    ["Sandeman Cellars", 2, "https://cdn.pixabay.com/photo/2019/08/30/11/33/porto-4441039_1280.jpg"]
]
galway_places = [
    ["Aniar", 1, "https://aniarrestaurant.files.wordpress.com/2011/07/aniar-1-of-10.jpg"],
    ["O'Connells", 2, "http://oconnellsbargalway.com/wp-content/plugins/widgetkit/cache/gallery/765/000%20O%20Connells%20back%20garden-8_preview-434939f924.jpeg"],
    ["The Galmont", 3, "https://www.thegalmont.com/files/hotel/hotel-b/Galmont_August_2018_onwards/Exterior/Front_Entrance_3000px_1.jpg"], 
    ["Kylemore Abbey", 4, "https://cdn.pixabay.com/photo/2017/07/29/18/29/abbey-2552326_1280.jpg"], 
    ["Long Walk, Claddagh", 4, "https://cdn.pixabay.com/photo/2019/10/24/19/50/boats-4575124_1280.jpg"]
]
toronto_places = [
    ["CN Tower", 4, "https://cdn.pixabay.com/photo/2013/01/04/11/32/toronto-73508_1280.jpg"],
    ["Casa Loma", 4, "https://cdn.pixabay.com/photo/2014/10/24/20/04/toronto-501729_1280.jpg"],
    ["Royal Ontario Museum", 5, "https://cdn.pixabay.com/photo/2018/11/01/17/43/art-gallery-of-ontario-3788681_1280.jpg"]
]

rome_places = [
    ["Trevi Fountain", 4, "https://cdn.pixabay.com/photo/2014/03/26/05/46/trevi-fountain-298411_1280.jpg"],
    ["The Vatican", 4, "https://cdn.pixabay.com/photo/2017/12/15/19/13/rome-3021586_1280.jpg"],
    ["Spanish Steps", 4, "https://cdn.pixabay.com/photo/2017/02/24/01/09/rome-2093606_1280.jpg"],
    ["Colosseum", 4, "https://cdn.pixabay.com/photo/2015/03/26/09/49/colosseum-690384_1280.jpg"]
]

kyoto_places = [
    ["Kinkaku-ji Temple", 4, "https://cdn.pixabay.com/photo/2019/02/02/07/00/kinkaku-ji-3970247_1280.jpg"],
    ["Fushimi Inari Taisha", 4, "https://cdn.pixabay.com/photo/2019/08/08/06/06/fushimi-inari-4392017_1280.jpg"],
    ["Arashiyama Bamboo Forest", 4, "https://cdn.pixabay.com/photo/2017/08/11/16/48/arashiyama-2632036_1280.jpg"],
    ["Nishiki Market", 6, "https://cdn.pixabay.com/photo/2017/02/21/16/45/japanese-lantern-2086582_1280.jpg"]
]

bali_places = [
    ["Uluwatu Temple", 4, "https://cdn.pixabay.com/photo/2017/08/14/05/47/uluwatu-temple-2639458_1280.jpg"],
    ["Seminyak", 7, "https://cdn.pixabay.com/photo/2017/11/24/21/49/bali-2975787_1280.jpg"],
    ["Tegallalang Rice Terrace", 4, "https://cdn.pixabay.com/photo/2016/07/13/10/56/rice-1514141_1280.jpg"],
    ["Goa Gajah", 4, "https://cdn.pixabay.com/photo/2017/02/21/16/45/japanese-lantern-2086582_1280.jpg"]
]


toronto_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "Toronto",
        country: Faker::Address.country_by_code(code: "CA"),
        country_iso2: "CA"
    )
end

kyoto_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "Kyoto",
        country: Faker::Address.country_by_code(code: "JP"),
        country_iso2: "JP"
    )
end

london_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "London",
        country: Faker::Address.country_by_code(code: "GB"),
        country_iso2: "GB"
    )
end

bali_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "Bali",
        country: Faker::Address.country_by_code(code: "ID"),
        country_iso2: "ID"
    )
end

ny_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "New York",
        state: "NY",
        country: Faker::Address.country_by_code(code: "US"),
        country_iso2: "US"
    )
end

dublin_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "Dublin",
        country: Faker::Address.country_by_code(code: "IE"),
        country_iso2: "IE"
    )
end

porto_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "Porto",
        country: Faker::Address.country_by_code(code: "PT"),
        country_iso2: "PT"
    )
end

rome_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "Rome",
        country: Faker::Address.country_by_code(code: "IT"),
        country_iso2: "IT"
    )
end

galway_places.each do |place|
    Place.create(
        name: place[0],
        category_id: place[1], 
        description: Faker::Lorem.paragraph(sentence_count: 8), 
        address: Faker::Address.street_address, 
        img_url: place[2],
        city: "Galway",
        country: Faker::Address.country_by_code(code: "IE"),
        country_iso2: "IE"
    )
end

puts "#{Place.count} places created"

# Users Seed

User.create!(first_name: 'Steve', username: 'steve', email: 'steve@email.com', password: 'passwordsteve')
User.create!(first_name: 'Michael', username: 'michael', email: 'michael@email.com', password: 'passwordmichael')
User.create!(first_name: 'Jessica', username: 'jessica', email: 'jessica@email.com', password: 'passwordjessica')
User.create!(first_name: 'Brian', username: 'brianodriscoll', email: 'brian@email.com', password: 'passwordbrian')
User.create!(first_name: 'Catherine', username: 'catherine', email: 'catherine@email.com', password: 'passwordcat')

puts "#{User.count} users created"

# Entries seed

5.times do 
    Entry.create!(
        user_id: 1, 
        place_id: Faker::Number.within(range: 1..35), 
        visit_date: Faker::Date.in_date_period(year: 2019), 
        rating: Faker::Number.within(range: 1..5), 
        comments: Faker::Lorem.paragraph(sentence_count: 5), 
        private: Faker::Boolean.boolean,
        img_url: Faker::Placeholdit.image(size: '600x400', format: 'jpeg', background_color: :random)
    )
end

5.times do 
    Entry.create!(
        user_id: 2, 
        place_id: Faker::Number.within(range: 1..30), 
        visit_date: Faker::Date.in_date_period(year: 2019), 
        rating: Faker::Number.within(range: 1..5), 
        comments: Faker::Lorem.paragraph(sentence_count: 5), 
        private: Faker::Boolean.boolean,
        img_url: Faker::Placeholdit.image(size: '600x400', format: 'jpeg', background_color: :random)
    )
end

5.times do 
    Entry.create!(
        user_id: 3, 
        place_id: Faker::Number.within(range: 1..30), 
        visit_date: Faker::Date.in_date_period(year: 2019), 
        rating: Faker::Number.within(range: 1..5), 
        comments: Faker::Lorem.paragraph(sentence_count: 5), 
        private: Faker::Boolean.boolean,
        img_url: Faker::Placeholdit.image(size: '600x400', format: 'jpeg', background_color: :random)
    )
end

5.times do 
    Entry.create!(
        user_id: 4, 
        place_id: Faker::Number.within(range: 20..35), 
        visit_date: Faker::Date.in_date_period(year: 2019), 
        rating: Faker::Number.within(range: 1..5), 
        comments: Faker::Lorem.paragraph(sentence_count: 5), 
        private: Faker::Boolean.boolean,
        img_url: Faker::Placeholdit.image(size: '600x400', format: 'jpeg', background_color: :random)
    )
end

5.times do 
    Entry.create!(
        user_id: 5, 
        place_id: Faker::Number.within(range: 20..35), 
        visit_date: Faker::Date.in_date_period(year: 2019), 
        rating: Faker::Number.within(range: 1..5), 
        comments: Faker::Lorem.paragraph(sentence_count: 5), 
        private: Faker::Boolean.boolean,
        img_url: Faker::Placeholdit.image(size: '600x400', format: 'jpeg', background_color: :random)
    )
end

puts "#{Entry.count} entries created"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)