class Api::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])

        render :show
    end

    def index
        @videos = Video.with_attached_video_file.all
        render :index
    end
end
