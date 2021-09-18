
$("#search-button").click(function() {
    console.log("search button clicked")
    // get the information from the search boxes and put into variables
    $.ajax({
        method: "GET",
        // url: "/jobs/",
        url: 'https://api.adzuna.com/v1/api/jobs'
        // data: { information from the search boxes }
        data: ({results});
    })
})

$("#login-button").click(function() {
    console.log("login button clicked")
    // get the information from the search boxes and put into variables
    $.ajax({
        method: "GET",
        // url: "/jobs/",
        // data: { information from the search boxes }
    })
})