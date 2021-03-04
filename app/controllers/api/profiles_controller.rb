class Api::ProfilesController < ApplicationController
  before_action :require_logged_in!

  def create
      @profile = Profile.new(profile_params)
      @profile.user_id = current_user.id
      profile_photo = open(params[:thumbnail])
      @profile.thumbnail.attach(io:profile_photo, filename: 'profile-photo.png')
      if @profile.save
          set_current_profile(@profile)
          render :show
      else
          render json: @profile.errors.full_messages, status: 400
      end
  end

  def index
      @profiles = Profile.all
      render :index
  end

  def show
      @profile = Profile.includes(:my_lists).includes(:listed_shows).find(params[:id])
      if profile_params[:set]
          set_current_profile(@profile)
      elsif profile_params[:unset]
          unset_current_profile(@profile)
      end
      render :show
  end

  def update
      @profile = Profile.find(params[:id])
      @profile.user_id = current_user.id
      if @profile.update_attributes(profile_params)
          render :show
      else
          render json: @profile.errors.full_messages, status: 400
      end
  end

  def destroy
      @profile = Profile.find(params[:id])
      if @profile.destroy
          render :show
      else
          render json: @profile.errors.full_messages, status: 422
      end
  end

  private

  def profile_params
      params.require(:profile).permit(:name, :user_id, :set, :unset, :thumbnail)
  end
end
