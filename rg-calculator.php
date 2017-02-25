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

wp_enqueue_style('rgcalcStyle', RG_CALCULATOR_URL.'/assets/css/rgcalcStyle.css' );
wp_enqueue_script('angular', RG_CALCULATOR_URL.'/assets/js/vendor/angular.min.js' );
wp_enqueue_script('rgcalcApplication', RG_CALCULATOR_URL.'/assets/calcApp.js' );
wp_enqueue_script('rgcalcVizComponent', RG_CALCULATOR_URL.'/assets/components/vizitki/viz.component.js' );
wp_enqueue_script('rgcalcMagnetsComponent', RG_CALCULATOR_URL.'/assets/components/magnets/magnets.component.js' );
wp_enqueue_script('rgcalcStickersComponent', RG_CALCULATOR_URL.'/assets/components/stickers/stickers.component.js' );
wp_enqueue_script('rgcalcNoteBooksComponent', RG_CALCULATOR_URL.'/assets/components/notebooks/notebooks.component.js' );
wp_enqueue_script('rgcalcEnvepolesComponent', RG_CALCULATOR_URL.'/assets/components/envelopes/envelopes.component.js' );
wp_enqueue_script('rgcalcLeafletsComponent', RG_CALCULATOR_URL.'/assets/components/leaflets/leaflets.component.js' );
wp_enqueue_script('rgcalcBookletsComponent', RG_CALCULATOR_URL.'/assets/components/booklets/booklets.component.js' );
wp_enqueue_script('rgcalcBrochuresComponent', RG_CALCULATOR_URL.'/assets/components/brochures/brochures.component.js' );


wp_enqueue_script('rgcalcDataServ', RG_CALCULATOR_URL.'/assets/services/data.service.js' );
wp_enqueue_script('rgcalcCalcServ', RG_CALCULATOR_URL.'/assets/services/calc.service.js' );


add_shortcode('rg-calc', 'calculator_view_init');

function calculator_view_init($atts) {
  // extract(shortcode_atts(array(
  //       'width' => 400,
  //       'height' => 200,
  //    ), $atts));
  return '<div ng-app="calcApp"><div class="calc-container">брошюры<hr color="red"><brochures-elem></brochures-elem><hr color="red"></div><div class="calc-container">буклеты<hr color="red"><booklets-elem></booklets-elem><hr color="red"></div><div class="calc-container">листовки<hr color="red"><leaflets-elem></leaflets-elem><hr color="red"></div><div class="calc-container">конверты<hr color="red"><envelopes-elem></envelopes-elem><hr color="red"></div><div class="calc-container">блокноты<hr color="red"><notebooks-elem></notebooks-elem><hr color="red"></div><div class="calc-container">наклейки<hr color="red"><stickers-elem></stickers-elem><hr color="red"></div><div class="calc-container">магниты<hr color="red"><magnets-elem></magnets-elem><hr color="red"></div><div class="calc-container">визитки<hr color="red"><viz-elem></viz-elem><hr color="red"></div></div>';
};

?>
