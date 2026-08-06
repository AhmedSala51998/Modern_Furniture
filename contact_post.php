<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

date_default_timezone_set('Asia/Riyadh');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $mail = new PHPMailer(true);

    $lang = $_POST['lang'] ?? 'en';

    try {

        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@modernfurnitureco.net';
        $mail->Password   = 'ModernFurniture2034@#';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        $mail->setFrom('info@modernfurnitureco.net', 'Modern Furniture');
        $mail->addReplyTo($_POST['email'], htmlspecialchars($_POST['name']));
        $mail->addAddress('info@modernfurnitureco.net', 'Modern Furniture');

        // Logo
        $logoUrl = 'https://modernfurnitureco.net/img/logo.png';

        /* ==============================
           LANGUAGE SWITCH
        ============================== */

        if($lang === 'ar'){

            $mail->Subject = 'طلب استشارة جديد';

            $dir = 'rtl';
            $align = 'right';

            $title = 'استفسار مشروع جديد';
            $receivedText = 'تم استلام طلب جديد من نموذج التواصل في موقع مودرن فيرنتشر.';
            $clientName = 'اسم العميل';
            $emailText = 'البريد الإلكتروني';
            $projectType = 'اسم الموضوع';
            $projectDetails = 'تفاصيل المشروع';
            $sentOn = 'تم الإرسال بتاريخ';
            $companyText = 'مودرن فيرنتشر - تشطيبات منزليه وأعمال الديكورات';

            $successMessage = 'تم إرسال طلبك بنجاح!';
            $invalidMethod = 'طريقة الطلب غير صحيحة';
            $phoneText = 'رقم الجوال';
            $projectText = 'نوع المشروع';

        } else {

            $mail->Subject = 'New Construction Consultation Request';

            $dir = 'ltr';
            $align = 'left';

            $title = 'New Project Inquiry';
            $receivedText = 'You have received a new request from modern furniture website contact form.';
            $clientName = 'Client Name';
            $emailText = 'Email';
            $projectType = 'Subject Title';
            $projectDetails = 'Project Details';
            $sentOn = 'Sent on';
            $companyText = 'Modern Furniture - Home Finishing & Interior Decoration Works';

            $successMessage = 'Your request has been sent successfully!';
            $invalidMethod = 'Invalid request method';
            $phoneText = 'Phone Number';
            $projectText = 'Project Type';
        }

        /* ==============================
           EMAIL BODY
        ============================== */

        $body = '
        <div style="background:#f5f7fb;padding:40px 20px;font-family:Arial,sans-serif">

            <table width="650" align="center" cellpadding="0" cellspacing="0"
                  style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 3px 15px rgba(0,0,0,.08);">

                <tr>
                    <td style="background:rgba(228,51,45,0.03);padding:35px;text-align:center">

                        <img src="'.$logoUrl.'" style="max-width:180px;margin-bottom:15px">

                        <h1 style="margin:0;color:#fff;font-size:28px">
                            Modern Furniture
                        </h1>

                        <p style="margin-top:10px;color:#fff;font-size:15px">
                            New Contact Form Submission
                        </p>

                    </td>
                </tr>

                <tr>
                    <td style="padding:35px">

                        <h2 style="margin-top:0;color:#222">
                            Contact Details
                        </h2>

                        <table width="100%" cellpadding="12" cellspacing="0"
                              style="border-collapse:collapse">

                            <tr style="background:#f8f9fc">
                                <td width="180"><strong>Client Name</strong></td>
                                <td>'.htmlspecialchars($_POST['name']).'</td>
                            </tr>

                            <tr>
                                <td><strong>Email Address</strong></td>
                                <td>
                                    <a href="mailto:'.htmlspecialchars($_POST['email']).'">
                                        '.htmlspecialchars($_POST['email']).'
                                    </a>
                                </td>
                            </tr>

                            <tr style="background:#f8f9fc">
                                <td><strong>Phone Number</strong></td>
                                <td>'.htmlspecialchars($_POST['phone']).'</td>
                            </tr>

                            <tr>
                                <td><strong>Project Type</strong></td>
                                <td>'.htmlspecialchars($_POST['project']).'</td>
                            </tr>

                            <tr style="background:#f8f9fc">
                                <td><strong>Subject</strong></td>
                                <td>'.htmlspecialchars($_POST['subject']).'</td>
                            </tr>

                        </table>

                        <h3 style="margin-top:35px;color:#222">
                            Client Message
                        </h3>

                        <div style="
                            background:#f8f9fc;
                            border-left:4px solid #e4332d;
                            padding:20px;
                            line-height:1.8;
                            color:#444;
                            border-radius:6px;
                        ">
                            '.nl2br(htmlspecialchars($_POST['message'])).'
                        </div>

                        <hr style="margin:35px 0;border:none;border-top:1px solid #eee">

                        <table width="100%">
                            <tr>
                                <td>
                                    <strong>Submission Date</strong><br>
                                    '.date('Y-m-d h:i A').'
                                </td>

                                <td align="right">
                                    <strong>Website</strong><br>
                                    modernfurnitureco.net
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <tr>
                    <td style="
                        background:#222;
                        color:#fff;
                        text-align:center;
                        padding:25px;
                        font-size:13px;
                    ">

                        © '.date('Y').' Modern Furniture<br>

                        Home Finishing & Interior Decoration Works

                    </td>
                </tr>

            </table>

        </div>';

        $mail->isHTML(true);
        $mail->Body = $body;

        $mail->send();

        echo json_encode([
            'status' => 'success',
            'message' => $successMessage
        ]);

    } catch (Exception $e) {

        echo json_encode([
            'status' => 'error',
            'message' => 'Mail Error: '.$mail->ErrorInfo
        ]);
    }

} else {

    echo json_encode([
        'status' => 'error',
        'message' => $invalidMethod ?? 'Invalid request method'
    ]);
}