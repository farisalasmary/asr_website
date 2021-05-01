
require_relative 'speech_engine'

class FileUploaderController < ApplicationController
    
    def download
        filename = params[:id]
        fileformat = params[:format]
        
        @filename_in_server = "#{filename}.#{fileformat}"
        @filename_for_the_user = "#{filename}.#{fileformat}"
        
        @file_path = "#{Rails.root}/public/uploads/#{@filename_in_server}"
        
        # this header information is a MUST to solve the problem of wrong duration in the audio tag
        # in HTML
        response.headers['Content-Length'] = File.size(@file_path)
        
        send_file(
                    "#{@file_path}",
                    filename: "#{@filename_for_the_user}"
                  )

    end
    
    def upload
        uploaded_io = params[:file]
        if not uploaded_io.nil?
            @filename =  uploaded_io.original_filename
            file_path = Rails.root.join('public', 'uploads', @filename)
            File.open(file_path, 'wb') do |file|
                file.write(uploaded_io.read)
                respond_to do |format|
                    begin
                        speech_engine_url = 'http://172.17.0.4:9999/api/file_path/' + @filename.to_s
                        @res_json = SpeechEngine.new.send_to_engine(speech_engine_url)
                        @words = []
                        @segments_starts = []
                        @segments_ends = []

                        if @res_json['status_code'] == 200
                            @segments = @res_json['segments']
                            @audio_file = @res_json['audio_file']
                            @segments.each do |segment|
                                @words.push segment['word']
                                @segments_starts.push segment['start']
                                @segments_ends.push segment['end']
                            end
                            @video_file = nil
                            if @res_json.key?("video_file")
                                @video_file = @res_json['video_file']
                            end
                            format.html { render 'transcription', words: @words, segments_starts: @segments_starts, segments_ends: @segments_ends, filename: @filename, audio_file: @audio_file,
                                video_file: @video_file}
                        else
                            @error = @res_json['message']
                            format.html { render 'index', error: @error}
                        end
                    rescue => e
                        puts "An error of type #{e.class} happened, message is #{e.message}"
                        @error = "Couldn't connect to the engine!"
                        format.html { render 'index', error: @error}
                    end
                end
            end
        else
            respond_to do |format|
                @error = "No file was selected!"
                format.html { render 'index', error: @error}
            end 
        end
    end
end
