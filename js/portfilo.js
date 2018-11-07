$(function() { 
    const portfolio = [
        {
            company : 'sk 네트웍스 서비스',            
            img: 'img/sk.png',
            project: [                
                {
                    project: false,
                    name: '그룹웨어 시스템',
                    date: '2016.02 ~ 2018.10',
                    workList: [
                        '전자결재 신규 개발 및 개선',
                        'HR 관련 개발 (연말정산 개발, 인사평가 개발, 연봉 동의서 개발)',
                        'SAP / SIMS interface 웹서비스 호출 개발',
                        '어드민 페이지 개발',
                        'Log, 보안 취약점 개선',
                        'html, css UI 페이지 개발 / javascirpt, jQuery 동적 페이지 개발',
                        '데이터 바인딩 및 렌더링 개발 ajax  개발 및 서버 컨트롤 개발',
                        'c# 비즈니스 로직 개발 / table 설계, stored procedure 개발',
                    ],                
                },                
            ],
        },
        {
            company : '잉글리쉬 무무',
            img: 'img/english-moumou.jpg',
            project: [                
                {
                    project: true,
                    name: '잉글리쉬 무무TV 구축',
                    url: 'http://tv.moumou.co.kr/',
                    date: '2015.02 ~ 2015.07',
                    workList: [
                        '채널 편성표 개발',
                        '어드민 페이지 개발',
                        '반응형 웹 개발',
                        'bootstrap 활용',
                        'jwplayer 라이브러리',
                        'asp.net mvc framework 개발',
                        '모델링 설계, IIS 환경 구축, FTP 구축',
                    ],                
                },
                {
                    project: true,
                    name: '상담관리 시스템 프로젝트',
                    url: 'http://devmmlt.moumou.co.kr/',
                    date: '2014.11 ~ 2015.02',
                    workList: [
                        '학습 설계 및 플랜 개발',
                        '회원 정보 개발 (예비 회원 / 정회원)',
                        '학습법 개발 / 보조 학습 개발',
                        '어드민 페이지 개발',
                        'html5, css3 반응형 웹 개발(데스크탑 , 태블릿)',
                        'javascirpt, jQuery 동적 페이지 개발, jQuery slider 활용',
                        'asp.net mvc framework 개발',
                    ],                
                },
            ],
        },
        {
            company : '가온아이',            
            img: 'img/kaoni.png',        
            project: [
                {
                    project: false,
                    name: 'SM 유지보수 및 개발 업무',
                    date: '2013.02 ~ 2014.03',
                    workList: [
                        '장애 처리 조치 업무',
                        '파일 반출입 연동 개발',
                        '전자결재 첨부파일 가비지 tool 개발',
                        '자동 로그인 연동',
                        '전자결재 양식 추가 개발',
                        '그룹웨어 기능 추가 개발',
                    ],                
                },
                {
                    project: true,
                    name: '소망화장품 그룹웨어 구축',
                    date: '2012.09 ~ 2013.01',
                    workList: [
                        '그룹웨어 기능 커스텀',
                        '전자결재 커스텀',                    
                    ],                
                },
                {
                    project: true,
                    name: '한독모터스 그룹웨어 구축',
                    date: '2012.06 ~ 2012.09',
                    workList: [
                        '사내복지 예약관리',
                        '전자결재 커스텀',                    
                    ],                
                },
                {
                    project: true,
                    name: '알리안츠 생명 그룹웨어 구축',
                    date: '2011.09 ~ 2012.05',
                    workList: [
                        '연차관리 / 근태관리 개발',
                        '전자결재 커스텀 개발',                    
                    ],                
                },
            ],
        }
    ];


    function createElements(arr) {        
        let el = '';
        for(let i=0; i< arr.length; i++) {
            el += `<div class="container">
            <div class='company'>
                <h2>${arr[i].company}</h2>
                <div class="line-big"></div>
                <a href="#"><img src="${!arr[i].img ? '/img/noImg.png' : arr[i].img}" alt=""></a>
            </div>`;
            el += `<div class="wrap">`
        for(let j=0; j<arr[i].project.length; j++) {
            const arrProject = arr[i].project[j];
            el += `<div class='project-text'>
                <h3>${arrProject.project ? '프로젝트' : '유지보수 및 운영 개발 업무'}</h3>
                ${arrProject.url 
                    ? `<h4>${arrProject.name} <a href=${decodeURIComponent(arrProject.url)} target='_black'>link</a></h4>`
                    : `<h4>${arrProject.name}</h4>`
                }                        
                <h3>기간</h3>
                <h4>${arrProject.date}</h4>
                <h3>${arrProject.project ? '담당 업무' : '운영 업무'}</h3>`                
                el += `<ul>`;
                for(let x=0; x<arrProject.workList.length; x++) {
                    el += `<li>- ${arrProject.workList[x]}</li>`;
                }
                el += `</ul>                     
                     </div>`;                    
            }
            el += `</div>
                </div>`;
        }
        $('.port-content').append(el);
    }
    createElements(portfolio);

    $('.company a').click((e) => e.preventDefault());

    const $totop = $('#totop');
    const $container = $('.container');
    const $window = $(window);

    function check_if_in_view() {
        const window_height = $window.height();
        const window_top_position = $window.scrollTop();
        const window_bottom_position = (window_top_position + window_height);          

        $.each($container, function() {
            const $element = $(this);
            const element_height = $element.outerHeight();
            const element_top_position = $element.offset().top + 120;
            const element_bottom_position = (element_top_position + element_height);
        
            if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
              $element.addClass('in-view');
            } else {
              $element.removeClass('in-view');
            }
          });
        
        if(window_height < window_top_position) {
            $totop.removeClass('transparent');
        } else {
            $totop.addClass('transparent');
        }
    
    }

    $window.on('scroll', check_if_in_view);
    $window.trigger('scroll');    

})