//sidebar
//open
$('.c-header__btn').on('click',function(){
    //sidebarを開く
    $('.c-sidebar__bg').addClass('open');
    //btnの削除
    $(this).addClass('open');
});

//close
$('.c-sidebar__btn').on('click',function(){
    //sidebarを閉じる
    $('.c-sidebar__bg').removeClass('open');
    //btn
    $('.c-header__btn').removeClass('open');
});
