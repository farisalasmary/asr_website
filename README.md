# English Automatic Speech Recognition (ASR) Website
An example of integrating [kaldi-ruby-api](https://github.com/farisalasmary/kaldi-ruby-api) with a website written in Ruby on Rails.

## How To Run?
To run this project, you should have Docker installed in your machine (This tutorial is based on Docker but it can be run without it as well).

We first need to clone this repository as well as [kaldi-ruby-api](https://github.com/farisalasmary/kaldi-ruby-api) repository

```bash
mkdir test_asr && cd test_asr
git clone https://github.com/farisalasmary/kaldi-ruby-api.git &&
git clone https://github.com/farisalasmary/asr_website
```

Then, we need to build docker images from Dockerfiles of both repositories

```bash
cd kaldi-ruby-api && docker build -t kaldi_eng_asr . && cd .. &&
cd asr_website && docker build -t rails_eng_asr_website . && cd ..
```

Finally, open two different terminals in the folder `test_asr` and then execute the following in the first terminal to run the API:
```bash
docker run -ti -v `pwd`/asr_website/public/uploads/:/opt/kaldi/egs/librispeech/s5/audio_upload -p 9999:9999 --name kaldi_ruby_api kaldi_eng_asr:latest
```

and execute this in the second terminal:
```bash
docker run -ti -v `pwd`/asr_website/public/uploads/:/app/public/uploads/ -p 3000:3000 --name asr_website rails_eng_asr_website:latest
```

Use the link: `http://localhost:3000/` to open and test the ASR website.


**NOTE**
You may need to change the IP address of the speech recognition API inside the `asr_website` code BEFORE building the image as follows:
 1. Build the API image ONLY:
 ```bash
cd kaldi-ruby-api && docker build -t kaldi_eng_asr .
```
2. Create a container:
```bash
docker run -ti -v `pwd`/asr_website/public/uploads/:/opt/kaldi/egs/librispeech/s5/audio_upload -p 9999:9999 --name kaldi_ruby_api kaldi_eng_asr:latest
```
3. Find the IP address of the created API container using `docker inspect` command:
```bash
docker inspect kaldi_ruby_api | grep IPAddress
```

the output will look like this:
```bash
            "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.2",
                    "IPAddress": "172.17.0.2",
```

4. Edit the variable `speech_engine_url` in the the file `file_uploader_controller.rb` to have the same IP that we found above:
```bash
cd asr_website/app/controllers/
nano file_uploader_controller.rb
```

The variable after updating with the new IP should look similar to this:
```ruby
speech_engine_url = 'http://172.17.0.2:9999/api/file_path/' + @filename.to_s
```

5. Finally, build the image and run a container:
```bash
cd ../../../asr_website && docker build -t rails_eng_asr_website . && cd ..
docker run -ti -v `pwd`/asr_website/public/uploads/:/app/public/uploads/ -p 3000:3000 --name asr_website rails_eng_asr_website:latest
```


