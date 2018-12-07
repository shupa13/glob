 var player_url = {
   'KIMPEMBE':"MoyUcwO",'ALDERWEIRELD':"YqoqxR4",'BOATENG':"Xc3Aj0A",'BONUCCI':"XnPY8Dl",'CHIELLINI':"hjC8glZ",'DE_LIGT':"8Xbc5ee",'GODIN':"nhrSRjz",'VERTONGHEN':"hNte4i5",'GOMEZ':"nEDeySE",
   'HUMMELS':"WpecmqN",'KOMPANY':"mxEdXLN",'KOULIBALY':"mxfiG6j",'STONES':"PQTRtZH",'LOVREN':"j0im63A",'LUIZ':"CDBVlkm",'MAGUIRE':"0dgsuJa",'MANOLAS':"iE65ZA3",'MIRANDA':"RMeQjmo",'MUSTAFI':"GOUlDAC",
   'PIQUE':"Pwj4JnM",'RAMOS':"tLt2O1P",'RUDIGER':"CgOKm6b",'SULE':"NACTFSw",'VARANE':"RBgLWsq",'SKRINIAR':"5jjFAjK",'VAN_DIJK':"AT3BvAH",'VIDA':"rPNOeEB",'SOKRATIS':"eTnhvOK",'T.SILVA':"WAivNSC",
   'UMTITI':"72BI1zZ",'LAPORTE':"WCQMaPi",'SMALLING':"tROFV69",'Savic':"mxvsPpx",'Silva':"b76nkEx",'Kroos':"3DJBlWz",'Vidal':"HKiqQAA",'Pjanic':"vVg7kKw",'Pogba':"fD4fsIy",'Rakitic':"kYoTRxg",
   'Ozil':"qxZlBVG",'Matuidi':"PffGETw",'Busquets':"abJ2fCf",'Alli':"Toga0ta",'Casemiro':"QcD0nux",'Modric':"ZGrETbD",'James':"665PBeR",'Jorginho':"5jMkD50",'Kante':"A51UKpB",'DeBruyne':"VGCxUx7",'Eriksen':"lKGaMN2"
 };
 var talent_url = {
   'Heading':'mGWdekY','Dribble':'r6dB2hr','Leadership':'Verc6sj','Passing':'iMhzjM9','Shooting':'GO0pZAW','Speed':'OfhAtI8',
   'Stamina':'7RRsM4z','Strength':'ID0zMSM','Tackle':'VBRKnot','Technic':'96HuKxy'
 };
 var dream_url = {
   'ATHENS':"NVMHv0a",
   'BANGKOK':"T2wQNRO",
   'BIG':"adADMdX",
   'CLUB':"X3hR2aI",
   'COMPACT':"qzLWUeq",
   'BRAND':"QeWwz5K",
   'NEWYORK':"vJfBUXd",
   'PARTY':"sAEvZ9s",
   'DUBAI':"cVCIerv",
   'HANDMADE':"at9Y2sH"
 };
 var whoameye_hint = {
   'DeBruyne':"gasGjX0",'DeGea':"Cej67U3",'Dybala':"KPXrwZe",'Griezmann':"J4b3bs1",'Hazard':"9JHq4d0",'Iniesta':"wl2FwjY",'Kroos':"Tcmw1lZ",'Mbappe':"HP9AUjg",
   'Messi':"R9au7ml",'Neuer':"34bRfGj",'Neymar':"zKj95VT",'Pique':"mARHoWx",'Ramos':"gX4dMw2",'Ronaldo':"5Ih8cJz",'Salah':"JJrR6T6",'Suarez':"140f08x"
 };
 var whoameye_eye = {
   'DeBruyne':"oW1IBo1",'DeGea':"YtrJ0yJ",'Dybala':"4tXcuAq",'Griezmann':"9aKtHUa",'Hazard':"jkznD6D",'Iniesta':"HYbwNfp",'Kroos':"iSZ9nWu",'Mbappe':"ue19zf3",
   'Messi':"CW82Di5",'Neuer':"LnIQuOu",'Neymar':"tn2dJzW",'Pique':"XQ9N8Nm",'Ramos':"ncMwFmj",'Ronaldo':"8ANa7aL",'Salah':"AO9m1NJ",'Suarez':"RafslXc"
 };
 var src_host = 'https://i.imgur.com/';

function get_img_src(url){
  var src = src_host+url+'.png';
  return src;
}
   var url_host = 'http://footballdor.com/';
//   var src_host = 'http://localhost:81/wordpress/';
//   var url_host = 'http://localhost:81/wordpress/';

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 월드컵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

var worldcup_arr;
var worldcup_selected = [];
var worldcup_round;

var champion;
var runner_up;

function worldcup_set(res){
  worldcup_arr = JSON.parse(res.value);

  $('.game-item.worldcup').css('flex-direction', 'row');
  $('.game-item.desc').html('ROUND OF 32');

  shuffle(worldcup_arr);
  worldcup_start();
}

function worldcup_start(){

  if (worldcup_arr.length == 0) {
    worldcup_initialize();
  }else {
    var msg =
    `<div>
      <input class = "img_cell" type="image" value="`+worldcup_arr[0]+`" src="`+get_img_src(player_url[worldcup_arr[0]])+`" onclick="worldcup_select(this)">
      <h4>`+worldcup_arr[0]+`</h4>
    </div>
    <div>
      <input class = "img_cell" type="image" value="`+worldcup_arr[1]+`" src="`+get_img_src(player_url[worldcup_arr[1]])+`" onclick="worldcup_select(this)">
      <h4>`+worldcup_arr[1]+`</h4>
    </div>
    `;

    $('.game-item.worldcup').html(msg);
  }
}

function worldcup_select(res){

  if(worldcup_round == 'FINAL'){
    champion = res.value;
    runner_up = get_runner_up(champion);
    show_worldcup();
  }else {
    worldcup_selected.push(res.value);
    worldcup_arr.splice(0,2);
    worldcup_start();
  }
}
function get_runner_up(item){
  for(var i in worldcup_arr){
    if(worldcup_arr[i] == item){
      worldcup_arr.splice(i, 1);
      break;
    }
  }
  return worldcup_arr[0];
}

function worldcup_initialize(){
  worldcup_arr = worldcup_selected;
  worldcup_selected = [];
  switch (worldcup_arr.length) {
    case 16:
      worldcup_round = 'ROUND OF 16';
      break;
    case 8:
      worldcup_round = 'QUARTER FINAL';
      break;
    case 4:
      worldcup_round = 'SEMI FIANL';
      break;
    case 2:
      worldcup_round = 'FINAL';
      break;
  }
  $('.game-item.desc').html(worldcup_round);
  shuffle(worldcup_arr);
  worldcup_start();
}

function show_worldcup(){
  var msg =
  `<div id="myProgress">
    <div id="myBar"></div>
  </div>
  <h5 style="text-align:center">Wait for seconds .... </h5>
  <form method = "POST" action = "`+url_host+`worldcup_df_process" id="myworldcup">
    <input type = "hidden" name = "champion" value =`+champion+`>
    <input type = "hidden" name = "runner_up" value =`+runner_up+`>
  </form>`;
  $('.game-item.worldcup').html(msg);
  $('#myworldcup').submit();
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ WHO AM EYE 후엠아이 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

var whoameye_arr = [];
var whoameye_ans = [];
var arr_shuffle;

var whoameye_stage = 0;
var whoameye_score = 0;

const whoameye_final = 10;
const set_time_whoameye = 10;


  // sql 데이터 수신
function whoameye_set(res){
  whoameye_arr = JSON.parse(res.value);
  answer_setting();
  whoameye_start();
}

function answer_setting(){
  for(var i=0; i<whoameye_final; i++){
    var temp = whoameye_arr[Math.floor((Math.random()*16))];
    while(whoameye_ans.includes(temp)){
      temp = whoameye_arr[Math.floor((Math.random()*16))];
    }
    whoameye_ans.push(temp);
  }
}
function whoameye_start(){
  SetTime = set_time_whoameye;
  whoameye_timerStart();
  whoameye_stage++;
  $('.whoameye_stage').html('STAGE : '+whoameye_stage);
  // 눈깔 입력
  arr_shuffle = shuffle(whoameye_arr);
  whoameye_answer = Math.floor((Math.random()*16));

  var inner_1 = inner_2 = [];
  for(var i=0; i<whoameye_arr.length/2; i++){
    inner_1 = inner_1 + load_eye(i);
    inner_2 = inner_2 + load_eye(i+whoameye_arr.length/2);
  }

  // 힌트입력
  var img_src = whoameye_hint[whoameye_ans[whoameye_stage-1]];
  var msg = '<h3 class="time_left"> TIME LEFT : '+SetTime+'</h3> <img width = "90%" src = "'+get_img_src(img_src)+'">';
  $('.whoami-item.center').html(msg);
  $('.whoami-item.left').html(inner_1);
  $('.whoami-item.right').html(inner_2);

  // 스테이지 입력
  $('.stage').html( "stage : "+whoameye_stage+"/10");
}
function whoameye_timerStart(){ tid=setInterval('whoameye_time()',10) }
function whoameye_time() {	// 1초씩 카운트

  $('.time_left').html('TIME LEFT : <font color="black">'+ SetTime+'</font>');
  SetTime = parseFloat(SetTime-0.01).toFixed(2)
  if (SetTime < 0) {			// 시간이 종료 되었으면..
    clearInterval(tid);		// 타이머 해제
    whoameye_check(null);
  }
}
function load_eye(num){
  var img_src = whoameye_eye[arr_shuffle[num]];
  return '<img class = "img_eye" src= "'+get_img_src(img_src)+'" onclick=\'whoameye_check("'+arr_shuffle[num]+'")\'>';
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function whoameye_check(res){
  clearInterval(tid);		// 타이머 해제
  var anwser_color;
  if(whoameye_ans[whoameye_stage-1] == res){
    whoameye_score++;
    anwser_color = '#51ff00';
  }else {
    anwser_color = 'red';
  }
  whoameye_result(anwser_color);
}
function whoameye_result(color){
  $('.game-item.whoameye').css('backgroundColor', color);
//  document.querySelector('.game-box').style.backgroundColor = color;
  if(whoameye_stage<whoameye_final){
    setTimeout(function(){
      $('.game-item.whoameye').css('backgroundColor', '#ffffff00');
       whoameye_start();
     }, 500);
  }else {
    var msg=`
    <div id="myProgress">
      <div id="myBar"></div>
    </div>
    <h5 style="text-align:center">Wait for seconds .... </h5>
    <form method = "POST" action = "`+url_host+`whoameye_process" id="myscore">
      <input type = "hidden" name = "score" value =`+whoameye_score*whoameye_final+`>
    </form>
    `
    progress_move();
    $('.game-item.whoameye').css('backgroundColor', '#ffffff00');
    $('.main').html(msg);
    $('.whoameye_stage').css('display', 'none');
    $("#myscore").submit();
  }
}
function progress_move(){
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    var per;
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            per = width+'%';
            $('#myBar').css('width',per);
        }
    }
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ THREE TOP 쓰리톱  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

var tt_select={};
var selected = [];
var price = [];
var extra_money;
const threetop_budget = 10;

function threetop_select(res){
  var result = JSON.parse(res.value);
  tt_select = {
    "name" : result['name'],
    "cost" : result['cost']
  };
  mylist_set();
}
function mylist_set(){
  var target = '.img_cell.mid.'+tt_select['name'];
  if(selected.includes(tt_select['name'])){
    // 이미 있으면 삭제
    remove_list(tt_select['name']);
    $(target).css({
      '-webkit-filter' : 'grayscale(1)',
      'filter' : 'gray',
      'opacity' : '0.75'
    });
  }else {
    // 아니면 추가
    if(selected.length>=3){
      // 3명 이성이면 선택불가
      alert('Only 3 players could be selected');
    }else {
      if(parseInt(tt_select['cost'])>extra_money){
        // 예산 범위 밖이면 선택불가
        alert('Over budget');
      }else {
        selected.push(tt_select['name']);
        price.push(tt_select['cost']);
        $(target).css({
          '-webkit-filter' : 'grayscale(0)',
          'filter' : 'none',
          'opacity' : '1'
        });
      }
    }
  }
  if(selected.length == 3){
    $('#btn_submit').css('display','inline');
  }else {
    $('#btn_submit').css('display','none');
  }
  show_list();
}

function remove_list(item){
  for(var i in selected){
    if(selected[i] == item){
      selected.splice(i, 1);
      price.splice(i,1);
      break;
    }
  }
}

function show_list(){
  var money_use = 0;
  for(var i=0; i<price.length; i++){
    money_use = money_use + parseInt(price[i]);
  }
  extra_money = threetop_budget - money_use;
  $('.extra_money').html('BEST MF COMBINATION  <font color="black">'+extra_money+' $</font>');
  document.getElementById('player_list').value = selected;
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ THREE TOP PROCESS 쓰리톱 프로세스  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
var arr_vote;
var participant;
var combi;
const show_size = 6;

function vote_category(res){
  vote_btn_css(res.id);
  arr_vote = JSON.parse(res.value);
  show_vote('personal');
}
function vote_combi(res){
  vote_btn_css(res.id);
  combi = JSON.parse(res.value);
  show_vote('combi');
}
function vote_btn_css(src){
  var target = '#'+src;
  $('.vote-menu > button').css({
    'backgroundColor' : '#D32F2F',
    'color' : 'white'
  })
  $(target).css({
    'backgroundColor' : 'white',
    'color' : '#D32F2F',
    'border' : '1.5px solid #D32F2F'
  });
}
function show_vote(res){
  participant = $('#total_participants').val();
  var msg ="";
  var percent;
  if(res == 'personal'){
    for(var i=0; i<show_size; i++){
      percent = ((arr_vote[i]['vote']/participant)*100).toFixed(2)+"%";
      msg = msg +`<div style = "display: grid; grid-template-columns : 1fr 5fr">`+
      `<div style= "display: grid"><img src = "`+get_img_src(player_url[arr_vote[i]['name']])+`"></div>`;
      msg = msg + vote_msg_send(percent, arr_vote[i]['name']);
    }
  }
  else {
    for(var i=0; i<show_size; i++){
      percent = ((combi[i]['vote']/participant)*100).toFixed(2)+"%";
      msg = msg +`<div style = "display: grid; grid-template-columns : 1fr 1fr 1fr 3fr">`;
      for(var j=0; j<combi[i]['combi'].length; j++){
        msg = msg + `<div style = "display: grid"><img src = "`
        +get_img_src(player_url[combi[i]['combi'][j]])
        +`"><h6 style="text-aling: center">`+combi[i]['combi'][j]
        +`</h6></div>`;
      }
      msg = msg + vote_msg_send(percent,"");
    }
  }
   $('.vote_result').html(msg);
}
function vote_msg_send(percent, name){
  var re = `<div style= "padding: 0 10px">
              <h6>`+name+`</h6>
              <h6 style="text-align: left"><font color = "#E57373">   `+percent+`</font></h6>
              <div id="myVote"><div id="myVote_gauge" style = "width : `+percent+`"></div></div>
            </div></div>`
   return re;
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ MY HERO 마이 히어로  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
var hero_tal = {
  'Technic' : 512,'Strength' : 256,'Shooting' : 128,'Tackle' : 64,'Passing' : 32,'Leadership' : 16,'Stamina' : 8,'Speed' : 4,'Heading' : 2,'Dribble' : 1
};
var selected_talent = [];
var talent_list = [];
var hero_code;
var hero_progress;

function myhero_init(){
  hero_code = 0;
  hero_progress = 0;
  myhero_set();
}

function myhero_set(){
  switch (hero_progress) {
    case 0:
      get_talent_vs('Technic', 'Strength');
      break;
    case 1:
      get_talent_vs('Shooting', 'Tackle');
      break;
    case 2:
      get_talent_group(['Passing', 'Leadership', 'Stamina', 'Speed', 'Heading', 'Dribble']);
      break;
  }
  $('.game-item.myhero').css({
    'grid-template-columns' : '1fr 1fr',
    'display' : 'grid'
  });
}
function get_talent_vs(a,b){
  var msg = get_hero_src(a)+get_hero_src(b);
  var desc = '<font color = "#D32F2F">'+a+'</font> VS <font color = "#D32F2F">' + b +'</font>';
  $('.game-item.option').html(msg);
  $('.game-item.desc').html(desc);
}
function get_hero_src(tal){
  var hero_src = '<img class = "img_cell selector" src = "'+get_img_src(talent_url[tal])+'" onclick = "add_talent(\''+tal+'\')">';
  return hero_src;

}
function add_talent(res){
  talent_list.push(res);
  hero_code = hero_code + hero_tal[res];
  hero_progress++;
  myhero_set();
}
function get_talent_group(list){
  var msg = '<h1 class = "game-item desc">SELECT <font color = "black">3 TALENTS </font></h5><div class = "game-item option">' ;
  for(var i=0; i<list.length; i++){
    msg = msg + '<img class = "img_cell selector" value = "'+list[i]+'" src = "'+get_img_src(talent_url[list[i]])+'" onclick = "add_talent_group(this,\''+list[i]+'\')">';
  }
  msg = msg + '</div>'+
    `<form method = "POST" action = "`+url_host+`myhero_process" style = "width: fit-content; margin: 10px auto">
      <input class = "sending_tal" name = "talent" type = "hidden">
      <input class = "mycode" name = "code" type = "hidden">
      <input id = 'btn_submit' style = "margin: 10px" type = "submit" value = "submit">
    </form>
    `;
  $('.main').html(msg);
  $('.game-item.option').css({
    'grid-template-columns' : '1fr 1fr 1fr'
  });
}
function add_talent_group(res,talent){
  if(selected_talent.includes(talent)){
    hero_code = hero_code - hero_tal[talent];
    remove_hero(talent);
    $(res).css({
      'filter' : 'gray',
      'opacity' : '0.75',
      '-webkit-filter' : 'grayscale(1)'
    });
  }else {
    if(selected_talent.length<3){
      hero_code = hero_code + hero_tal[talent];
      selected_talent.push(talent);
      $(res).css({
        'filter' : 'none',
        'opacity' : '1',
        '-webkit-filter' : 'grayscale(0)'
      });
    }else {
      alert('Only 3 talent !')
    }
  }
  $('.mycode').val(hero_code);
  $('.sending_tal').val(talent_list.concat(selected_talent));
  if(selected_talent.length == 3){
    $('#btn_submit').css('display','inline');
  }else {
    $('#btn_submit').css('display','none');
  }
}
function remove_hero(item){
  for(var i in selected_talent){
    if(selected_talent[i] == item){
      selected_talent.splice(i, 1);
      break;
    }
  }
}
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ DREAM CLUB 드림클럽  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
var selected_dream = [];

function dreamclub_init(){
  selected_dream = [];
  select_dream();
}

function select_dream(){
  switch (selected_dream.length) {
    case 0:
      set_dream("PARTY", "CLUB", "BIRTHDAY");
      break;
    case 1:
      set_dream("COMPACT", "BIG", "CAR");
      break;
    case 2:
      set_dream("BRAND", "HANDMADE", "SHOES");
      break;
    case 3:
      set_vacation("ATHENS", "NEWYORK", "DUBAI", "BANGKOK","VACATION");
      break;
    case 4:
      show_dream();
      break;
  }
}

function set_dream(a,b,c){
  var msg = `
    <img class="img_cell selector" src ="`+get_img_src(dream_url[a])+`" onclick = "push_dream('`+a+`')">
    <img class="img_cell selector" src ="`+get_img_src(dream_url[b])+`" onclick = "push_dream('`+b+`')">
  `;
  $('.game-item.option').html(msg);
  $('.game-item.desc').html(c);
}
function set_vacation(a,b,c,d,e){
  var msg = `
    <img class="img_cell selector dream" src ="`+get_img_src(dream_url[a])+`" onclick = "push_dream('`+a+`')">
    <img class="img_cell selector dream" src ="`+get_img_src(dream_url[b])+`" onclick = "push_dream('`+b+`')">
    <img class="img_cell selector dream" src ="`+get_img_src(dream_url[c])+`" onclick = "push_dream('`+c+`')">
    <img class="img_cell selector dream" src ="`+get_img_src(dream_url[d])+`" onclick = "push_dream('`+d+`')">
  `;
  $('.game-item.desc').html(e);
  $('.game-item.option').html(msg);
}

function push_dream(res){
  selected_dream.push(res);
  select_dream();
}

function show_dream(){
  var msg=`
  <div id="myProgress">
    <div id="myBar"></div>
  </div>
  <h5 style="text-align:center">Wait for seconds .... </h5>
  <form method = "POST" action = "`+url_host+`dreamclub_process" id="mydream">
    <input type = "hidden" name = "dream" value =`+selected_dream+`>
  </form>
  `
  progress_move();
  $('.game-item.option').html(msg);
  $("#mydream").submit();
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 월드컵 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

function load_img_src(res){
  var src = "https://gdurl.com/"+res;
  return src;
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ IMGA CODE ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
