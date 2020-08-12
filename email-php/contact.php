<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'vendor/autoload.php';
    
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $phone = $_POST['phone']; 
        $email = $_POST['email']; 
        $looking_for = $_POST['what-are-you-looking-for']; 
        $message = $_POST['message']; 
        $mail = new PHPMailer(true);                              
        try {
            $mail->SMTPDebug = 0;                                
            $mail->isSMTP();                                    
            $mail->Host = 'fleapo.co.in';  
            $mail->SMTPAuth = true;                              
            $mail->Username = 'edpmail@fleapo.co.in'; //put your gmail email id                                        
            $mail->Password = 'CI097eUkO1$r';  //put your gmail password
            $mail->SMTPSecure = 'ssl';                            
            $mail->Port = 465;                          
            $mail->setFrom("website@fleapo.co.in", 'Contact Us Form');   //send from
            $mail->addAddress("belalahmad.fleapo@gmail.com");         //send to   
          //  $mail->AddCC("subhradeepdas.fleapo@gmail.com");  
            $mail->isHTML(true);                                 
            $mail->Subject ="EDP Website Contact Us" ;
            $mail->Body    ="<h1>Contact Form Details : </h1><h3>Full Name: ".$name."</h3>
            <h3>Phone: ".$phone."</h3>
            <h3>Email: ".$email."</h3>
            <h3>What are looking for ?: ".$looking_for."</h3>
            <h3>Message: ".$message."</h3>";
            
            if ($mail->Send())
            {
                header('Location: https://fleapo.co.in/edp2/');
            }
        } catch (Exception $e) {
            echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        }
    }
?>
