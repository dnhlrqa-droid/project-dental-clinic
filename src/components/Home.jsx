

export default function Home(){
  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" data-aos="fade-up">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">أهلاً بكم في عيادتنا للأسنان</h2>
          <p className="text-gray-700 mb-6">نقدم أفضل رعاية أسنان مع أحدث التقنيات وخبرة سنوات لضمان ابتسامة صحية وجميلة. احجز موعدك الآن بسهولة عبر النموذج أدناه.</p>
          <a href="#booking" className="btn-primary">احجز زيارة</a>
        </div>
        <div className="flex justify-center">
          <img src="./photo-2.png" alt="Clinic" className="w-full max-w-md h-auto object-cover rounded-lg shadow-md" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
