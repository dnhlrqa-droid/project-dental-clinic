import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <footer className="bg-white mt-8 border-t">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} عيادة د. الأسنان. جميع الحقوق محفوظة.</p>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2"><FontAwesomeIcon icon={faFacebook} /> </a>
          <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2"><FontAwesomeIcon icon={faInstagram} /> </a>
          <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2"><FontAwesomeIcon icon={faTwitter} /> </a>
        </div>
      </div>
    </footer>
  )
}
