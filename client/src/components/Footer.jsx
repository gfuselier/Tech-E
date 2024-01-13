import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-[--Navy] py-8" id="footer">
        <div className="container mx-auto flex justify-center">
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Orange]">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Orange]">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Orange]">
            <FaGithub />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Orange]">
            <FaLinkedin />
          </a>
        </div>
      </div>
    )
}