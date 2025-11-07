<?php
function evenArray() {
    $arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    foreach ($arry as $value) {

        if ($value % 2 == 0) {
            echo $value;
        }
    }
}
?>
