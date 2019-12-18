$(document).ready(function () {
    console.log("ready!");
    // cho giá trị default cho start và end time
    var start = moment().subtract(29, 'days');
    var end = moment();

    // Check nếu có tham số start hoặc end end trong url thì lấy giá trị từ tham số
    var currentStartTime = getParameterFormUrl('start');
    var currentEndTime = getParameterFormUrl('end');

    if (currentStartTime != null) {
        // gán  biến và start
        start = new Date(currentStartTime);

    }
    if (currentEndTime != null) {
        // gán  biến và end
        end = new Date(currentEndTime);

    }
    $('input[name="dateRange"]').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });
    $('input[name="dateRange"]').on('apply.daterangepicker', function (ev, picker) {
        window.location.href = `/DateRangePicker/Index?start=${picker.startDate.format('MM/DD/YYYY')}&end=${picker.startDate.format('MM/DD/YYYY')}`
    });
    function getParameterFormUrl (parameter) {
        var url_string = window.location.href;
        var url = new URL(url_string);
        return url.searchParams.get(parameter);
    }
});