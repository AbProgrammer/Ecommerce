import React from 'react'
import axios from "axios"
import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';



function EsewaPayment() {
  

async function intiatePayment(){

  const secretkey = "8gBm/:&EnhH.1/q";


  const message =`total_amount=100,transaction_uuid=ab14a8f2b02c3,product_code=EPAYTEST`
    
  


  var hash = CryptoJS.HmacSHA256(message, secretkey);
   var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  
   console.log("signature "+ hashInBase64)
try{


  const params =  {
    amount: "100",
    failure_url: "https://google.com",
    product_delivery_charge: "0",
    product_service_charge: "0",
    product_code: "EPAYTEST",
    signature: hashInBase64,
    signed_field_names: "total_amount,transaction_uuid,product_code",
    success_url: "https://esewa.com.np",
    tax_amount: "10",
    total_amount: "110",
    transaction_uuid: "ab14a8f2b02c3"
    }

 
const response =  await axios.post("https://rc-epay.esewa.com.np/api/epay/main/v2/form",

  params
   
 )

console.log(" response "+ response)
}


catch(error) {
   console.log("error "+error)
}
  
}
intiatePayment();
}
export default EsewaPayment
