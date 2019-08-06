@shows.each do |show|
    json.set! show.id do 
        json.partial! 'api/shows/show', show: show
    end
end

