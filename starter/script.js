// current date
var currentDay = moment().format('dddd, MMMM Do')

$("#currentDay").append(currentDay);

// savebutton
document.getElementById("lock").addEventListener("click", myfunction);

function myfunction() {
    
}

// localStorage.setItem('myCat', 'Tom');
$("#form-control").click(function(){localStorage.setItem(InputEvent);
})

// var input = document.getElementById("saveServer");
// localStorage.setItem("server", input.val());

//localstorage 
$("#form-control").text(localStorage.getItem("9"));


$("#lock").on("click", () => {
})


$(document).ready(function () {
    $(".btn").on("click", function () {
        var txtVal = $(this).siblings(".form-control").val();
        var txtKey = $(this).siblings(".input-group-prepend").children().text()
        console.log(txtKey)

        localStorage.setItem(txtKey, txtVal)
    })

    
    $(".input-group").each(function() { 
        var txtKey = $(this).children(".input-group-prepend").children().text();
        var x = $(this).children(".form-control").val(localStorage.getItem(txtKey));
        
        
        var blockTime = parseInt($(this).children(".input-group-prepend").children().text().split("").slice(0,1).join(''));
        console.log("YY", blockTime);

        var y = moment().hour();
        console.log(y)

        if(y > blockTime) {
            $(this).children(".form-control").addClass('future')
        }

    })
    
})

