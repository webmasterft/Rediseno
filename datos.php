<?php 
	$seccion = $_POST['sec'];
	$dir = 'pdf/thumbs/' . $seccion .'/';
	$filecount = count(glob($dir . "*.jpg"));
	if($filecount>0){
	?>
		<ul id="thumbs">
		<?php		
			foreach(glob($dir.'*.jpg') as $file) {
				$pdf =  end(explode("/",$file));
				$pdf = current(explode(".",$pdf));
			    print '<li>
			    		<a target="_blank" href="pdf/'. $seccion .'/'. $pdf. '.pdf">
			    			<img src="'.$file.'"/>
			    		</a>	
			    	</li>';
			}
		?>
		</ul>
	<?php } ?>


