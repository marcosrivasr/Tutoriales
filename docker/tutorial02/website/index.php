<?php
    $json = file_get_contents('http://products');
    $objs = json_decode($json)->products;
    
    foreach ($objs as $obj) {
        # code...
        echo "<li>$obj</li>";
    }
?>