import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/static/animation.json";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Script from "next/script";

function Index() {
  const [email, setEmail] = React.useState('');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = () => {
    var json  = {
      email : email
    }
    var isPass = validateEmail(json)
    if(isPass === true) {
      axios.post('https://db.houseofsingh.com/api/subscribe', json, {
        headers: {'content-type': 'application/json'}
      })
        .then((response) => {
          console.log('response', response.data);
          if (response.data.status === 200) {
            toast.success('Subscribed Successfully');
          }else if(response.data.errors.email){
            toast.error(response.data.errors.email[0])
          }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    console.log();

  }

  const validateEmail = (json) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(json.email==='' || json.email===undefined){
      toast.error('Please enter valid email')
    }
    else if(!json.email.match(mailformat)){
      toast.error('Invalid Email Address')
      return false;
    }else{
      return true;
    }
  }

  return (
    <>
    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
    <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
      <div className="main">
        <Lottie options={defaultOptions} height={400} width={500} />
        <h1  className="h1-1">We are currently working on our new website.</h1>
        <h1  className="h1-2">We&apos;ll be launching soon, subscribe to be notified.</h1>
        <div>
          <div className="input-group mb-3">
            <input type="email" className="form-control custom-input" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <div className="input-group-append hover">
              <span className="input-group-text" onClick={()=>handleSubmit()}><ion-icon name="arrow-forward-outline"></ion-icon></span>
            </div>
          </div>
        </div>
        
        <h1 className="query">For any queries, please email at <Link href="mailto:hello@houseofsingh.com"><a>hello@houseofsingh.com</a></Link></h1>
      </div>
    </>
  )
}

export default Index;
