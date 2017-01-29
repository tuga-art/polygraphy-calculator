<?php
/*
Plugin Name: rg-polygraphy-calculator
Plugin URI: http://www.redgrass.by
Description: Calculating cost of polygraphy production
Version: 1.0
Author: tuga.art
Author URI: https://www.linkedin.com/in/artem-tugarinov-38a919113
Author Email: tuga.art@gmail.com
*/
/*  Copyright 2016  Artem Tugarinov  (email: tuga.art@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

define( 'RGCALC_PLUGIN_NAME', dirname(plugin_basename(__FILE__)) );
define( 'RG_CALCULATOR_DIR', WP_PLUGIN_DIR . '/' . RGCALC_PLUGIN_NAME );
define( 'RG_CALCULATOR_URL', WP_PLUGIN_URL  . '/' . RGCALC_PLUGIN_NAME );

wp_enqueue_style('semanticUi', RG_CALCULATOR_URL.'/assets/css/vendor/semantic.min.css' );
wp_enqueue_style('rgcalcStyle', RG_CALCULATOR_URL.'/assets/css/rgcalcStyle.css' );
wp_enqueue_script('angular', RG_CALCULATOR_URL.'/assets/js/vendor/angular.min.js' );
wp_enqueue_script('ng-route', RG_CALCULATOR_URL.'/assets/js/vendor/angular-route.min.js');
wp_enqueue_script('rgcalcApplication', RG_CALCULATOR_URL.'/assets/js/calcApp.js' );
wp_enqueue_script('rgcalcVizComponent', RG_CALCULATOR_URL.'/assets/components/vizitki/viz.component.js' );

add_shortcode('rg-calc', 'calculator_view_init');

function calculator_view_init($atts) {
  // extract(shortcode_atts(array(
  //       'width' => 400,
  //       'height' => 200,
  //    ), $atts));
  return '<div ng-app="calcApp"><div ng-controller="MainCtrl" id="polygraphy-calculator"><div class="calc-container ui tiny form"><div class="field"><select ng-model="product" ng-options="record.prodName for record in prodBase"></select></div><hr color="red"><viz-elem></viz-elem></div></div></div>';
};

?>
