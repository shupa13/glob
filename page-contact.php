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

<div style="margin: 30px auto; display: flex">
	<div class="contact_form" style="margin-right: 30px">
		<h1> OPINION </h1>
		<h2>THANK YOU FOR OPINIOR</h2>
	</div>
	<div>
		<?php echo do_shortcode('[contact-form-7 id="218" title="Contact form 1"]'); ?>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
