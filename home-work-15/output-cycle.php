    <?php
    function output_cycle($htmlTeg, $text, $count)
    {
        while ($count > 0) {
            echo "<$htmlTeg>$text $count</$htmlTeg>";
            $count--;
        }
    }
    ?>