<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Glob
 */

get_header(); ?>
<?php require('lib/print.php'); ?>

<div class="container game">
	<?php call_nav() ?>
	<div class="main">
			<img src=<?= return_src() ?>wp-content/uploads/inner_thumbnail/doppy.png style="width: 100%; padding-left: 20px; padding-right: 20px" />
			<div class="game-item doppy">
				<h5>Who is my doppleganger ?</h5>

				<form action=<?= return_url() ?>dofy_process method="post">
					<p><input name="height" type="text" placeholder="Height"/></p>
					<p><input name="weight" type="text" placeholder="Weight"/></p>
					<p><input type="submit" value="Search Doppy" /></p>
				</form>
		</div>
	</div>
	<div class="aside">AD</div>
</div>
	<?php get_sidebar(); ?>
	<?php get_footer(); ?>
