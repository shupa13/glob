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
    <div style="display:flex; flex-direction: column">
      <img class = "img_cell" style="width:80%; margin:auto" src = <?= return_src() ?>wp-content/uploads/inner_thumbnail/dreamclub.jpg>
      <div style = "display: flex; flex-direction: column; padding: 30px 10px; margin : 10px auto; width: 80%; background-color:#efefef; border-radius: 5px">
        <div style="display: flex">
          <img style="float: left; margin: auto; width: 40px; height: 100%" src =<?= return_src() ?>wp-content/uploads/emblem/<?= $row['club'] ?>.png >
          <h4 style="font-weight: bold; float: left; margin: auto 10px; flex-grow: 1"><?= $row['club'] ?></h4>
        </div>
        <?php echo do_shortcode('[TheChamp-Sharing url="https://www.naver.com" style=""]') ?>
      </div>
    </div>
	</div>

	<div class="aside">
		AD
	</div>
</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
