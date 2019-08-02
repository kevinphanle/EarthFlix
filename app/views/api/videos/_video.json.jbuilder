json.extract! video, :id, :name, :description, :duration
json.videoUrl url_for(video.video_url)