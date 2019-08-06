json.extract! video, :id, :show_id, :name, :description, :duration
json.videoUrl url_for(video.video_file)