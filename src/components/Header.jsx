import React, { useState, useEffect, useRef } from 'react'

const nav = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'doctor', label: 'عن الطبيب' },
  { id: 'services', label: 'الخدمات' },
  { id: 'booking', label: 'حجز' },
  { id: 'contact', label: 'تواصل' }
]

export default function Header(){
  const [open, setOpen] = useState(false)
  const panelRef = useRef()

  useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden p-1">
            <img src="./photo-2.png" alt="" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">عيادة د. الأسنان</h1>
            <p className="text-sm text-gray-500">ابتسامة مشرقة بثقة</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {nav.map(n=> (
            <a key={n.id} href={`#${n.id}`} className="text-gray-700 hover:text-primary transition-colors">{n.label}</a>
          ))}
          <a href="#booking" className="btn-primary">احجز الآن</a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <a href="#booking" className="btn-primary">احجز</a>
          <button aria-label="فتح القائمة" onClick={()=> setOpen(true)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>

        {/* Overlay */}
        <div className={`${open ? 'block' : 'hidden'} md:hidden fixed inset-0 z-40 bg-black/40`} onClick={()=> setOpen(false)} />

        {/* Slide-in panel (RTL: right side) */}
        <aside ref={panelRef} className={`fixed top-0 right-0 h-full w-64 bg-white p-6 z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform`}> 
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">د</div>
              <div>
                <h2 className="text-base font-semibold">عيادة د. الأسنان</h2>
              </div>
            </div>
            <button aria-label="إغلاق" onClick={()=> setOpen(false)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {nav.map(n=> (
              <a key={n.id} href={`#${n.id}`} onClick={()=> setOpen(false)} className="text-gray-700 hover:text-primary transition-colors">{n.label}</a>
            ))}
            <a href="#booking" onClick={()=> setOpen(false)} className="btn-primary block text-center mt-3">احجز الآن</a>
          </nav>
        </aside>
      </div>
    </header>
  )
}
