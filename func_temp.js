

 var	clsStopwatch = function() {
 		// Private vars
 		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
 		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

 		var	now	= function() {
 				return (new Date()).getTime();
 			};

 		// Public methods
 		// Start or resume
 		this.start = function() {
 				startAt	= startAt ? startAt : now();
 			};

 		// Stop or pause
 		this.stop = function() {
 				// If running, update elapsed time otherwise keep it
 				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
 				startAt	= 0; // Paused
 			};

 		// Reset
 		this.reset = function() {
 				lapTime = startAt = 0;
 			};

 		// Duration
 		this.time = function() {
 				return lapTime + (startAt ? now() - startAt : 0);
 			};
 	};
 var x = new clsStopwatch();
 var $time;
 var clocktimer;
 function pad(num, size) {
 	var s = "0000" + num;
 	return s.substr(s.length - size);
 }
 function formatTime(time) {
 	var h = m = s = ms = 0;
 	var newTime = '';

 	h = Math.floor( time / (60 * 60 * 1000) );
 	time = time % (60 * 60 * 1000);
 	m = Math.floor( time / (60 * 1000) );
 	time = time % (60 * 1000);
 	s = Math.floor( time / 1000 );
 	ms = time % 1000;

 	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
 	return newTime;
 }
 function show() {
 	$time = document.getElementById('time');
 	update();
 }
 function update() {
 	$time.innerHTML = formatTime(x.time());
 }

 function stop() {
 	x.stop();
 	clearInterval(clocktimer);
 }
 function reset() {
 	stop();
 	x.reset();
 	update();
 }


  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Log in 로그인 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  var checkLoginStatus = function(response){
    console.log(response);
    // statusChangeCallback(response);
    if(response.status == 'connected'){
      //document.querySelector('#authBtn').value = 'Logout';
      $('#authBtn').val('Logout');
      FB.api('/me', function(resp){
        $('.myname').html(resp.name);
      });
    }else {
      //document.querySelector('#authBtn').value = 'Login';
      $('#authBtn').val('Login');
      $('.myname').html("");
    }
  }

 function facebook_log(status){
   if(status.value == 'Login'){
     FB.login(function(res){
       console.log('login =>', res)
       checkLoginStatus(res);
     });


   //  $('#authBtn').val('Logout');

   }else{
     FB.logout(function(res){
       console.log('logout =>', res)
       checkLoginStatus(res);
     });
 //    $('#authBtn').val('Login');
   }
 }

 function instagram_log(){

   var insta_set = {
     "clientID" : "dbfdc2aae60d47a083abb536c80fb10f",
     "clientSecret" : "5defbb18dd1d4e86a3a2221bba8109c1",
     "redirectURI" : "http://localhost:81/wordpress/"
   };
   location.href = "https://api.instagram.com/oauth/authorize/?client_id="+insta_set['clientID']+"&redirect_uri="+insta_set['redirectURI']+"&response_type=code";
 }



  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ REFLEX 리플렉스 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  var reflex_list;
  var reflex_ran = [];
  var reflex_ans;
  var reflex_stage = 0;
  var reflex_record;
  var reflex_result;
  var reflexT;
  const src_reflex = src_host+"wp-content/uploads/reflex/";
  const reflex_final = 10;

  function reflex_get_data(res){
    reflex_list = JSON.parse(res.value);
    reflex_record = [];
    reflex_set();
  }
  function reflex_set(){
    reflex_stage++;
    reflexT = 0;

    reflex_ran =[];
    for(var i=0; i<3; i++){
      var temp = reflex_list[Math.floor((Math.random()*20))];
      while(reflex_ran.includes(temp)){
        var temp = reflex_list[Math.floor((Math.random()*20))];
      }
      reflex_ran.push(temp);
    }
    reflex_ans = reflex_ran[Math.floor((Math.random()*2))];
    reflex_ready();
  }
  function reflex_ready(){
    var time_ready = 2;
    $('.game-container.reflex').css('display', 'inline');
    $('.game-container.reflex').html('<h1>'+time_ready+'</h1>');
    $('.stage_showing').html('stage : <font color="red">'+reflex_stage+'/'+reflex_final+'</font>');

 //   document.querySelector('.game-container.reflex').style = "display: inline";
 //   document.querySelector('.game-container.reflex').innerHTML = '<h1>'+time_ready+'</h1>';

    tid = setInterval(function(){
      time_ready = time_ready-1;
      $('.game-container.reflex').html('<h1>'+time_ready+'</h1>');
   //   document.querySelector('.game-container.reflex').innerHTML = '<h1>'+time_ready+'</h1>';
      if(time_ready == 0){
        clearInterval(tid);
        reflex_start();
      }
    }, 1000)
  }

  function reflex_start(){
    reflex_TimeStart();
    $('.game-container.reflex').css({
      'display' : 'grid',
      'grid-template-columns' : '1fr 1fr 1fr 1fr'
    });
 //   document.querySelector('.game-container.reflex').style = "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr";
    var msg =[];
    for(var i=0; i<reflex_ran.length; i++){
      var temp = '<img class = "img_cell reflex" onclick = \'check_reflex("'+reflex_ran[i]+'")\' src = "'+src_reflex+'answer/'+reflex_ran[i]+'.png">';
      msg.push(temp);
    }
    var temp = '<img class = "img_cell sellect"  src = "'+src_reflex+'hint/'+reflex_ans+'.png">';
    msg.push(temp);
    shuffle(msg);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    $('.game-container.reflex').html(msg.reduce(reducer));
 //   document.querySelector('.game-container.reflex').innerHTML = msg.reduce(reducer);
  }

  function check_reflex(res){
    clearInterval(tid);		// 타이머 해제

    var back_color;
    if(res == reflex_ans){
      // 정답
      back_color = '#51ff00'
    }else {
      // 오답
      back_color = 'red';
      reflexT = parseFloat(reflexT+1);
    }
    reflex_record.push(reflexT.toFixed(2));

    $('.game-box').css('backgroundColor', back_color);
 //   document.querySelector('.game-box').style.backgroundColor = back_color;
    setTimeout(function(){
      $('.game-box').css('backgroundColor', '#efefef');
 //     document.querySelector('.game-box').style.backgroundColor = '#efefef';
      if(reflex_stage == reflex_final){
        reflex_result=0;
        for(var i=0; i<reflex_record.length; i++){
          reflex_result = reflex_result + parseFloat(reflex_record[i]);
        }
        reflex_result = (reflex_result/10).toFixed(2);
        show_reflex_msg();
      }else {
        reflex_set();
      }
     }, 300);
  }
  function reflex_TimeStart(){
    tid=setInterval(function(){
      reflexT = parseFloat(reflexT+0.01);
      if (reflexT > 20) {			// 시간이 종료 되었으면..
        clearInterval(tid);}
      },10);
   }
   function show_reflex_msg(){
     var showing_msg;
     if(reflex_result<1){
       showing_msg = 'What are you doing here ? Go BayernMunich and have competition with ManuelNeuer !'
     }else if (reflex_result<2) {
       showing_msg = 'You have absolutely awesom reflex talent !'
     }else if (reflex_result<3) {
       showing_msg = 'Not bad but you can be better!'
     }else {
       showing_msg = 'You didn\'t Concentrate. right? try again !'
     }
     var msg =
         '<img class = "img_cell" src = "'+src_reflex+'wp-content/uploads/inner_thumbnail/reflex.jpg">'+
         '<div style = "padding: 0 20px"><h4>My result : <font color ="red">'+reflex_result+'</font></h4><h6>'+showing_msg+'</h6>'+record_form('reflex', reflex_record);

         $('.game-container.reflex').css({
           'display' : 'grid',
           'grid-template-columns' : '1fr 1fr'
         });
         $('.game-container.reflex').html(msg);
   }


   // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ FAST FIND 패스트파인드  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


   var fastfind_stage = 0;
   var grid_size = 3;

   var selected_team = [];
   var answer;
   var wrong;

   const src_fastfind = src_host+"wp-content/uploads/fastfind/";
   const set_time_fastfind = 20;

   // 팀선택

   function team_select(res){
   //  selected_team = JSON.parse(res.value);
   //  document.querySelector('.btn_start').style.display = 'inline';
   //  game_start();
     var target = '.fastfind_start.'+res;
     document.querySelector(target).click(); // Click on the checkbox
   }

   function team_setting(res){
     selected_team = JSON.parse(res.value);
     game_start();
   }

   // 패스트파인드 시작

   function game_start(){
     SetTime = set_time_fastfind;
     grid_size = 3+Math.floor(fastfind_stage/2);
     fastfind_stage++;

     answer = selected_team[Math.floor((Math.random()*15)+1)];
     wrong = selected_team[Math.floor((Math.random()*15)+1)];

     var i=0;
     while(answer == wrong){
       wrong = selected_team[Math.floor((Math.random()*15)+1)];
     }
     var ans_position = Math.floor(Math.random()*grid_size*grid_size);

     var make_game = '<h2 class = "target_name" style= "text-align: center"></h2><div class = "game-container fastfind">';

     while(i<grid_size*grid_size){
       if(i == ans_position){
         make_game = make_game +
         '<img class = "img_cell" src="'+src_fastfind+selected_team[0]+'/'+answer+'.png" onclick=\'checkAnswer("'+answer+'")\'></img>';
       }else {
         make_game = make_game +
         '<img class = "img_cell" src="'+src_fastfind+selected_team[0]+'/'+wrong+'.png" onclick=\'checkAnswer("'+wrong+'")\'></img>';
       }
       i++;
     }
     make_game = make_game + '</div><h5 class = "stage_showing" style="text-align: right; margin: 20px"></h5>';

     //document.querySelector('.game-box.fastfind').innerHTML=make_game;
     $('.game-box.fastfind').html(make_game);
     $('.game-box.fastfind').css({
       'border-radius' : '5px',
       'background-color' : '#efefef',
       'margin' : '0 auto',
       'padding' : '20px'
     });
     $('.game-container.fastfind').css({
       'grid-template-columns' : 'repeat('+grid_size+', 1fr)',
       'max-width' : '450px'
     });
     $('.stage_showing').html('current stage  <font color = "red">'+fastfind_stage+'</font>');
     fastfind_timerStart();
   }

   function fastfind_timerStart(){ tid=setInterval('fastfind_time()',10) }
   function fastfind_time() {	// 1초씩 카운트

     $('.target_name').html('TIME LEFT <font color="red"> '+SetTime+'</font>');
     //document.querySelector('.target_name').innerHTML = '<font color="red">'+SetTime+'</font>';
     //'TIME LEFT : <font color="red">'+ SetTime+'</font>';
     //  var msg = "<h4>TIME LEFT :  <font color='red'>" + SetTime + " s </font> 입니다.</h4>";

     //document.all.ViewTimer.innerHTML = msg;		// div 영역에 보여줌
     SetTime = parseFloat(SetTime-0.01).toFixed(2);
     if (SetTime < 0) {			// 시간이 종료 되었으면..
       clearInterval(tid);		// 타이머 해제
       fastfind_finish();
     }
   }

   function checkAnswer(res){

     if(res != answer){
       SetTime = parseFloat(SetTime-3).toFixed(2);
       $('.game-box.fastfind').css("backgroundColor", 'red');
       setTimeout(function(){
         $('.game-box.fastfind').css("backgroundColor", '#efefef');
       },300);

   } else {
       clearInterval(tid);		// 타이머 해제
       $('.game-box.fastfind').css("backgroundColor", '#51ff00');
       setTimeout(function(){
         game_start();
         $('.game-box.fastfind').css("backgroundColor", '#efefef');
       },300);
     }
   }

   function fastfind_finish(){
     if(fastfind_stage>30){
       showing_msg = '<p>Your brain is simmilar to computer.</p>'
     }else if (fastfind_stage > 20) {
       showing_msg = '<p>You have eagle eye and very sharp sense !</p>'
     }else if (fastfind_stage > 15) {
       showing_msg = '<p>Great sense !</p>'
     }else if (fastfind_stage > 10) {
       showing_msg = '<p>Good job ! But you can be better ! try again</p>'
     }else if (fastfind_stage > 5) {
       showing_msg = '<p>Not bad ! But you need to be more sharp ! practice again</p>'
     }else {
       showing_msg = '<p>I think you didn\'t concentrated! </p>'
     }

     var msg =
         '<img class = "img_cell" src = "'+src_host+'wp-content/uploads/inner_thumbnail/fastfind_result.png">'+
         '<div style = "margin : 20px; border-top : 2px solid; padding-top: 10px"><h3>MY RESULT : <font color ="red">'
         +fastfind_stage+'</font></h3><h6>'
         +showing_msg+'</h6>'
         +record_form('fastfind', fastfind_stage);

     $('.target_name').css('display','none');
     $('.stage_showing').css('display','none');
     $('.game-box.fastfind').html(msg);
     $('.game-box.fastfind').css({
       'max-width' : '450px'
     });
   //  document.querySelector('.game-container.fastfind').style = "display:inline-grid; align-items:center";
   //  document.querySelector('.game-container.fastfind').innerHTML='<h3>My record : </h3>'+stage-2;
   }

   function locate_fastfind(){
     location.href = url_host+"fastfind";
   }



   // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ RANDOM BOX 랜덤 박스  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

   var random_list;
   var arr_ran = [];

   const src_randombox = src_host+'wp-content/uploads/randombox/';

   function randombox(list){
     random_list = JSON.parse(list.value);
     arr_ran = [];
     select_random();
   }

   function select_random(){
     for(var i=0; i<3; i++){
       var temp = Math.floor((Math.random()*random_list.length));
       while (arr_ran.includes(random_list[temp])) {
         var temp = Math.floor((Math.random()*random_list.length));
       }
       arr_ran.push(random_list[temp]);
     }

     randombox_showing();
   }

   function randombox_showing(){
     var msg = '<h1 class = "h1_design">MY RANDOM 3 TOP</h1><div class="game-container random">';
     for(var i in arr_ran){
       msg = msg + '<img class = "random-item" src = "'+src_randombox+arr_ran[i]+'.png">';
     }
     msg = msg+'</div><input type="button" value = "REGAME" onclick="reset_random();">'
     // document.querySelector('.game-box.threetop').innerHTML = msg;
     $('.game-box.threetop').html(msg);
   }

   function reset_random(){
     arr_ran = [];
     var msg = '<h1 class ="h1_design">MY RANDOM 3 TOP</h1><div class="game-container normal"><input class="game-item random"type="image"  src="http://localhost:81/wordpress/wp-content/uploads/icon/push_button.png" onclick="select_random();"><h4 style="margin: auto">Click button and get your player !</h4></div>';
     $('.game-box.threetop').html(msg);
   }
