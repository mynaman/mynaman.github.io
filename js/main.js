$(function() {

    const img_cache_arr = new Array();

    (function () {        
        arrayOfImages = [
            '/img/pexels-photo-1046896.jpeg',
            '/img/athletes-audience-ball-270085.jpg',
            '/img/pexels-photo-160107.jpeg',
            '/img/KakaoTalk_20181105_172935900.jpg',
        ];        

        $(arrayOfImages).each((i, v) => { 
            img_cache_arr[i] = new Image();
            img_cache_arr[i].src = v;
        });
    })();

    $('.headA .btn-bars').click(() => {
        const isDisplay = $('.headB').css('display');
        isDisplay === 'none' ? $('.headB').css('display', 'flex').animate({height:'90px'}, 400)
                            : $('.headB').animate({height:'0px'}, 400, () => { $('.headB').removeAttr('style')})
    });

    const slider = [
        {
            url: `/img/pexels-photo-1046896.jpeg`,
            text: `가고 싶은곳이 많아서 여행을 좋아합니다`,
            current: true,
        },
        {
            url: `/img/athletes-audience-ball-270085.jpg`,
            text: `축구 매니아 입니다`,
            current: false,                                        
        },
        
        {
            url: `/img/pexels-photo-160107.jpeg`,
            text: `개발자이니까 당연히 개발도 좋아 합니다.`,
            current: false,
        },                
        {
            url: `/img/KakaoTalk_20181105_172935900.jpg`,
            text: `안녕하세요 개발자 박원석이라고 합니다.`,
            current: false,
        },
    ];

    $('.conA-image').css('background-image', `url(${slider[0].url})`);
    $('.container h1').text(slider[0].text);
        
    $('.btn-left').click((e) => {
        let idx= 0;                
        $(slider).each((i, v) => {                    
            if(v.current) {                        
                idx = (i===0) ? slider.length-1 : i-1;                        
                slider[i].current = false;
                slider[idx].current = true;                        
                return false;
            };                             
        });
        $('.container .conA-image')
        .css('background-image', 
        `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slider[idx].url})`)
         
        $('.container h1').text(slider[idx].text);
    });


    $('.btn-right').click((e) => {
        let idx= 0;
        $(slider).each((i, v) => {                    
            if(v.current) {                        
                idx = (i===3) ? 0 : i+1;                        
                slider[i].current = false;
                slider[idx].current = true;                        
                return false;
            };                             
        });
        $('.container .conA-image').css('background-image', 
        `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slider[idx].url})`);
        $('.container h1').text(slider[idx].text);
    });
});
