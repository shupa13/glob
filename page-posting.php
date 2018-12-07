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
<div style="max-width: 1120px; width: 100%; margin: auto">
	<?php echo do_shortcode('[instagram-feed num=16 cols=4 buttontext="More Posting" followtext="Follow _football_dor"]'); ?>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
