

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" flex items-center justify-between py-2 ">
        <div className="flex flex-shrink-0 items-center text-3xl font-bold text-white">
            {/* <img src={image} alt="" /> */}
            Hk
        </div>
        <div className="m-8 flex items-center justify-between gap-5 text-2xl">
            <a className="hover:bg-gradient-to-t from-[#445BCA] via-pink-700 to-[#FC4273] rounded-[6px]" href="https://www.instagram.com/invites/contact/?igsh=zpfmud94qg01&utm_content=mfmbse2"><FaInstagram/></a>
            <a className="hover:text-[#3E70AF] rounded-[6px]" href="https://www.linkedin.com/in/haider-khan-2735aa252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
              <a><FaGithub/></a>
              <a  href="https://x.com/HaiderK37836?t=pUzWl7tL1Hworp9MpzWS1g&s=09"><FaSquareXTwitter/></a>
           
        </div>

    </nav>
  )
}

export default NavBar
