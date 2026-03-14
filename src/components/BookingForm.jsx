import React, { useState } from 'react'

export default function BookingForm(){
  const [form, setForm] = useState({ name: '', phone: '', date: '', service: '' })

  function handleChange(e){
    setForm(prev=> ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    alert('تم استلام الطلب (هذا مشروع تجريبي).\n' + JSON.stringify(form))
    setForm({ name: '', phone: '', date: '', service: '' })
  }

  return (
    <section id="booking" className="container mx-auto px-6 py-14" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-4">نموذج حجز موعد</h3>
      <p className="text-gray-600 mb-6">املأ البيانات أدناه لحجز موعد. نحتاج الاسم ورقم الهاتف وتاريخ الميعاد والخدمة المطلوبة.</p>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="الاسم الكامل" className="p-3 rounded-lg w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="رقم الهاتف" className="p-3 rounded-lg w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <input name="date" value={form.date} onChange={handleChange} type="date" className="p-3 rounded-lg w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required />
        <select name="service" value={form.service} onChange={handleChange} className="p-3 rounded-lg w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" required>
          <option value="">اختر الخدمة</option>
          <option>تقويم الأسنان</option>
          <option>علاج العصب</option>
          <option>زراعة الأسنان</option>
          <option>تنظيف وتلميع</option>
        </select>

        <textarea name="notes" placeholder="ملاحظات (اختياري)" className="md:col-span-2 p-3 rounded-lg w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />

        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="btn-primary w-full sm:w-auto">إرسال الحجز</button>
        </div>
      </form>
    </section>
  )
}
