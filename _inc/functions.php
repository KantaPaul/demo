<?php
define('THEME', 'Biddyout');

function get_header($version = 'v1',$title = 'Home'){
	include('headers/header-'.$version.'.php');
}

function get_breadcumb($breadcumb_one_title = '', $breadcumb_two_title = '',  $version = '', $klass ='', $klass2 = ''){
	include('breadcumbs/breadcumb-'.$version.'.php');
}

function get_footer($version = 'v1', $klass = " "){
	include('footers/footer-'.$version.'.php');
}

function get_section($section = null, $klass = " "){
	include('sections/'.$section.'.php');
}

function get_navlink($section = null, $klass = " "){
	include('menu-links/'.$section.'.php');
}

function get_input($input = null, $placeholder = " ", $label = '', $id= '', $value = ''){
	include('input/'.$input.'.php');
}

function get_script($section = null, $title = 'Home'){
	include('scripts/'.$section.'.php');
}