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

            $mail->Subject = 'New Construction Request';

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


        $dir   = ($lang == 'ar') ? 'rtl' : 'ltr';
        $align = ($lang == 'ar') ? 'right' : 'left';

        $title           = ($lang == 'ar') ? 'استفسار جديد من الموقع' : 'New Website Inquiry';
        $detailsTitle    = ($lang == 'ar') ? 'بيانات العميل' : 'Client Information';
        $messageTitle    = ($lang == 'ar') ? 'رسالة العميل' : 'Client Message';
        $dateTitle       = ($lang == 'ar') ? 'تاريخ الإرسال' : 'Submission Date';
        $websiteTitle    = ($lang == 'ar') ? 'الموقع الإلكتروني' : 'Website';

        $clientNameText  = ($lang == 'ar') ? 'اسم العميل' : 'Client Name';
        $emailText       = ($lang == 'ar') ? 'البريد الإلكتروني' : 'Email Address';
        $phoneText       = ($lang == 'ar') ? 'رقم الجوال' : 'Phone Number';
        $projectText     = ($lang == 'ar') ? 'نوع المشروع' : 'Project Type';
        $subjectText     = ($lang == 'ar') ? 'الموضوع' : 'Subject';

        /* ==============================
           EMAIL BODY
        ============================== */

        $body = '

        <div dir="'.$dir.'" style="
        background:#f5f7fb;
        padding:40px 15px;
        font-family:Tahoma,Arial,sans-serif;
        direction:'.$dir.';
        text-align:'.$align.';
        ">

        <table width="650"
              cellpadding="0"
              cellspacing="0"
              align="center"
              dir="'.$dir.'"
              style="
              max-width:650px;
              width:100%;
              background:#ffffff;
              border-radius:16px;
              overflow:hidden;
              box-shadow:0 4px 18px rgba(0,0,0,.08);
              ">

            <tr>
                <td style="
                background:rgba(228,51,45,0.03);
                padding:35px;
                text-align:center;
                border-bottom:1px solid #f0f0f0;
                ">

                    <img src="'.$logoUrl.'" style="
                    max-width:180px;
                    height:auto;
                    display:block;
                    margin:auto;
                    ">

                </td>
            </tr>

            <tr>
                <td style="padding:35px;">

                    <h2 style="
                    margin:0 0 25px;
                    color:#222;
                    font-size:24px;
                    text-align:'.$align.';
                    ">
                        '.$title.'
                    </h2>

                    <table width="100%"
                          cellpadding="12"
                          cellspacing="0"
                          style="
                          border-collapse:collapse;
                          border:1px solid #eee;
                          border-radius:10px;
                          overflow:hidden;
                          ">

                        <tr style="background:#fafbfc;">
                            <td width="180">
                                <strong>'.$clientNameText.'</strong>
                            </td>
                            <td>
                                '.htmlspecialchars($_POST['name']).'
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <strong>'.$emailText.'</strong>
                            </td>
                            <td>
                                <a href="mailto:'.htmlspecialchars($_POST['email']).'"
                                  style="color:#e4332d;text-decoration:none;">
                                    '.htmlspecialchars($_POST['email']).'
                                </a>
                            </td>
                        </tr>

                        <tr style="background:#fafbfc;">
                            <td>
                                <strong>'.$phoneText.'</strong>
                            </td>
                            <td>
                                '.htmlspecialchars($_POST['phone']).'
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <strong>'.$projectText.'</strong>
                            </td>
                            <td>
                                '.htmlspecialchars($_POST['project']).'
                            </td>
                        </tr>

                        <tr style="background:#fafbfc;">
                            <td>
                                <strong>'.$subjectText.'</strong>
                            </td>
                            <td>
                                '.htmlspecialchars($_POST['subject']).'
                            </td>
                        </tr>

                    </table>

                    <h3 style="
                    margin-top:35px;
                    margin-bottom:15px;
                    color:#222;
                    text-align:'.$align.';
                    ">
                        '.$messageTitle.'
                    </h3>

                    <div style="
                    background:#fafbfc;
                    padding:22px;
                    border-radius:10px;
                    line-height:1.9;
                    color:#444;
                    direction:'.$dir.';
                    text-align:'.$align.';
                    '.

                    ($lang == 'ar'
                        ? 'border-right:4px solid #e4332d;'
                        : 'border-left:4px solid #e4332d;')

                    .'">

                        '.nl2br(htmlspecialchars($_POST['message'])).'

                    </div>

                    <hr style="
                    border:none;
                    border-top:1px solid #eee;
                    margin:35px 0;
                    ">

                    <table width="100%">

                        <tr>

                            <td style="text-align:'.$align.'">

                                <strong>'.$dateTitle.'</strong><br>

                                '.date('Y-m-d h:i A').'

                            </td>

                            <td style="
                            text-align:'.

                            ($lang == 'ar'
                                ? 'left'
                                : 'right')

                            .';
                            ">

                                <strong>'.$websiteTitle.'</strong><br>

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
                line-height:1.8;
                ">

                    © '.date('Y').' Modern Furniture

                    <br>

                    Home Finishing & Interior Decoration Works

                </td>
            </tr>

        </table>

        </div>

        ';

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