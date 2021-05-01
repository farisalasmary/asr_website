document.addEventListener("DOMContentLoaded", function() {
    
    function _download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    function download_txt() {
        var spans = document.getElementById('transcription_text').getElementsByTagName('span');
        var obj = {};
        var text = '';
        for(var i = 0; i < spans.length; i++){
            text += (spans[i].textContent || spans[i].innerText) + ' ';
        }

        _download(filename.split('.')[0] + '.txt', text)
    }
    
    function format_time(SECONDS){
        return (new Date(SECONDS * 1000).toISOString().substr(11, 12)).replace('.',',')
    }
    
    function download_srt() {
        var spans = document.getElementById('transcription_text').getElementsByTagName('span');
        var obj = {};
        var text = '';
        
        var num_words_per_sentence = 7;
        var words = '';
        var i;
        var counter = 1;
        for(i = 0; i < spans.length; i += num_words_per_sentence){
            words = '';
            
            // add 500 milliseconds to the start time of each segment except the first segment
            // to prevent showing overlaps in the subtitling
            if(i != 0)
                start_time = format_time(segments_starts[i] + 0.5); 
            else
                start_time = format_time(segments_starts[i]);
            
            end_time = start_time; // dummy initialization
            if((i + num_words_per_sentence) < segments_ends.length){
                end_time = format_time(segments_ends[i + num_words_per_sentence]);
                for (var j = i; j < (i + num_words_per_sentence); j++)
                    words += (spans[j].textContent || spans[j].innerText) + ' ';
            
            }else{
                // if the if condition is false, then read the remaining words
                // and set the end_time to be the segment_end of the last word
                end_time = format_time(segments_ends[segments_ends.length - 1]);
                for (var j = i; j < segments_ends.length; j++)
                    words += (spans[j].textContent || spans[j].innerText) + ' ';
            }
            text += counter + '\n' + 
                     start_time + ' --> ' + end_time + '\n' +
                     words + '\n\n';
            counter += 1;
        
        }
        
        _download(filename.split('.')[0] + '.srt', text);
    }
    
    function edit_text(){
        is_editable = ((is_editable == 'true')? 'false' : 'true');
        if(is_editable == 'true')
            document.getElementById('edit_txt_btn').innerHTML = 'Save Changes';
        else
            document.getElementById('edit_txt_btn').innerHTML = 'Edit Text';
        
        var spans = document.getElementById('transcription_text').getElementsByTagName('span');
        for(var i = 0; i < spans.length; i++){
            spans[i].setAttribute("contenteditable", is_editable); 
        }
    }
    
    document.getElementById("download_txt_btn").addEventListener("click", download_txt);
    document.getElementById("download_srt_btn").addEventListener("click", download_srt);
    document.getElementById("edit_txt_btn").addEventListener("click", edit_text);

});

