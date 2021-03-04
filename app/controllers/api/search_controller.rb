class Api::SearchController < ApplicationController

  def index
      input = search_params[:input]
      if input.empty?
          render json: {}
          return
      end
      @shows = Show.joins(:genres)
          .where("shows.title ILIKE :title", title: "%#{input}%")
                .references(:genres)
                .includes(:genres)
                .distinct
      render :index
  end

  private
  def search_params
      params.require(:search).permit(:input)
  end
end