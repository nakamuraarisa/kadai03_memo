// トップスを押した場合
    $("#t1,#t2,#t3,#t4,#t5").on("click",function(){
        // 1.乱数(1-5)
        const b = Math.ceil(Math.random()*5);
        const a = Math.ceil(Math.random()*5);
        // 2.if分岐処理
        let viewb = "";
        let viewa = "";
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
        const viewt = $(this).children().attr("src")

        // 4.表示
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
        let viewt = "";
        let viewa = "";
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
        const viewb = $(this).children().attr("src")

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
        let viewt = "";
        let viewb = "";
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
        const viewa = $(this).children().attr("src")

        // 4.表示
        $("#kekka1").html(viewt);
        $("#kekka2").html(viewb);
        $("#kekka3").html(`<img src="${viewa}">`);
    
    });


// 保存ボタンを押した場合
    $(".button").on("click",function(){
        const savedImage =$("viewt").attr("src");
        localStorage.setItem("memo",savedImage);
        alert("画像が保存されました");
    });

// 保存した画像を見るボタンを押した場合
    $(".button2").on("click",function(){
        if(localStorage.getItem("memo")){
        const savedImage =localStorage.getItem("memo");
        $("#kekka1").html(savedImage)
        }
    })