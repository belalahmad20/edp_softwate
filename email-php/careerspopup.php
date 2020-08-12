<?php
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'vendor/autoload.php';
    
    if(isset($_POST['submit'])){
        $filename = "/tmp/".$_FILES['fileupload']['name'];
        rename($_FILES['fileupload']['tmp_name'], $filename);
        $name = $_POST['name'];
        $email = $_POST['email']; 
        $phone = $_POST['phone']; 
        $position = $_POST['position']; 
        $location = $_POST['location']; 
        $preferred_location = $_POST['preferred_location']; 
        $skill = $_POST['skill']; 
        $notice_period = $_POST['notice_period']; 
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
            $mail->addAttachment($filename);                         
            $mail->setFrom("website@fleapo.co.in", 'Careers Form');   //send from
            $mail->addAddress("belalahmad.fleapo@gmail.com");         //send to 
            // $mail->AddCC("sayantanchandra.fleapo@gmail.com");   
            $mail->isHTML(true);                                 
            $mail->Subject ="EDP Careers Form" ;
            $mail->Body    ="<h1>Careers Form Details : </h1><h3>Full Name: ".$name."</h3>
            <h3>Email: ".$email."</h3>
            <h3>Phone Number: ".$phone."</h3>
            <h3>Location: ".$location."</h3>
            <h3>Preferred Location: ".$preferred_location."</h3>
            <h3>Skill: ".$skill."</h3>
            <h3>Notice Period: ".$notice_period."</h3>
            <h3>Position: ".$position."</h3> ";
            $mail->send();
            // echo "Done";
            header('Location: https://fleapo.co.in/edp2/');
        } catch (Exception $e) {
            echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        }
    }
        

?>
