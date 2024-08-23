let viewt = "";
let viewb = "";
let viewa = "";

// トップスを押した場合
    $("#t1,#t2,#t3,#t4,#t5").on("click",function(){
        // 1.乱数(1-5)
        const b = Math.ceil(Math.random()*5);
        const a = Math.ceil(Math.random()*5);
        // 2.if分岐処理
        if( b == 1 ){
            viewb = '<img src="img/b1.jpg">';
        }
        if( b == 2 ){
            viewb = '<img src="img/b2.jpg">';
        }
        if( b == 3 ){
            viewb = '<img src="img/b3.jpg">';
        }
        if( b == 4 ){
            viewb = '<img src="img/b4.jpg">';
        }
        if( b == 5 ){
            viewb = '<img src="img/b5.jpg">';
        }
        if( a == 1 ){
            viewa = '<img src="img/a1.jpg">';
        }
        if( a == 2 ){
            viewa = '<img src="img/a2.jpg">';
        }
        if( a == 3 ){
            viewa = '<img src="img/a3.jpg">';
        }
        if( a == 4 ){
            viewa = '<img src="img/a4.jpg">';
        }
        if( a == 5 ){
            viewa = '<img src="img/a5.jpg">';
        }

        // 3.クリックした画像を表示（トップス）
        const viewt = $(this).children('img').attr('src');

        // 4.表示
        console.log(viewt,"viewt")
        $("#kekka1").html(`<img src="${viewt}">`);
        $("#kekka2").html(viewb);
        $("#kekka3").html(viewa);
    
    });

// ボトムスを押した場合
    $("#b1,#b2,#b3,#b4,#b5").on("click",function(){
        // 1.乱数(1-5)
        const t = Math.ceil(Math.random()*5);
        const a = Math.ceil(Math.random()*5);
        // 2.if分岐処理
        if( t == 1 ){
            viewt = '<img src="img/t1.jpg">';
        }
        if( t == 2 ){
            viewt = '<img src="img/t2.jpg">';
        }
        if( t == 3 ){
            viewt = '<img src="img/t3.jpg">';
        }
        if( t == 4 ){
            viewt = '<img src="img/t4.jpg">';
        }
        if( t == 5 ){
            viewt = '<img src="img/t5.jpg">';
        }
        if( a == 1 ){
            viewa = '<img src="img/a1.jpg">';
        }
        if( a == 2 ){
            viewa = '<img src="img/a2.jpg">';
        }
        if( a == 3 ){
            viewa = '<img src="img/a3.jpg">';
        }
        if( a == 4 ){
            viewa = '<img src="img/a4.jpg">';
        }
        if( a == 5 ){
            viewa = '<img src="img/a5.jpg">';
        }

        // 3.クリックした画像を表示（ボトムス）
        const viewb = $(this).children('img').attr('src');

        // 4.表示
        $("#kekka1").html(viewt);
        $("#kekka2").html(`<img src="${viewb}">`);
        $("#kekka3").html(viewa);
    
    });

// 小物を押した場合
    $("#a1,#a2,#a3,#a4,#a5").on("click",function(){
        // 1.乱数(1-5)
        const t = Math.ceil(Math.random()*5);
        const b = Math.ceil(Math.random()*5);
        // 2.if分岐処理
        if( t == 1 ){
            viewt = '<img src="img/t1.jpg">';
        }
        if( t == 2 ){
            viewt = '<img src="img/t2.jpg">';
        }
        if( t == 3 ){
            viewt = '<img src="img/t3.jpg">';
        }
        if( t == 4 ){
            viewt = '<img src="img/t4.jpg">';
        }
        if( t == 5 ){
            viewt = '<img src="img/t5.jpg">';
        }
        if( b == 1 ){
            viewb = '<img src="img/b1.jpg">';
        }
        if( b == 2 ){
            viewb = '<img src="img/b2.jpg">';
        }
        if( b == 3 ){
            viewb = '<img src="img/b3.jpg">';
        }
        if( b == 4 ){
            viewb = '<img src="img/b4.jpg">';
        }
        if( b == 5 ){
            viewb = '<img src="img/b5.jpg">';
        }

        // 3.クリックした画像を表示（小物）
        const viewa = $(this).children('img').attr('src');

        // 4.表示
        $("#kekka1").html(viewt);
        $("#kekka2").html(viewb);
        $("#kekka3").html(`<img src="${viewa}">`);
    
    });


// 保存ボタンを押した場合

    // トップスを保存
    $(".button").on("click",function(){
        const savedImage = $("#kekka1").html();
        localStorage.setItem("memo",savedImage);
    });
    
    // ボトムスを保存
    $(".button").on("click",function(){
        const savedImage = $("#kekka2").html();
        localStorage.setItem("memo2",savedImage);
    });

    // 小物を保存
    $(".button").on("click",function(){
        const savedImage = $("#kekka3").html();
        localStorage.setItem("memo3",savedImage);
        alert("画像が保存されました");
    });

// 保存したコーディネートを見るボタンを押した場合

    // 保存したトップスを表示
    $(".button2").on("click",function(){
        if(localStorage.getItem("memo")){
        const savedImage =localStorage.getItem("memo");
        $("#kekka1").html(savedImage)
        }
    })

    // 保存したボトムスを表示
    $(".button2").on("click",function(){
        if(localStorage.getItem("memo2")){
        const savedImage =localStorage.getItem("memo2");
        $("#kekka2").html(savedImage)
        }
    })

    // 保存した小物を表示
    $(".button2").on("click",function(){
        if(localStorage.getItem("memo3")){
        const savedImage =localStorage.getItem("memo3");
        $("#kekka3").html(savedImage)
        }
    })