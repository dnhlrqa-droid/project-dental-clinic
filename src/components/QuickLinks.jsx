import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function QuickLinks(){
  return (
    <section id="contact" className="container mx-auto px-6 py-12" data-aos="fade-up">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="col-span-2">
          <h4 className="text-xl font-semibold mb-2">تابعنا وتواصل معنا</h4>
          <div className="flex items-center gap-4 mb-3">
            <a className="text-primary hover:opacity-80 flex items-center gap-2" href="#"><FontAwesomeIcon icon={faFacebook} /> فيسبوك</a>
            <a className="text-primary hover:opacity-80 flex items-center gap-2" href="#"><FontAwesomeIcon icon={faInstagram} /> انستجرام</a>
            <a className="text-primary hover:opacity-80 flex items-center gap-2" href="#"><FontAwesomeIcon icon={faTwitter} /> تويتر</a>
            <a className="text-primary hover:opacity-80 flex items-center gap-2" href="https://wa.me/123456789"><FontAwesomeIcon icon={faWhatsapp} /> واتس اب</a>
          </div>
          <p className="text-gray-600">موقع العيادة: شارع الصحة، المدينة. واتس: <a className="text-primary font-semibold" href="https://wa.me/123456789">+123456789</a> - ايميل: info@clinic.example</p>
        </div>
        <div className="flex justify-center">
          <img src="./photo-2.png" alt="Clinic thumb" className="w-36 h-28 object-cover rounded-lg shadow" loading="lazy"  />
        </div>
      </div>
    </section>
  )
}
