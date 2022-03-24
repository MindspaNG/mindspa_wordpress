<?php 
/*
 * Plugin Name: Advanced scrollbar
 * Plugin URI:  https://bPlugins.com
 * Description: Customize scrollbar of your website with unlimited styling and color using the plugin. 
 * Version: 1.1
 * Author: bPlugins LLC
 * Author URI: https://bPlugins.com
 * License: GPLv3
 */
 
/*-------------------------------------------------------------------------------*/
/*   Rendering all javaScript
/*-------------------------------------------------------------------------------*/	

/* Latest jQuery of wordpress */
if ( ! function_exists( 'csb_wp_latest_jquery' ) ) :
function csb_wp_latest_jquery() {
	wp_enqueue_script('jquery');
}
add_action('init', 'csb_wp_latest_jquery');
endif;


/* nicescroll js */
if ( ! function_exists( 'csb_get_jquerynicescroll_script' ) ) :
function csb_get_jquerynicescroll_script(){    
    wp_enqueue_script( 'ppm-customscrollbar-js', plugin_dir_url( __FILE__ ) . 'js/jquery.nicescroll.min.js', array('jquery'), '20120206', false );
}
add_action('wp_enqueue_scripts', 'csb_get_jquerynicescroll_script');
endif;
/*-------------------------------------------------------------------------------*/
/*   Include all require file
/*-------------------------------------------------------------------------------*/	
require_once("inc/class.settings-api.php");
require_once("inc/fields.php");

/*-------------------------------------------------------------------------------*/
/*   Active the jquery Nicescroll plugin
/*-------------------------------------------------------------------------------*/	


if ( ! function_exists( 'ppm_customscrollbar_active_js' ) ) :
function ppm_customscrollbar_active_js(){
?>


<?php 
    function csb_retrive_option( $option, $section, $default = '' ) {

        $options = get_option( $section );

        if ( isset( $options[$option] ) ) {
            return $options[$option];
        }

        return $default;
    } 
    $scrollbar_color = csb_retrive_option( 'asb_color', 'wedevs_basics', '#46b3e6' );
    $scrollbar_width = csb_retrive_option( 'asb_width', 'wedevs_advanced', '10px' );
    $scrollbar_border = csb_retrive_option( 'asb_border', 'wedevs_advanced', '1px solid #fff' );
    $scrollbar_border_radius = csb_retrive_option( 'asb_border_radius', 'wedevs_advanced', '4px' );
    $scrollbar_speed = csb_retrive_option( 'asb_scrollspeed', 'wedevs_basics', '60' );
    $scrollbar_railalign= csb_retrive_option( 'asb_railalign', 'wedevs_basics','right' );

    $scrollbar_mousescrollstep = csb_retrive_option( 'asb_mousescrollstep', 'wedevs_basics','40');
    $scrollbar_autohidemode = csb_retrive_option( 'asb_autohidemode', 'wedevs_basics','false' );
    $scrollbar_touchbehavior = csb_retrive_option( 'asb_touchbehavior', 'wedevs_basics','off' );
    $scrollbar_background = csb_retrive_option( 'asb_background', 'wedevs_basics','' );
	if ($scrollbar_touchbehavior=="off"){$scrollbar_touchbehavior='false';}else {$scrollbar_touchbehavior='true';};
	if ($scrollbar_autohidemode=="true"){$scrollbar_autohidemode="true";}elseif($scrollbar_autohidemode=="false") {$scrollbar_autohidemode='false';}else{$scrollbar_autohidemode="\"cursor\"";};
?>  
<script>
(function ($) {
	"use strict";
    jQuery(document).ready(function($){       
            $("html").niceScroll({
				
                hwacceleration:true,
                cursorcolor: "<?php echo $scrollbar_color; ?>",
                cursorwidth: "<?php echo $scrollbar_width; ?>",
                cursorborder: "<?php echo $scrollbar_border; ?>",
                cursorborderradius: "<?php echo $scrollbar_border_radius; ?>",
                scrollspeed: <?php echo $scrollbar_speed; ?>,
                railalign: "<?php echo $scrollbar_railalign; ?>",
				background: "<?php echo $scrollbar_background; ?>",  
				touchbehavior:<?php echo $scrollbar_touchbehavior; ?>,
				mousescrollstep: <?php echo $scrollbar_mousescrollstep;?>,
				autohidemode: <?php echo $scrollbar_autohidemode;?>,   // working 
            });
    });
}(jQuery));	   
</script>

<?php
}
add_action('wp_footer', 'ppm_customscrollbar_active_js');
endif;