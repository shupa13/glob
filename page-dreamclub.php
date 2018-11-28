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
<?php $conn = sql_connect();?>


<div class="container game">
  <?php call_nav() ?>

	<div class="main">
    <h3 class="dream_category">BIRTHDAY</h3>
    <div class="game-item dreamclub">
      <img class="img_cell selector dream" src=<?= return_src() ?>wp-content/uploads/dreamclub/party.png onclick="select_dream('party')">
      <img class="img_cell selector dream" src=<?= return_src() ?>wp-content/uploads/dreamclub/club.png onclick="select_dream('club')">
    </div>
	</div>

	<div class="aside">
		AD
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
