require 'rspec'
#require_relative 'speech_engine'
$LOAD_PATH << '../app/controllers/'
require 'speech_engine'

RSpec.describe SpeechEngine do    
    describe 'send_to_engine' do
        before do
            @correct_speech_engine_url = "http://172.17.0.2:9999/api/file_path/"
            @wrong_speech_engine_url = "http://172.17.0.3:9999/api/file_path/"
        end
        
        it 'should show exception if wrong speech engine url is provided' do
            expect {
                already_existing_file = 'kaldi_english_test_CUT_TESTING.wav'
                request_full_url = @wrong_speech_engine_url + already_existing_file
                res_json = SpeechEngine.new.send_to_engine(request_full_url)
            }.to raise_error(Errno::ECONNREFUSED)
        end
        
        it 'should return the value 404 in the status_code field in the JSON response from the engine if the file is NOT found' do
            does_not_exist_file = 'asfsdvhxgavsjs.wav'
            request_full_url = @correct_speech_engine_url + does_not_exist_file
            res_json = SpeechEngine.new.send_to_engine(request_full_url)
            
            expected_message = "file not found!"
            
            expect(res_json['status_code']).to eql(404)
            expect(res_json['message']).to eql(expected_message)
        
        end
        
        it 'should return the value 200 in the status_code field in the JSON response from the engine and have the exact text of the audio file' do
            already_existing_file = 'kaldi_english_test_CUT_TESTING.wav'
            request_full_url = @correct_speech_engine_url + already_existing_file
            res_json = SpeechEngine.new.send_to_engine(request_full_url)
            
            expected_text = "there's no reporting the wash and imposed the headline whitehouse was worn giuliano was target of russian and told"
            
            expect(res_json['status_code']).to eql(200)
            expect(res_json['data']).to eql(expected_text)
            
        end
        
        it 'should return the value 200 in the status_code field in the JSON response from the engine and DOES NOT have the expected text' do
            already_existing_file = 'kaldi_english_test_CUT.wav'
            request_full_url = @correct_speech_engine_url + already_existing_file
            res_json = SpeechEngine.new.send_to_engine(request_full_url)
            
            expected_text = "there's no reporting the wash and imposed the headline whitehouse was worn giuliano was target of russian and told"
            
            expect(res_json['status_code']).to eql(200)
            expect(res_json['data']).not_to eql(expected_text)
            
        end
        
        it 'should return the value 400 in the status_code field and error message that show it does not support MP3 format' do
            already_existing_file = 'SVD_Eigenfaces.mp3'
            request_full_url = @correct_speech_engine_url + already_existing_file
            res_json = SpeechEngine.new.send_to_engine(request_full_url)
            
            expected_message = 'The files of type "mp3" are not supported!'
            
            expect(res_json['status_code']).to eql(400)
            expect(res_json['message']).to eql(expected_message)
        end
    end
end
