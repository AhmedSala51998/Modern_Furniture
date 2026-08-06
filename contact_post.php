<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

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
        <div dir="'.$dir.'" style="background:#f4f4f7;padding:40px 0;font-family:Arial,sans-serif;text-align:'.$align.';">
          <table align="center" width="100%" cellpadding="0" cellspacing="0"
                 style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.07);">

            <tr>
              <td style="padding:30px;text-align:center;">
                <img src="'.$logoUrl.'" style="width:180px;margin-bottom:20px;">
                <h2 style="margin:0;color:#333;">'.$title.'</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 40px;">

                <p style="font-size:16px;color:#444;">
                  '.$receivedText.'
                </p>

                <hr>

                <p><strong>'.$clientName.':</strong> '.htmlspecialchars($_POST['name']).'</p>

                <p><strong>'.$emailText.':</strong> 
                   <a href="mailto:'.htmlspecialchars($_POST['email']).'">
                   '.htmlspecialchars($_POST['email']).'
                   </a>
                </p>

                <p><strong>'.$phoneText.':</strong>
                '.htmlspecialchars($_POST['phone']).'
                </p>

                <p><strong>'.$projectText.':</strong>
                '.htmlspecialchars($_POST['project']).'
                </p>

                <p><strong>'.$projectType.':</strong> '.htmlspecialchars($_POST['subject']).'</p>

                <p><strong>'.$projectDetails.':</strong><br>
                '.nl2br(htmlspecialchars($_POST['message'])).'
                </p>

                <hr>

              <!-- Footer -->
              <p style="color:#777;font-size:14px;line-height:1.7;margin-top:20px;">
                '.$sentOn.' '.date("Y-m-d H:i").'<br>
                '.$companyText.'
              </p>

              <p style="font-size:14px;color:#999;line-height:1.6;margin-top:25px;">
                '.($lang === 'ar'
                  ? 'تم إرسال هذه الرسالة عبر نموذج "تواصل معنا" على موقع مودرن فيرنتشر. يرجى مراجعة البيانات والتواصل مع العميل في أقرب وقت.'
                  : 'This message was sent via the "Contact Us" form on Modern Furniture website. Please review the details and respond to the client accordingly.'
                ).'
              </p>

              <p style="font-size:13px;color:#aaa;margin-top:10px;">
                <a href="https://modernfurnitureco.net" target="_blank" style="color:#aaa;text-decoration:underline;">
                  '.($lang === 'ar' ? 'زيارة الموقع' : 'Visit Website').'
                </a>
                |
                <a href="https://modernfurnitureco.net/privacy" target="_blank" style="color:#aaa;text-decoration:underline;">
                  '.($lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy').'
                </a>
              </p>

              <p style="font-size:13px;color:#aaa;margin-top:15px;">
                © '.date('Y').' Modern Business. '.($lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.').'
              </p>

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