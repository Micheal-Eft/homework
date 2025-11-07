<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    include "output.php";
    include "output-cycle.php";
    include "counter-even.php";

    output('div', 'Text');
    ?>

    <br>

    <?php
    output_cycle('div', 'Text', 10);
    ?>

    <br>

    <?php
    evenArray()
    ?>


</body>

</html>