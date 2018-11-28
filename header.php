<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package glob
 */
$site_identity_position = get_theme_mod( 'glob_logo_position', 'left' );
$primary_nav_layout = get_theme_mod( 'glob_nav_layout', 'boxed' );
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="http://localhost:81/wordpress/wp-content/themes/glob/funcs.js"></script>
	<script src="http://shupa13.cafe24.com/wp-content/themes/glob/funcs.js"></script>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/mobile.css" media="screen">.
	<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'glob' ); ?></a>
	<!-- begin .header-mobile-menu -->
	<nav class="st-menu st-effect-1" id="menu-3">
		<div class="btn-close-home">
			<button class="close-button" id="closemenu"></button>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="home-button"><i class="fa fa-home"></i></a>
		</div>
		<?php wp_nav_menu( array('theme_location' => 'primary','echo' => true,'items_wrap' => '<ul>%3$s</ul>')); ?>
		<?php get_search_form( $echo = true ); ?>
	</nav>
	<!-- end .header-mobile-menu -->
	<header id="masthead" class="site-header<?php echo ' site-identity-'.esc_attr( $site_identity_position ) ?>" role="banner">
		<div class="container header">
		<!--	<button class="top-mobile-menu-button mobile-menu-button" data-effect="st-effect-1" type="button"><i class="fa fa-bars"></i></button>-->
            <div id="site-branding">
                <?php glob_site_branding(); ?>
            </div>
			<div class="site-header-sidebar">
				<?php if ( is_active_sidebar( 'header-sidebar' ) ) { ?>
					<div class="header-sidebar">
						<?php dynamic_sidebar( 'header-sidebar' ); ?>
					</div>
				<?php } ?>
			</div>

		</div>
	</header><!-- #masthead -->
	<nav id="site-navigation" class="mobile-navigation" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
	</nav><!-- #site-navigation -->
	<div class="navigation-wrapper<?php echo ' nav-layout-'.esc_attr( $primary_nav_layout ) ?>">
		<div class="container">
			<div class="navigation-search-wrapper clear">
				<nav id="site-navigation" class="main-navigation" role="navigation">
						<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
				</nav><!-- #site-navigation -->
				<div class="nav-search">
					<div class="search-icon"><i class="fa fa-search"></i></div>
					<div class="dropdown-search">
						<?php get_search_form( $echo = true ); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
    <?php do_action( 'glob_after_nav' ); ?>
	<div id="content" class="site-content">