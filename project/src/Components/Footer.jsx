// import React from 'react'
// import "../Style/Footer.css"
// const Footer = () => {
//   return (
//     <div>
//       <div className="footer bottom-0 ">
//         <div className="useful-cat">
//           <h2 > USEFUL CATEGORIES</h2>
//           <hr />

//           <div className="leftsection">
//             <a href="">Carpenter</a> <br /> <br />
//             <a href="">Salon</a> <br /> <br />
//             <a href="">Car Service</a> <br /> <br />
//             <a href=""> Electronic Service</a> <br /> <br />
//             <a href="">Pest Control Service</a> <br /> <br />
//             <a href="">Oil Filter Changed</a> <br /> <br />
//             <a href="">SEcurity System</a> <br /> <br />
//             <a href="">Outdoor </a> <br /> <br />
//           </div>

//           <div className="middle-sect">
//             <a href="">Plumbing Service</a> <br /> <br />
//             <a href="">Ac Service</a> <br /> <br />
//             <a href="">Home cleaning</a> <br /> <br />
//             <a href=""> Wardrobe Cupboard</a> <br /> <br />
//             <a href="">Kitchen Cabinets</a> <br /> <br />
//             <a href="">Ground Wiring</a> <br /> <br />
//             <a href="">Socket Switch Installation</a> <br /> <br />
//             <a href="">Electronic Services </a> <br /> <br />
//           </div>

//           <div className="last-sect">
//             <a href="">Carpenter</a> <br /> <br />
//             <a href="">Salon</a> <br /> <br />
//             <a href="">Car Service</a> <br /> <br />
//             <a href=""> Electronic Service</a> <br /> <br />
//             <a href="">Pest Control Service</a> <br /> <br />
//             <a href="">Oil Filter Changed</a> <br /> <br />
//             <a href="">SEcurity System</a> <br /> <br />
//             <a href="">Outdoor </a> <br /> <br />
//           </div>

//         </div>
//       </div>

//       {/* ----------------------------------------------------------------- */}
//       <div className="quicklinkes">
//         <h2>QUICK LINKS</h2>
//         <hr />

//         <div className="qlinks  mt-7">
//           <a href="">Carpenter</a> <br /> <br />
//           <a href="">Salon</a> <br /> <br />
//           <a href="">Car Service</a> <br /> <br />
//           <a href=""> Electronic Service</a> <br /> <br />
//           <a href="">Pest Control Service</a> <br /> <br />
//           <a href="">Oil Filter Changed</a> <br /> <br />
//           <a href="">SEcurity System</a> <br /> <br />
//           <a href="">Outdoor </a> <br /> <br />
//         </div>
//       </div>
//       {/* ------------------------------------------------------------------ */}

//     </div>
//   )
// }

// export default Footer

import React from 'react'
import '../Style/Footer.css'
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {BsSend} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="useful-cat">
          <h2> USEFUL CATEGORIES</h2>
          <hr />

          <div className="leftsection">
            <a href="">Carpenter</a> <br /> <br />
            <a href="">Salon</a> <br /> <br />
            <a href="">Car Service</a> <br /> <br />
            <a href=""> Electronic Service</a> <br /> <br />
            <a href="">Pest Control Service</a> <br /> <br />
            <a href="">Oil Filter Changed</a> <br /> <br />
            <a href="">SEcurity System</a> <br /> <br />
            <a href="">Outdoor </a> <br /> <br />
          </div>

          <div className="middle-sect">
            <a href="">Plumbing Service</a> <br /> <br />
            <a href="">Ac Service</a> <br /> <br />
            <a href="">Home cleaning</a> <br /> <br />
            <a href=""> Wardrobe Cupboard</a> <br /> <br />
            <a href="">Kitchen Cabinets</a> <br /> <br />
            <a href="">Ground Wiring</a> <br /> <br />
            <a href="">Socket Switch Installation</a> <br /> <br />
            <a href="">Electronic Services </a> <br /> <br />
          </div>

          <div className="last-sect">
            <a href="">Carpenter</a> <br /> <br />
            <a href="">Salon</a> <br /> <br />
            <a href="">Car Service</a> <br /> <br />
            <a href=""> Electronic Service</a> <br /> <br />
            <a href="">Pest Control Service</a> <br /> <br />
            <a href="">Oil Filter Changed</a> <br /> <br />
            <a href="">SEcurity System</a> <br /> <br />
            <a href="">Outdoor </a> <br /> <br />
          </div>

        </div>

        {/* ------------------------------------------------------------------- */}

        <div className="quicklinkes ml-20">
          <h2>QUICK LINKS</h2>
          <hr className='mt-5' />

          <div className="qlinks  mt-7">
            <a href="">Carpenter</a> <br /> <br />
            <a href="">Salon</a> <br /> <br />
            <a href="">Car Service</a> <br /> <br />
            <a href=""> Electronic Service</a> <br /> <br />
            <a href="">Pest Control Service</a> <br /> <br />
            <a href="">Oil Filter Changed</a> <br /> <br />
            <a href="">SEcurity System</a> <br /> <br />
            <a href="">Outdoor </a> <br /> <br />
          </div>
        </div>


        {/* ---------------------------------------------------------------------- */}

        <div className="keepup ml-20">
          <h2>KEEP UP WITH NEWS FROM US</h2>
          <hr className='mt-5' />

          <div className="extra">
            <h2 className='mt-10'>Get the Latest Subscription Offers & <br /> news from  eDemand</h2>
           
            <input type="text" name="" id="" className='mt-6 pl-2' placeholder='Enter Email Address' />
            <button id='sendbtn' className='ml-9 left-[320px] absolute mt-7'><BsSend className='h-5 w-5'/></button>
            
            <h2 className='mt-10'>Follow Us</h2>
            <hr className='mt-5' />
            <div className="btns mt-10 flex items-center justify-start space-x-2">

              <a href="https://www.instagram.com/"><FaInstagram className='social-icons'/></a>
              <a href="https://web.whatsapp.com/"><FaWhatsapp  className='social-icons'/></a>
              <a href="https://www.facebook.com/"><FaFacebookF className='social-icons'/></a>
              <a href="https://www.twitter.com/"><FaTwitter className='social-icons'/></a>
              <a href="https://www.linkedin.com/"><FaLinkedin className='social-icons'/></a>

            </div>
          </div>
        </div>
       <hr />
      </div>
    </div>
  )
}

export default Footer
