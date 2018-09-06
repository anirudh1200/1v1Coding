socket.on("start", () => {
    $("#waitingModal").hide();
});

var language = "c_cpp";
var select = document.querySelector("select");

$("select").change(function(){
    language = select.value;
    editor.session.setMode("ace/mode/" + language);
});

var compilerMessage = document.querySelector("#compilerMessage");
var compileURL = "http://api.hackerearth.com/code/compile/";
var compileBtn = document.querySelector("#compileBtn");
var clientID = "dc91e9b2f98a6d63fea90bac6c3fa2150e5622960183.api.hackerearth.com";
var secretKey = "f00ebd4cdc942aa27b5a5dd8d4fd86bc586b5283";
var code = editor.getValue();
compileBtn.addEventListener("click", function(){
    var text = editor.getValue();
    $.ajax({
        method: "POST",
        url: compileURL,
        data : {
            'client_secret': secretKey,
            'async': 0,
            'source': text,
            'lang': "C",
            'time_limit': 5,
            'memory_limit': 262144,
        }
    }).done(function(result){
        console.log(result);
        compilerMessage.innerHTML = result.compile_status;
        
    });
});
