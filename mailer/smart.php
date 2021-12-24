<?php 

$name = $_POST['name'];
$tel = $_POST['tel'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ITKUK@yandex.ru';                 // Наш логин
$mail->Password = 'qazwsx741852!';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('ITKUK@yandex.ru', 'ITKUK');   // От кого письмо 
$mail->addAddress('mk-servis21@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Жалобы и предложения';
$mail->Body    = '
		Пользователь оставил жалобу или предложение <br> 
	<b> Имя: </b> ' . $name . ' <br>
	<b> Номер телефона: </b> ' . $tel . '<br> <br>
	<b><p>  Жалоба или предложение: </p> </b> <p style=" text-indent: 20px;"> ' . $text . '</p>';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>