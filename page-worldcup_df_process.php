<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package Sydney
 */

get_header(); ?>
<?php require('lib/print.php'); ?>
<?php require('lib/code/player.php'); ?>
<?php $conn = sql_connect(); ?>
<?php
  $filtered = array(
    'champion'=> mysqli_real_escape_string($conn, $_POST['champion']),
    'runner_up'=> mysqli_real_escape_string($conn, $_POST['runner_up'])
  );

  // 우승자, 준우승자 데이터 DB에 입력

  $game = 'worldcup_df';

  $sql = '
      UPDATE '.$game.' SET champion = champion + 1 WHERE name = "'.$filtered['champion'].'"';
  $result = mysqli_query($conn, $sql);
  $sql = '
      UPDATE '.$game.' SET runner_up = runner_up + 1 WHERE name = "'.$filtered['runner_up'].'"';
  $result = mysqli_query($conn, $sql);

  // 총 참여자 수 계산
  $sql = '
      SELECT SUM(champion) from '.$game;
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_array($result);
  $participants = intval($row['SUM(champion)']);

  $arr = array();
  array_push($arr, worldcup_data_get($game,'champion',$conn));
  array_push($arr, worldcup_data_get($game,'runner_up',$conn));
  ?>
  <div class="container game">
    <?php call_nav() ?>

  	<div class="main">
      <div class="game-item worldcup_res">
           <img class = "img_cell result" src = <?= return_src($arr_worldcup[$filtered['champion']]) ?>>
           <div>
             <h2><?= $filtered['champion']; ?></h2>
             <h4>MY CHAMPION</h4>
             <div class = "sns_share">
               <?php echo do_shortcode('[korea_sns_pro_button link="http://footballdor.com/worldcup_df" title="DF WORLDCUP ! THE BEST DF!"]') ?>
               <?php echo do_shortcode('[TheChamp-Sharing url="http://footballdor.com/worldcup_df" style=""]') ?>
             </div>
           </div>
         <?php
         ?>
       </div>
       <h3 class = "selected" >MOST SELECTED</h3>
         <div class="vote-menu">
           <button type="button" id = "vote_champion" value =<?= $arr[0] ?> onclick="vote_category(this)">CHAMPION</button>
           <button type="button" id = "vote_runner_up" value =<?= $arr[1] ?> onclick="vote_category(this)">RUNNER_UP</button>
         </div>
         <div class="vote_result"></div>
         <input type="hidden" id = "total_participants" value=<?= $participants ?>>
    </div>
    <?= call_ad(); ?>

  </div>

 <?php
  function worldcup_data_get($game, $type, $conn){
    $arr = array();
      $sql = '
        SELECT * FROM '.$game.' ORDER BY '.$type.' DESC';
    $result = mysqli_query($conn, $sql);
    for($i=0; $i<6; $i++){
      $row = mysqli_fetch_array($result);
      $temp_arr = array(
        'name' => $row['name'],
        'vote' => $row[$type]
      );
      array_push($arr, $temp_arr);
    }
    return json_encode($arr);
  }
  ?>

 <?php get_sidebar(); ?>
 <?php get_footer(); ?>
