$(document).ready(function() {
    let m = moment();
    console.log(moment())
    // listen for the save button
    // create local storage
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(time, description);
    })

    // find a way to update the hours
    // create a for loop for hour blocks
    function hourUpdate() {
        var currentHour = moment().hours();

        $(".time-block").each(function() {
            
        })
    }
    // find a way to display current day
    $("#current-day").text(moment().format("ddd, MMMM Do, YYYY"));
    // load saved data from local stroage
}) 