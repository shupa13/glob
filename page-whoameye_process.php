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
<?php $conn = sql_connect(); ?>
<?php $score = $_POST['score']; ?>

<div class="container game">
  <?php call_nav() ?>
	<div class="main">
    <div class="game-item res">
      <img class = "img_cell" style="max-width: 450px; margin: 0" src = <?= return_src($arr_thumb_inr['whoameye']) ?>>
      <div>
        <?php echo get_msg($score); ?>
        <div class = "sns_share">
          <?php echo do_shortcode('[korea_sns_pro_button link="http://footballdor.com/whoameye" title="WHO AM EYE ? LET ME GUESS"]') ?>
          <?php echo do_shortcode('[TheChamp-Sharing url="http://footballdor.com/whoameye" style=""]') ?>
        </div>
      </div>
    </div>
	</div>
  <?= call_ad(); ?>

</div>


<?php
   function get_msg($score){
     $msg;
     switch($score){
       case 0 :
         $msg = '<h1>JUNIOR</h1><h2>Don\'t worry you are just beginner. you can be better</h2>';
         break;
       case 10 : case 20 : case 30 : case 40 :
         $msg = '<h1>AMATUER</h1><h2>Not bad. but you can be better if you love football steadily</h2>';
         break;
       case 50 : case 60 : case 70 :
         $msg = '<h1>SEMI PRO</h1><h2>You are passionate fan. you definitely love football</h2>';
         break;
       case 80 : case 90 :
         $msg = '<h1>PRO</h1><h2>I think you are football genius. you have outstanding insight</h2>';
         break;
       case 100 :
         $msg = '<h1>WORLD CLASS</h1><h2>Unbelievable I\'m sure you are Pep Guardiola or Jurgen Klopp</h2>';
         break;
     }
     return $msg;
   }
   ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
