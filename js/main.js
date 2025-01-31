//sidebar
//open
$('.c-header__btn').on('click',function(){
    //sidebarを開く
    $('.p-sidebar__bg').addClass('open');
    $('.c-sidebar').addClass('open');
    $('.l-sidebar').addClass('open');
    //btnの削除
    $(this).addClass('open');
});

//close
$('.c-sidebar__btn').on('click',function(){
    //sidebarを閉じる
    $('.p-sidebar__bg').removeClass('open');
    $('.c-sidebar').removeClass('open');
    //btn
    $('.c-header__btn').removeClass('open');
});

setTimeout(function(){
    $('.l-sidebar').removeClass('open');
});