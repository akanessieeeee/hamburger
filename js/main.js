//sidebar
//open
$('.p-header__btn').on('click',function(){
    //sidebarを開く
    $('.p-sidebar').addClass('open');
    //背景フェードイン
    $('.p-sidebar__bg').addClass('open');
    $('.l-sidebar').addClass('open');
    //btnの削除
    $(this).addClass('open');
});

//close
$('.p-sidebar__btn').on('click',function(){
    //sidebarを閉じる
    $('.p-sidebar').removeClass('open');
    //背景フェードアウト
    $('.p-sidebar__bg').removeClass('open');
    function fadeout(){
        $('.l-sidebar').removeClass('open');
    };
    setTimeout(fadeout,600);

    //btn
    $('.p-header__btn').removeClass('open');
});

