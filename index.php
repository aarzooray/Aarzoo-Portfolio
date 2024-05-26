<?php

if(isset($_POST["name"]))
{

$server = "localhost";
$username = "root";
$password = "";


$conn = mysqli_connect($server,$username,$password);

if(!$conn)
{
    die("Connection to this database failed due to ". mysqli_error($conn));
}



$name = $_POST['name'];
$phonenumber = $_POST['phonenumber'];
$email = $_POST['email'];
$companyagencyname = $_POST['companyagencyname'];
$aboutwork = $_POST['aboutwork'];


$sql = "INSERT INTO `portfoliodatabase`.`details` ( `name`, `phonenumber`, `email`, `companyagencyname`, `aboutwork`, `date`) VALUES ( '$name', '$phonenumber', '$email', '$companyagencyname', '$aboutwork', current_timestamp());";



// echo $sql;
if($conn->query($sql)==true)
{
    // echo "Successfully inserted";
}
else{
    echo "ERROr: $sql <br> $conn->error";
}

$conn->close();
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
    <title>Pankaj's Portfolio</title>
</head>

<body>
    <div class="hero" id="heroPage">
        <nav>
            <div id="sidebar">

                <button id="close"><span id="cross">X</span></button>
                <div id="logo">Aarzoo</div>
                <ul id="itemCont">

                    <li><a href="#heroPage">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#ContactPage">Contact</a></li>
                </ul>
                <button id="signIn">Resume</button>

                <div id="socialMedia">
                    <span><i class="ri-youtube-fill"></i></span><span><i
                            class="ri-linkedin-box-fill"></i></span><span><i
                            class="ri-github-fill"></i></span><br><span><i class="ri-instagram-line"></i></span><span><i
                            class="ri-facebook-circle-fill"></i></span><span><i class="ri-twitter-x-fill"></i></span>

                    <span><i class="ri-reddit-fill"></i></span>
                </div>
            </div>
        </nav>


        <div id="container">
            <div id="navbar">
                <div id="logo">Aarzoo</div>
                <div id="btn"><i class="ri-menu-fold-fill"></i></div>
            </div>



            <div id="profileSection">

                <div id="section-1">
                    <div id="image">
                        <img src="pp4.jpg" alt="image not displayed">
                    </div>
                    <div id="textCont">
                        <span id="name" style="visibility: hidden;">Pankaj Kumar Ray</span>
                        <span id="profession">Web Developer</span>
                    </div>
                </div>
                <div id="section-2">
                    <span id="tagline">
                        "Turning Visions into <span id="key">Profitable</span> &nbsp;&nbsp;and <span
                            id="key">Adorable</span> Websites!"
                    </span>
                    <button id="cvBtn">Download CV</button>
                </div>


            </div>





        </div>

        <div id="circle"></div>

    </div>

    <div id="ContactPage">
        <div id="left">
            <h2 id="formHead">Contact </h2>

            <p id="infoDesc">Hi there!
                I’m excited to collaborate on your next web project! As a skilled front-end developer, I specialize in
                creating beautiful, responsive, and user-friendly websites. Whether you need a complete website, a
                redesign, or help with specific features, I'm here to bring your vision to life..</p>
            <span class="info">
                <h3>Address</h3>
                <h4>Salarpur,Meerut,Delhi-NCR</h4>
            </span>
            <span class="info">
                <h3>Phone</h3>
                <h4>+91 7017105535</h4>
            </span>
            <span class="info">
                <h3>Email</h3>
                <h4>pankajray1288@gmail.com</h4>
            </span>

        </div>
        <div id="right">

            <form action="index.php" method="post" autocomplete="off" autofill="off">
                <h2 id="formHead">Contact Form</h2>
                <input type="text" name="name" id="" placeholder="Name">
                <input type="phone" name="phonenumber" id="" placeholder="Phone Number">
                <input type="email" name="email" id="" placeholder="Email">
                <input type="text" name="companyagencyname" id="" placeholder="Company/Agency Name">
                <textarea name="aboutwork" id="" placeholder="About Work" rows="7"></textarea>

                <input type="submit" value="Submit" id="submitBtn">
            </form>

        </div>
    </div>





    <script src="logic.js"></script>
</body>

</html>

<!-- INSERT INTO `details` (`s.no`, `Name`, `Phone Number`, `Email`, `Company/Agency Name`, `AboutWokr`, `date`) VALUES ('10', 'Pankaj Kumar Ray', '9807659460', 'pankajray1288@gmail.com', 'AarzooWebTechnologyPrivateLtd', 'Hello', current_timestamp()); -->