<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Llamar a la función si la request es de tipo POST
    sendEmail();
}

function sendEmail()
{
    // Recibir datos del formulario
    $nombre = $_POST['nameCon'];
    $email = $_POST['emailCon'];
    $telefono = $_POST['phoneCon'];
    $mensaje = $_POST['messageCon'];
    $pref = $_POST['preferenceCon'];

    // Configurar la instancia de PHPMailer
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'mail.smtp2go.com';  // Host del servidor SMTP
    $mail->SMTPAuth = true;                 // Habilitar autenticación SMTP
    $mail->Username = 'ping@nautec.com.ar'; // Tu dirección de correo electrónico
    $mail->Password = 'De00i6SC8uBm5cey';       // Tu contraseña de correo electrónico
    $mail->SMTPSecure = 'tls';               // Habilitar cifrado TLS
    $mail->Port = 587;                       // Puerto SMTP

    // Configurar el contenido del correo electrónico
    $mail->setFrom($email, $nombre);
    $mail->addAddress('ping@nautec.com.ars', 'Nautec');
    $mail->Subject = $pref;
    $mail->Body = $mensaje;

    // Procesar el envío del correo electrónico
    if (!$mail->send()) {
        echo 'El mensaje no pudo ser enviado.';
        echo 'Error: ' . $mail->ErrorInfo;
    } else {
        echo 'El mensaje ha sido enviado exitosamente.';
    }
}
?>