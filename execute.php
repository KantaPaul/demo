<?php 

function make_static($f){
    ob_start();
    
    include($f);
    
    $out1 = ob_get_contents();
    ob_end_clean();
    
    file_put_contents('export/'.$f, $out1);
}



foreach(glob('*.*') as $file) {
    $fn = explode('.', $file);
    $fn = reset($fn);

    if (!in_array($fn, ['execute', 'index'])) {
         rename($file, $fn . '.html');
    }
   
   echo "$fn <br/>";    

}

// function xcopy($source, $dest, $permissions = 0755)
// {
//     // Check for symlinks
//     if (is_link($source)) {
//         return symlink(readlink($source), $dest);
//     }

//     // Simple copy for a file
//     if (is_file($source)) {
//         return copy($source, $dest);
//     }

//     // Make destination directory
//     if (!is_dir($dest)) {
//         mkdir($dest, $permissions);
//     }

//     // Loop through the folder
//     $dir = dir($source);
//     while (false !== $entry = $dir->read()) {
//         // Skip pointers
//         if ($entry == '.' || $entry == '..') {
//             continue;
//         }

//         // Deep copy directories
//         xcopy("$source/$entry", "$dest/$entry", $permissions);
//     }

//     // Clean up
//     $dir->close();
//     return true;
// }

