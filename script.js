$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(value, time);

        $('.notification').addClass('show');
        setTimeout(function() {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function updateHour() {
        var currentHour = moment().hours();
        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            if(blockHour < currentHour){
                $(this).addClass('past');
            } else if(blockHour === currentHour){
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    }   

    updateHour();

    var interval = setInterval(updateHour, 15000);

    $('9hour .description').val(localStorage.getItem('9hour'));
    $('10hour .description').val(localStorage.getItem('10hour'));
    $('11hour .description').val(localStorage.getItem('11hour'));
    $('12hour .description').val(localStorage.getItem('12hour'));
    $('13hour .description').val(localStorage.getItem('13hour'));
    $('14hour .description').val(localStorage.getItem('14hour'));
    $('15hour .description').val(localStorage.getItem('15hour'));
    $('16hour .description').val(localStorage.getItem('16hour'));
    $('17hour .description').val(localStorage.getItem('17hour'));

    $('#currentDay').text(moment().format('dddd MMMM Do'));
});