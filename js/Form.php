<html><body>
<?php

    echo 'Hi';
    if($_POST)
    {   
        $FName=$_POST['FName'];
        $ClientEmail=$_POST['Email'];
        $Message=$_POST['Message'];
        
        $To="ahmedslama2013@gmail.com";
        $From = $FName;
        $Headers = $ClientEmail;
        echo $FName;
        if (mail($To,$From,$Message,$Headers)) {
            
          echo "<h4>Thank you for sending email</h4>";
        } else {
          echo "<h4>Can't send email to $email</h4>";
        }
        
        mysql_query("SQL insert statement");
        
    }
    else { }

?>
</body>
</html>