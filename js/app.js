$(window).on('load',function(){
    if(localStorage.getItem('cookieSeen') != 'shown'){
        var delayMs = 1000; // delay in milliseconds
        setTimeout(function(){
            $('#cookies').modal('show');
        }, delayMs);
        localStorage.setItem('cookieSeen','shown')
    }
});