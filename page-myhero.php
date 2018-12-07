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

<div class="container game">
	<?php call_nav() ?>

	<div class="main">
		<h3 class="game-item desc"></h3>
		<div class="game-item option"></div>
		<script>
		(function(){
			myhero_init();
			}())
 		</script>
	</div>

	<?= call_ad(); ?>

</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
