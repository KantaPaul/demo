<html>
	<head>
		<title>LegalPro Files / Folders</title>
		<link rel="stylesheet" href="../legalpro/inc_php/style.css">
	</head>
    <div>
		<?php
		foreach ( glob( "*.html" ) as $file ):
			?>
			<a target="_blank" href="<?php echo $file; ?>" ><?php echo $file; ?></a> <br />
			<?php
		endforeach;
		?>
	</div>
</html>
