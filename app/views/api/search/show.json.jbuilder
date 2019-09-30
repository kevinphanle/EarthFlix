@shows.each do |show|
  json.set! show.id do
      json.partial! "api/show/pshow", show: show
  end
end