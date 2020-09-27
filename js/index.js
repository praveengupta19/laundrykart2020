function menu(){
    $(".line-nav").toggle();
}

$(document).ready(function(){
    $('body').scrollspy({ target: '#navbar' })

    $('#sm-navbar a').click(function(){ $(".line-nav").toggle(); })
});