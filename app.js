$(function(){
    $("#hello").click(function(){
        $("#name").addClass("display-1");
        console.log("Hello, jQuery");
        $("#photo").attr("src","image/sea.jpg");
    });

    $("#getDOM").click(function(){
        var name = $("#name").html();
        console.log(name);
        
    });

    $("#setDOM").click(function(){
        $("#name").html("New Name");
        
    });

    $("#addhobby").click(function(){
        var hobby = $("#newhobby").val();
        $("#hobby").append("<li>"+hobby+"</li>");
        $("#newhobby").val(" ");
        
    });

    $("#clearhobby").click(function(){
        $("#hobby").remove();
        
    });
});

// function hello(){
//     console.log("hello world");
// }

// function getDOM(){
//     var name = document.getElementById("name").innerHTML;
//     console.log(name);
// }

// function setDOM(){
//     var name = document.getElementById("name").innerHTML = "Boy";
//     console.log(name);
// }

// function addhobby(){
//     var hobby = document.getElementById("newhobby").value;
//     console.log(hobby);
//     document.getElementById("hobby").innerHTML += "<li>"+hobby+"</li>";
// }

// function clearhobby(){
//     var clear = document.getElementById("hobby").innerHTML = " ";
//     console.log(clear);
// }