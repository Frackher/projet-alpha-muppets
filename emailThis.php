<?php

$_POST['name'];
$_POST['email'];
$_POST['message'];

mail( "Antoine.noe.pro@gmail.com",  "AlphaMuppets",  "Hey ".$_POST['name'].", tout fonctionne ici !"." Merci pour ton message : \"".$_POST['message']."\"");