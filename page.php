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
		<div class="game-item home"><?= load_game('doppy', $desc_doppy) ?></div>
		<div class="game-item home"><?= load_game('myhero', $desc_myhero) ?></div>
		<div class="game-item home"><?= load_game('whoameye', $desc_whoameye) ?></div>
		<div class="game-item home"><?= load_game('fastfind', $desc_fastfind) ?></div>
		<div class="game-item home"><?= load_game('threemid', $desc_threemid) ?></div>
		<div class="game-item home"><?= load_game('style', $desc_style) ?></div>
		<div class="game-item home"><?= load_game('reflex', $desc_reflex) ?></div>
		<div class="game-item home"><?= load_game('dreamclub', $desc_dreamclub) ?></div>
	</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
