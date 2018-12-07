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
<?php require('lib/code/player.php'); ?>
<?php $conn = sql_connect(); ?>

<?php
  $code = $_POST['code'];
  $talent = explode(',', $_POST['talent']);
  $sql = 'select * from myhero where code = '.$code;
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_array($result);
  ?>

  <div class="container game">
  	<?php call_nav() ?>

  	<div class="main">
      <div class="result myhero">
        <?php $src = $arr_myhero[$row['name']] ?>
        <img class = "img_cell" src=<?= return_src($src) ?>>
        <div>
          <h1><?= $row['name'] ?></h1>
          <ul>
          <?php
            for($i=0; $i<count($talent); $i++){
              echo '
              <li>
                <h3 style="display : inline; margin-left : 5px">'.$talent[$i].'</h3>
              </li>
              ';
            }
           ?>
         </ul>
        </div>
      </div>
      <div class = "sns_share">
        <?php echo do_shortcode('[korea_sns_pro_button link="http://footballdor.com/myhero" title="WHO IS MY HERO ?"]') ?>
        <?php echo do_shortcode('[TheChamp-Sharing url="http://footballdor.com/myhero" style=""]') ?>
      </div>
  	</div>

    <?= call_ad(); ?>

  </div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
