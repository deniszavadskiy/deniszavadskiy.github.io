<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$address = $_POST['address'];
$placement = $_POST['placement'];
$rooftype = $_POST['rooftype'];
$appointment = $_POST['appointment'];
$load = $_POST['load'];
$consumptionsummer = $_POST['consumptionsummer'];
$consumptionwinter = $_POST['consumptionwinter'];
$devices = $_POST['devices'];
$comment = $_POST['comment'];


$from = 'ukrenhold@gmail.com';


$message = "Інформація про замовника з сайту." . "\r\n" . "Поля форми:" . "\r\n" . "Замовник: " . $name . "\r\n" . "Телефон: " . $phone . "\r\n" . "Електронна пошта: " . $email . "\r\n" . "Адреса: " . $address . "\r\n" . "Місце встановлення: " . $placement . "\r\n" . "Тип даху і покриття: " . $rooftype . "\r\n" . "Призначення: " . $appointment . "\r\n" . "Навантаження на покрівлю: " . $load . "\r\n" . "Середнє споживання влітку: " . $consumptionsummer . " КВт*г за місяць" . "\r\n" . "Середнє споживання взимку: " . $consumptionwinter . " КВт*г за місяць" . "\r\n" . "Встановлені пристрої: " . $devices . "\r\n" . "Коментар замовника: " . $comment;

echo $message;
$message = wordwrap($message, 70, "\r\n");


mail('oleg.merg.user@gmail.com', 'Інформація з сайту про замовника', $message, 'From:'.$from);
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';

exit();


    ?>