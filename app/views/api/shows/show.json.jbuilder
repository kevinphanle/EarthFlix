json.shows do
    json.set! @show.id do
        json.extract! @show, :id, :title, :year, :rating, :description
        json.posterUrl url_for(@show.poster_file)
        json.videoUrl url_for(@show.video_file)

    end
end

json.genres do
    @show.genres.each do |genre|
        json.set! genre.id do
            json.extract! genre, :id, :name
            json.show_ids [@show.id]
        end
    end
end