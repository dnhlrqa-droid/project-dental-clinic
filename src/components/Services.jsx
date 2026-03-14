import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth, faUserMd, faSyringe, faSmile, faTeeth } from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    title: 'تقويم الأسنان',
    icon: faUserMd,
    color: 'bg-indigo-50 text-indigo-600',
    informations: 'خدمة متخصصة في تعديل موضع الأسنان والفكين باستخدام أجهزة وتقنيات متقدمة مثل الأقواس التقويمية الثابتة والمتحركة والأنظمة الشفافة، وتهدف هذه الخدمة إلى تحسين محاذاة الأسنان وصحة الفم والقدرة على المضغ والنطق. يتم إعداد خطة علاج فردية مفصلة لكل مريض مع متابعة دورية للتأكد من تقدم العلاج وتحقيق نتائج مستقرة وطويلة الأمد.'
  },
  {
    title: 'حشو الأسنان',
    icon: faTooth,
    color: 'bg-primary/10 text-primary',
    informations: 'إجراءات إصلاح تجاويف الأسنان الناتجة عن التسوس أو الكسور تتضمن إزالة الأنسجة المتضررة وتنظيف التجويف ثم ملؤه بمواد عالية الجودة مثل الحشوات التجميلية المركبة أو الحشوات المعدنية اعتماداً على الحالة السريرية. الهدف من الحشو هو استعادة الشكل والوظيفة الطبيعية للسن ومنع تفاقم التسوس والحفاظ على صحة السن لفترة طويلة.'
  },
  {
    title: 'علاج العصب',
    icon: faSyringe,
    color: 'bg-yellow-50 text-yellow-600',
    informations: 'علاج لب الأسنان أو ما يعرف بعلاج القنوات الجذرية يتضمن إزالة الأنسجة الملتهبة أو المصابة داخل جذور الأسنان، ثم تنظيف وتعقيم القنوات بشكل دقيق وحشوها وإغلاقها بإحكام لحماية السن من العدوى. تُجرى هذه الإجراءات باستخدام تقنيات حديثة وتصوير شعاعي دقيق للتأكد من اكتمال العلاج والحفاظ على السن كجزء وظيفي من الفم.'
  },
  {
    title: 'زراعة الأسنان',
    icon: faTeeth,
    color: 'bg-green-50 text-accent',
    informations: 'زراعة الأسنان هي عملية جراحية يتم فيها إدخال دعامات معدنية من التيتانيوم في عظم الفك لتثبيت تركيبات أسنان ثابتة أو قابلة للإزالة. تشمل الخدمة تقييم حالة العظم والتخطيط الجراحي المناسب ومرحلة الشفاء ثم التركيب النهائي للتعويضات لتعويض الأسنان المفقودة واستعادة القدرة على المضغ والوظيفة الطبيعية والمظهر التجميلي للابتسامة.'
  },
  {
    title: 'تنظيف وتلميع',
    icon: faSmile,
    color: 'bg-pink-50 text-pink-600',
    informations: 'خدمة تنظيف الأسنان الاحترافية تتضمن إزالة القلح والترسبات الجيرية واللطخات السطحية عن أسطح الأسنان، ثم تلميع الأسنان وتقديم إرشادات مفصلة للعناية المنزلية والمراجعات الدورية. تهدف هذه الخدمة إلى الوقاية من أمراض اللثة وتسوس الأسنان والحفاظ على صحة الفم واللثة وتحسين مظهر الأسنان والابتسامة.'
  },
  {
    title: 'تجميل الأسنان',
    icon: faSmile,
    color: 'bg-purple-50 text-purple-600',
    informations: 'تشمل إجراءات تجميل الأسنان تبييض الأسنان، وتركيب قشور خزفية أو مركبة (فينير)، وتشكيل حواف الأسنان وتحسين التناسق اللوني والشكل العام للابتسامة باستخدام مواد وتقنيات آمنة وموثوقة. تسعى هذه الإجراءات إلى تحسين المظهر الجمالي للابتسامة مع مراعاة الصحة الوظيفية للأسنان وزيادة ثقة المريض بنفسه.'
  }
]

export default function Services(){
  return (
    <section id="services" className="container mx-auto px-6 py-14" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-6">خدماتنا</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="card flex flex-col h-full">
            <div className={`p-4 rounded-lg w-14 h-14 flex items-center justify-center mb-3 ${s.color}`}>
              <FontAwesomeIcon icon={s.icon} className="text-xl" />
            </div>
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-gray-600 mb-3">{s.informations}</p>
            <button className="mt-auto btn-primary w-full sm:w-auto">اطلب الخدمة</button>
          </div>
        ))}
      </div>
    </section>
  )
}
