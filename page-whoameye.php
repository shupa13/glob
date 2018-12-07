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
  $sql = '
    SELECT * FROM whoameye';
  $result = mysqli_query($conn, $sql);
  $arr = array();
  while($row = mysqli_fetch_array($result)){
    array_push($arr, $row['name']);
  }
 ?>
<div class="container game">
	<?php call_nav() ?>
	<div class="main">
    <div class="game-item whoameye">
      <div class="whoami-item left"></div>
      <div class="whoami-item center">
        <img src =<?= return_src($arr_thumb_inr['whoameye']) ?> class="thumbnail">
        <button type="button" value=<?= json_encode($arr); ?> onclick="whoameye_set(this);">GAME START</button>
      </div>
      <div class="whoami-item right"></div>
    </div>
    <h4 class="whoameye_stage"></h4>
	</div>
  <?= call_ad(); ?>

</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
