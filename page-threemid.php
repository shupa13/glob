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

<?php
  $sql = "select * from threemid";
  $result = mysqli_query($conn, $sql);
?>

<div class="container game">
  <?php call_nav() ?>

	<div class="main">
      <h3 class="extra_money">Best 3 MF Combination <font color='yellow'>10 $</font></h3>
      <div class="game-item threemid">
        <?php
        $num = 0;
          while ($row = mysqli_fetch_array($result)) {
            $player = array(
              "name" => mysqli_real_escape_string($conn, $row['name']),
              "cost" => mysqli_real_escape_string($conn,$row['cost'])
            );
            if($num%6 == 0){
              echo '<div class = "price_table"><h1>'.$player['cost'].'$</h1></div>';
            }
            $num++;
              ?>
              <div style="display: flex; flex-direction: column">
                <input type="image" class = "img_cell mid <?= $player['name']; ?>" value=<?= json_encode($player);
                ?>
                src = <?= return_src() ?>wp-content/uploads/threemid/<?= $player['name']; ?>.png onclick="threetop_select(this);">
                <h6><?= $player['name'] ?></h6>
              </div>
              <?php
          }
         ?>
      </div>
      <form action=<?= return_url() ?>threemid_process method="post" style="margin: 20px auto">
        <input type="hidden" id="player_list" name="player_list" value="">
        <input type="submit" value="submit">
      </form>
	</div>

	<div class="aside">
		AD
	</div>
</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
