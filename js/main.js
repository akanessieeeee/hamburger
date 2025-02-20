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
    //背景の固定
    $('.l-container').addClass('open');
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
    //btnの表示
    $('.p-header__btn').removeClass('open');
    //背景の固定解除
    $('.l-container').removeClass('open');
});

//ウィンドウ幅変更時にページをリロード
let timer = false;
let prewidth = $(window).width()
$(window).resize(function(){
    if (timer !== false) {
        clearTimeout(timer);
    };
    timer =setTimeout(function() {
        let nowWidth = $(window).width()
        if(prewidth !== nowWidth) {
            location.reload();
        }
        prewidth = nowWidth;
    },200);
});