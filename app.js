<?php
$verify_token = "EAAG5euD8KqQBAC69NwtFQTH9haloQffBLUDZBqZA9ZBD3OBuZBQSdyi7Rd8mDe4rCkZAtCRQrT6WZAiOCl60UpW4qb970ROZAZAoBykkgJ75ROjqMusrzOr8hSkTwkdAZCtnUi31Yz2ykDiyAQCkSdrsyF2U3jwWKX5JDmqoV7d5I6RCQR8IMZCgkZC"; // Verify token 
if (!empty($_REQUEST['hub_mode']) && $_REQUEST['hub_mode'] == 'subscribe' && $_REQUEST['hub_verify_token'] == $verify_token) { 
echo $_REQUEST['hub_challenge']; 
}
