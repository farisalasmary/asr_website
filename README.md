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

Finally, open two different terminals in the folder `test_asr` and then execute the following in the first terminal to run the API
```bash
docker run -ti  -v `pwd`/asr_website/public/uploads/:/opt/kaldi/egs/librispeech/s5/audio_upload -p 9999:9999 --name kaldi_ruby_api kaldi_eng_asr:latest
```

and execute this in the second terminal
```bash
docker run -ti -v `pwd`/asr_website/public/uploads/:/app/public/uploads/ -p 3000:3000 --name asr_website rails_eng_asr_website:latest
```

Use the link: `http://localhost:3000/` to open and test the ASR website
