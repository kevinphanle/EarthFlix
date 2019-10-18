json.profile do
  json.partial! "api/profiles/profile", profile: @profile
end

json.myLists do
  @profile.my_lists.each do |myList|
      json.set! myList.id do
          json.extract! myList, :id, :profile_id, :show_id
      end
  end
end

json.listed_shows do
  @profile.listed_shows.each do |show|
      json.set! show.id do
          json.partial! "api/shows/pshow", show: show
      end
  end
end