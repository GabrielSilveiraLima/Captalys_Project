$(document).ready(function(){
    let canvas = $('.board');
    const rndInt = Math.floor(Math.random() * 875) + 1

    function drawBoard(){
        let x = 1; 
        while (x < 876) {
            canvas.append(`<div class="board__cell board__cell--`+ x +`" data-life="0"></div>`);
            x++;
        }

        $('.board__cell--'+ rndInt).addClass('board__cell--active')
        $('.board__cell--'+ rndInt).next().addClass('board__cell--active')
        $('.board__cell--'+ rndInt).prev().addClass('board__cell--active')
        $('.board__cell--'+ rndInt).prevAll().eq(35).addClass('board__cell--active')
        $('.board__cell--'+ rndInt).nextAll().eq(35).addClass('board__cell--active')
    };

    drawBoard();

    // active cell
    let cell = $('.board__cell');
    
    cell.on('click', function() {
        $(this).toggleClass('board__cell--active');
        findDots();
    })
    
    function resetBoard() {
        cell.removeClass('board__cell--active');
        
    }

    let life = 0;

    function nextDots() {
        if($('.board__cell--active').next().is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }

    function prevDots() {
        if($('.board__cell--active').prev().is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }

    function aboveDots() {
        if($('.board__cell--active').prevAll().eq(35).is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }

    function belowDots() {
        if($('.board__cell--active').nextAll().eq(35).is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }

    function aboveLeftDots() {
        if($('.board__cell--active').prevAll().eq(36).is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }

    function aboveRightDots() {
        if($('.board__cell--active').prevAll().eq(34).is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }

    function belowLeftDots() {
        if($('.board__cell--active').nextAll().eq(34).is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }

    function belowRightDots() {
        if($('.board__cell--active').nextAll().eq(36).is('.board__cell--active')){
            $(this).data('life') == 1
        }
    }
    
    function findDots() {
        nextDots();
        prevDots();
        aboveDots();
        aboveLeftDots();
        aboveRightDots();
        belowDots();
        belowLeftDots();
        belowRightDots();
        rules();
    }

    function rules() {
        // less than 2 neighbours die
        if(life <= 1){

        }
    }
    
    // Buttons
    
    // reset
    $('.board__controls-reset').on('click', resetBoard);
})