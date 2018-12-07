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
<?php $dream = explode(',',$_POST['dream']); ?>
<?php
  $sql = '
  SELECT * FROM dreamclub where LN ="'
  .$dream[0].'" and SZ ="'
  .$dream[1].'" and SM ="'
  .$dream[2].'" and HY ="'
  .$dream[3].'"';

  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_array($result);
 ?>

<div class="container game">
  <?php call_nav() ?>
	<div class="main">
    <div class="game-item res">
      <img class = "img_cell" src = <?= return_src($arr_thumb_inr['dreamclub']) ?>>

      <div>
        <h1><?= $row['club'] ?></h1>
        <h4>MY DREAM CLUB</h4>
        <div class = "sns_share">
          <?php echo do_shortcode('[korea_sns_pro_button link="http://footballdor.com/dreamclub" title="WHERE IS MY DREAM CLUB ?"]') ?>
          <?php echo do_shortcode('[TheChamp-Sharing url="http://footballdor.com/dreamclub" style=""]') ?>
        </div>
      </div>
    </div>
	</div>
  <?= call_ad(); ?>

</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
