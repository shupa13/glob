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
<?php require('lib/code/thumb.php'); ?>
<?php $conn = sql_connect(); ?>

<?php
  $filtered = array(
    'height'=>htmlspecialchars($_POST['height']),
    'weight'=>htmlspecialchars($_POST['weight'].'kg')
  );
  $sql = '
      SELECT '.$filtered['weight'].' FROM ptable
      WHERE height='.$filtered['height'];

  $msg = '<h1>';
  if($result = mysqli_query($conn, $sql)){
    $row = mysqli_fetch_array($result);
    $player_id = $row[$filtered['weight']];
    $sql = '
      SELECT * FROM plist WHERE id ='.$player_id;
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    if($row == null){
      $msg = $msg."We can't search proper player</h1><h2>Please adjust your range</h2>";
    }else {
      $msg = $msg.$row['name'].'</h1><h2>'.$row['team'].'</h2>';
    }
  }else {
    $msg = $msg."We can't search proper player</h1><h2>Please adjust your range</h2>";
  }

  ?>

  <div class="container game">
    <?php call_nav() ?>
  	<div class="main">
      <div class="game-item res">
        <img class="img_cell" style="max-width:400px; margin: 0" src=<?= return_src($arr_thumb_inr['doppy']) ?> >
        <div>
          <?= $msg ?>
          <div class = "sns_share">
            <?php echo do_shortcode('[korea_sns_pro_button link="http://footballdor.com/doppy" title="WHO IS MY DOPPELGANGER"]') ?>
            <?php echo do_shortcode('[TheChamp-Sharing url="http://footballdor.com/doppy" style=""]') ?>
          </div>



        </div>
      </div>
  	</div>
    <?= call_ad(); ?>

  </div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
