let correctKeys = 0
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];  
let currentSentence = 0
let highlighterPosition = 0
let mistakes = 0
    
$(document).ready(function () {
    
    
    
    $("#keyboard-upper-container").hide()
    $('#sentence').append(sentences[currentSentence])
    
    $(document).keydown(function (e) {
        if (e.which == 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }
        
       
       if(e.key == sentences[currentSentence][correctKeys]){
           correctKeys++
           console.log(correctKeys)
            highlighterPosition = highlighterPosition + 17.5
             $("#yellow-block").css("margin-left", `${highlighterPosition}px`);
                $("#feedback").append("<span class = 'glyphicon glyphicon-ok'></span>"); 
                
            } else {
                $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>"); 
                mistakes++ 
            }
        })
        })
        
        $(document).keyup(function (e) {
            let asciiCode = e.key.charCodeAt(0)    
            
            if (e.which == 16) {
                $("#keyboard-lower-container").show();
                $("#keyboard-upper-container").hide();
            }
            
            $(`#${asciiCode}`).css("background-color", "#f5f5f5");
            $(`#${e.keyCode}`).css("background-color", "#f5f5f5");
            
            if(correctKeys == sentences[currentSentence].length) {
                $("#feedback").empty()
                highlighterPosition = 0
                currentSentence++
                correctKeys = 0
                $('#sentence').empty()
                $('#sentence').append(sentences[currentSentence])
            }
            
            if(correctKeys == sentences[currentSentence].length - 1){
                highlighterPosition = 0
            }
        })
        
        $(document).keypress(function (e) {
            let asciiCode = e.key.charCodeAt(0)  
            
    $(`#${e.keyCode}`).css("background-color", "yellow");
    $(`#${asciiCode}`).css("background-color", "yellow");
 })
