

export default function Doctor(){
  return (
    <section id="doctor" className="container mx-auto px-4 sm:px-6 lg:px-8 py-14" data-aos="fade-up">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center ">عن الطبيب</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card flex flex-col items-center text-center overflow-hidden">
          <img src="./photo-4.png" alt="Doctor" className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4 object-cover flex-shrink-0" loading="lazy"  />
          <h4 className="text-xl font-bold">د. أحمد علي</h4>
          <p className="text-sm text-gray-600 break-words">خبرة 12 سنة في طب وجراحة الأسنان. حاصل على بكالوريوس طب الأسنان من جامعة القاهرة وشهادات متقدمة في زراعة الأسنان وتقويمها.</p>
          <ul className="text-sm text-gray-600 mt-3 space-y-1">
            <li>التخصص: جراحة وزراعة الأسنان</li>
            <li>الخبرة: 12 سنة</li>
            <li>الشهادات: زراعة الأسنان - تقويم متقدم</li>
          </ul>
        </div>

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card flex flex-col  items-center justify-center  gap-4  h-full ">
            <img src="./photo-1.png" alt="Nurse" className="w-24 h-24  rounded-lg flex-shrink-0
               md:w-60 md:h-60 
            " loading="lazy" />
            <div className="min-w-0">
              <h5 className="font-semibold">ممرضة: سارة</h5>
              <p className="text-sm text-gray-600 break-words">ممرضة مساعدة ذات خبرة في رعاية المرضى، مساعدة أثناء الإجراءات، والتعامل مع مواعيد المرضى.</p>
            </div>
          </div>

          <div className="card flex flex-col items-center justify-center gap-4  h-full">
            <img src="./photo-3.png" alt="Nurse" className="w-24 h-24  rounded-lg flex-shrink-0 md:w-60 md:h-60" loading="lazy"  />
            <div className="min-w-0">
              <h5 className="font-semibold">ممرضة: هند</h5>
              <p className="text-sm text-gray-600 break-words">متخصصة في دعم المرضى، وتعقيم الأدوات، وتجهيز العيادة للإجراءات المختلفة.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
