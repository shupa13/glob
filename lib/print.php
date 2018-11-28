<?php
      $desc_doppy = 'YOUR DOPPLEGANGER ?';
      $desc_myhero = 'WHO IS YOUR FOOTBALL HERO ?';
      $desc_whoameye = 'GUESS PLAYERS WITH ONLY EYES';
      $desc_threemid = 'MAKE YOUR BEST 3 MF LINE';
      $desc_fastfind = 'HOW SHARP ARE YOUR EYES ?';
      $desc_style = 'MOST SIMILAR PLAYER TO ME';
      $desc_reflex = 'HOW FAST ? REFLEX TEXT !';
      $desc_dreamclub = 'WHRE IS YOUR DREAM CLUB ?';

  function sql_connect(){
  //  $conn = mysqli_connect("localhost", "shupa13", "tivjakfl5@", "shupa13");
    $conn = mysqli_connect("localhost:3307", "root", "tivjakfl5", "opentutorials");
    return $conn;
  }


    function return_src(){
      $src = "https://shupa13.cafe24.com/";
      $local = "http://localhost:81/wordpress/";
      return $local;
    }

    function return_url(){
      $url = "http://footballdor.com/";
      $local = "http://localhost:81/wordpress/";
      return $local;
    }

    function load_game($game, $desc){
    	$ss = '
    	<a href="'.$game.'">
    		<img class="game-thumbnail" style="" src= "'.return_src().'wp-content/uploads/thumbnail_games/'.$game.'.png"></img>
        <div>'.$desc.'</div>
    	</a>';
      return $ss;
    }

    function call_nav(){

      echo '
      <div class="nav">
        <div class="game-item">'.load_game("doppy", "").'</div>
        <div class="game-item">'.load_game("myhero", "").'</div>
        <div class="game-item">'.load_game("whoameye", "").'</div>
        <div class="game-item">'.load_game("fastfind", "").'</div>
        <div class="game-item">'.load_game("threemid", "").'</div>
        <div class="game-item">'.load_game("style", "").'</div>
        <div class="game-item">'.load_game("reflex", "").'</div>
        <div class="game-item">'.load_game("dreamclub", "").'</div>
      </div>
      ';
    }

  function menuList()
  {
    $files = scandir('menu/');
    $list = array();

    for($i=0; $i<count($files); $i++){
      if($files[$i]!='.'){
        if($files[$i]!='..'){
          array_push($list, $files[$i]);
        }
      }
    }
    for($j=0; $j<count($list); $j++){
       ?><a class = "playerList" href="home.php?id=<?php echo $list[$j]?>"><?php echo $list[$j]?></a><?php
    }
  }

  function description(){
    if(isset($_GET['id'])){
    echo file_get_contents('menu/'.$_GET['id']);
  }else {
    echo '환영합니다';
    }
  }

  function naming(){
    if(isset($_GET['id'])){
    print htmlspecialchars($_GET['id']);
  }else {
    echo 'HOME MAIN PAGE 입니다.';
    }
  }

  function imgLoad(){
    if(isset($_GET['id'])){
    echo 'image/'.$_GET['id'].'.jpg';
  }else {
    echo 'image/LIVERPOOL.jpg';
    }
  }
  function imgLoad_player($name){
    echo 'http://localhost:81/wordpress/wp-content/uploads/img_player/'.$name.'.png';
  }

  // My play styles

  function get_type_info($design){
  $num = (int) $design%25 +1;
  $conn = sql_connect();
  $sql = "
        SELECT*FROM ptype WHERE id =".$num;
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_array($result);
  return $row;
}

// 스타일에서 포지션 구하는 함수로 삭제해도 될듯 ?
  function getPostion($position){
    echo "http://localhost:81/wordpress/wp-content/uploads/position_icon/".$position.".png";
  }




 ?>
