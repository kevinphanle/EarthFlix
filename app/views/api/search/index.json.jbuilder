@shows.each do |show|
  json.set! show.id do
      json.partial! 'api/shows/pshow', show: show
  end
end