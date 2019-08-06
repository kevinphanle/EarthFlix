class Api::ShowsController < ApplicationController

    def index
        @shows = Show.with_attached_poster_file.all.includes(:videos)
        @videos = Video.with_attached_video_file.all 

        render :index
    end

    def show
        @show = Show.find(params[:id])
        @video = @show.videos.first

        render :show
    end
end
