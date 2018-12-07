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

	<div class="container home">
		<div class="game-item home"><?= load_game('threemid', $arr_desc['threemid']) ?></div>
		<div class="game-item home"><?= load_game('worldcup_df', $arr_desc['worldcup_df']) ?></div>
		<div class="game-item home"><?= load_game('myhero', $arr_desc['myhero']) ?></div>
		<div class="game-item home"><?= load_game('dreamclub', $arr_desc['dreamclub']) ?></div>
		<div class="game-item home"><?= load_game('whoameye', $arr_desc['whoameye']) ?></div>
		<div class="game-item home"><?= load_game('doppy', $arr_desc['doppy']) ?></div>
	</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
