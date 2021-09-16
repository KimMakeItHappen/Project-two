$("#search-button").click(function() {
    console.log("search button clicked")
    // get the information from the search boxes and put into variables
    $.ajax({
        method: "GET",
        // url: "/jobs/",
        // data: { information from the search boxes }
    })
})