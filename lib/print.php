<?php
       $arr_desc = array(
        'doppy'=>'YOUR DOPPLEGANGER ?',
        'myhero'=>'WHO IS YOUR FOOTBALL HERO ?',
        'whoameye'=>'GUESS PLAYERS WITH ONLY EYES',
        'threemid'=>'MAKE YOUR BEST 3 MF LINE',
        'dreamclub'=>'WHRE IS YOUR DREAM CLUB ?',
        'worldcup_df'=>'YOUR FAVORITE CENTER BACK !'
      );
  function sql_connect(){
    $conn = mysqli_connect("localhost", "shupa13", "tivjakfl5@", "shupa13");
  //  $conn = mysqli_connect("localhost:3307", "root", "tivjakfl5", "opentutorials");
    return $conn;
  }


    function return_src($res){
      $src = "https://i.imgur.com/".$res.'.png';
      $local = "http://localhost:81/wordpress/";
      return $src;
    }

    function return_url(){
      $url = "http://footballdor.com/";
      $local = "http://localhost:81/wordpress/";
      return $url;
    }

    function load_game($game, $desc){
      require('code/thumb.php');
      $src = 'https://i.imgur.com/'.$arr_thumb[$game].'.png';
    	$ss = '
    	<a href="'.$game.'">
    		<img class="game-thumbnail" style="" src= "'.$src.'"></img>
        <div>'.$desc.'</div>
    	</a>';
      return $ss;
    }

    function img_src($game){
      $src = 'https://fdurl.com/'.$game.'_main';
    }

    function call_nav(){

      echo '
      <div class="nav">
        <div class="game-item">'.load_game("threemid", "").'</div>
        <div class="game-item">'.load_game("worldcup_df", "").'</div>
        <div class="game-item">'.load_game("myhero", "").'</div>
        <div class="game-item">'.load_game("dreamclub", "").'</div>
        <div class="game-item">'.load_game("whoameye", "").'</div>
        <div class="game-item">'.load_game("doppy", "").'</div>
      </div>
      ';
    }

    function call_ad(){
      $AD =  '
        	<div class="aside">
          </div>';

      return $AD;
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

 ?>
