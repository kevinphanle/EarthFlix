class Api::SearchController < ApplicationController

  def index
      input = search_params[:input]
      if input.empty?
          render json: {}
          return
      end
      @shows = Show.includes(:genres)
          .where("title ILIKE (?)" , "%#{input}%").references(:genres)
          .distinct
      render :index
  end

  private
  def search_params
      params.require(:search).permit(:input)
  end
end