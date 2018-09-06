socket.on("start", () => {
    $("#waitingModal").hide();
});

var language = "c_cpp";
var select = document.querySelector("select");

$("select").change(function(){
    language = select.value;
    editor.session.setMode("ace/mode/" + language);
});
