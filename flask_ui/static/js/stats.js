function fetch_fah_stats() {
    $.ajax({
        url: 'https://stats.foldingathome.org/api/donor/George_Ashmore',
        dataType: 'json',
        success: function (data) {
            debugger;
        }
    })
}