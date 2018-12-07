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

<?php $conn = sql_connect();?>
<?php
  $sql = '
    SELECT * FROM worldcup_df';
  $result = mysqli_query($conn, $sql);

  $arr = array();
  while ($row = mysqli_fetch_array($result)) {
    array_push($arr, $row['name']);
  }
 ?>

<div class="container game">
  <?php call_nav() ?>

	<div class="main">
    <h3 class="game-item desc"></h3>
    <div class="game-item worldcup" style="flex-direction: column">
      <img src=<?= return_src($arr_thumb_inr['worldcup']) ?> class="thumbnail" />
      <button type="button" value=<?= json_encode($arr) ?> name="button" onclick="worldcup_set(this)">GAME START</button>
      <!--
      <img class="img_cell selector" src=<?= return_src() ?>wp-content/uploads/dreamclub/party.png onclick="select_dream('party')">
      <img class="img_cell selector" src=<?= return_src() ?>wp-content/uploads/dreamclub/club.png onclick="select_dream('club')">
    -->
    </div>
	</div>

  <?= call_ad(); ?>

</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
