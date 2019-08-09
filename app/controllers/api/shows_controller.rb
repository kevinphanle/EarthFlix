class Api::ShowsController < ApplicationController

    def index
        @shows = Show.all.with_attached_video_file.with_attached_poster_file
        render :index
    end

    def show
        @show = Show.find_by(id: params[:id])

        render :show
    end
end
