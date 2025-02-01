//sidebar
//open
$('.c-header__btn').on('click',function(){
    //sidebarを開く
    $('.c-sidebar').addClass('open');
    //背景フェードイン
    $('.p-sidebar__bg').addClass('open');
    $('.l-sidebar').addClass('open');
    //btnの削除
    $(this).addClass('open');
});

//close
$('.c-sidebar__btn').on('click',function(){
    //sidebarを閉じる
    $('.c-sidebar').removeClass('open');
    //背景フェードアウト
    $('.p-sidebar__bg').removeClass('open');
    function fadeout(){
        $('.l-sidebar').removeClass('open');
    };
    setTimeout(fadeout,600);

    //btn
    $('.c-header__btn').removeClass('open');
});

