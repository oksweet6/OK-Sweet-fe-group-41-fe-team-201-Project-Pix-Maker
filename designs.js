// Select color input
// Select size input
    var height, width, color;

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    makeGrid(height, width);
});

function makeGrid(n, o) {
    $("tr").remove();

    for(var i = 1; i <= n; i++ ) {
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for(var x = 1; x <=o; x++) {
            $("#table"+ i).append("<td></td>");
        }
    }

     $("td").click(function addColor() {
        color = $("#colorPicker").val();

        if ($(this).attr("style")) {
            $(this).removeAttr("style")
        } else {
            $(this).attr("style", "background-color:" + color);
        }
    });
} 
function myFunction() {
alert("Thank very much Udacity\n I appreciate the effort in making me a front end web developer\n love you!");
alert("OK-Sweet(fe-group-41),(fe-team-201) designed this site")
return $("tr").remove();
}
// Your code goes here!
