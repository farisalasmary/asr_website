document.addEventListener('DOMContentLoaded', function() {

    audio_controller = document.getElementById('audio_controller');
    audio_controller.ontimeupdate = function() {highlight_word()};

//    function setCurTime(index) { 
//      audio_controller.currentTime = segments_starts[index];
//    } 
//    for(i = 0; i < words.length; i++){
//        document.getElementById("word_" + i).addEventListener("click", setCurTime, false);
//    }
    function highlight_word(){
        currentTime = audio_controller.currentTime;

        for(i = 0; i < segments_starts.length; i++){
            if(segments_starts[i] <= currentTime && segments_ends[i] >= currentTime){
                if(is_editable == 'false')
                    document.getElementById('word_'+ i).setAttribute("style", "background-color:gray; color:black");
            }else{
                document.getElementById('word_'+ i).setAttribute("style", "color:black");
            }
        }
    }
}, false);