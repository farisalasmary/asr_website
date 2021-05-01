require 'net/http'
require 'json'

class SpeechEngine
    def send_to_engine(speech_engine_url)
        url = URI.parse(speech_engine_url)
        req = Net::HTTP::Get.new(url.to_s)
        res = Net::HTTP.start(url.host, url.port, :read_timeout => 300) {|http|
            http.request(req)
        }
        res_json = JSON.parse res.body
        return res_json
    end
end