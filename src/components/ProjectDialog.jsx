import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

const ProjectDialog = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const serviceTypes = [
    'تطوير موقع ويب',
    'تطبيق موبايل',
    'تصميم UI/UX',
    'تحسين الأداء',
    'الصيانة والدعم',
    'استشارات تقنية',
    'أخرى'
  ];

  const budgetRanges = [
    'أقل من 500,000 جنيه',
    '500,000 - 1,000,000 جنيه',
    '1,000,000 - 2,000,000 جنيه',
    '2,000,000 - 5,000,000 جنيه',
    'أكثر من 5,000,000 جنيه'
  ];

  const timelines = [
    'أسبوع واحد',
    'أسبوعين',
    'شهر واحد',
    'شهرين',
    '3 أشهر أو أكثر'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // إرسال البريد باستخدام EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.description,
          subject: `طلب مشروع جديد - ${formData.serviceType}`,
          to_email: 'braaomer98@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      
      console.log('Project request sent:', result);
      setStatus({ 
        type: 'success', 
        message: '✅ تم إرسال طلبك بنجاح! سأتواصل معك قريباً لمناقشة التفاصيل.' 
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          budget: '',
          timeline: '',
          description: ''
        });
        setStatus({ type: '', message: '' });
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending project request:', error);
      setStatus({ 
        type: 'error', 
        message: '❌ حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل عبر WhatsApp.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className={`
        relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
        rounded-3xl shadow-2xl
        ${isDarkMode ? 'bg-dark-900 border-primary-500/30' : 'bg-white border-primary-500/30'}
        border-2 animate-slideDown
      `}>
        {/* Header */}
        <div className="sticky top-0 z-10 backdrop-blur-xl bg-gradient-to-r from-primary-500 to-primary-700 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-dark-950 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              ابدأ مشروعك الآن
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-dark-950/20 hover:bg-dark-950/30 flex items-center justify-center transition-all duration-300 hover:rotate-90"
            >
              <svg className="w-6 h-6 text-dark-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-dark-950/90 mt-2 font-semibold">املأ البيانات التالية وسأتواصل معك لمناقشة مشروعك</p>
        </div>

        {/* Status Message */}
        {status.message && (
          <div className={`
            mx-6 mt-6 p-4 rounded-xl text-center font-semibold
            ${status.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
            }
          `}>
            {status.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                الاسم الكامل *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${isDarkMode ? 'bg-dark-800 border-primary-500/30 text-white placeholder-dark-400' : 'bg-primary-50 border-primary-300 text-dark-950 placeholder-dark-500'}`}
                placeholder="أدخل اسمك"
              />
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${isDarkMode ? 'bg-dark-800 border-primary-500/30 text-white placeholder-dark-400' : 'bg-primary-50 border-primary-300 text-dark-950 placeholder-dark-500'}`}
                placeholder="example@email.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
              رقم الهاتف *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${isDarkMode ? 'bg-dark-800 border-primary-500/30 text-white placeholder-dark-400' : 'bg-primary-50 border-primary-300 text-dark-950 placeholder-dark-500'}`}
              placeholder="+249 XXX XXX XXX"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
              نوع الخدمة *
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${isDarkMode ? 'bg-dark-800 border-primary-500/30 text-white' : 'bg-primary-50 border-primary-300 text-dark-950'}`}
            >
              <option value="">اختر نوع الخدمة</option>
              {serviceTypes.map((type, idx) => (
                <option key={idx} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                الميزانية المتوقعة *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${isDarkMode ? 'bg-dark-800 border-primary-500/30 text-white' : 'bg-primary-50 border-primary-300 text-dark-950'}`}
              >
                <option value="">اختر الميزانية</option>
                {budgetRanges.map((range, idx) => (
                  <option key={idx} value={range}>{range}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                المدة الزمنية المتوقعة *
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${isDarkMode ? 'bg-dark-800 border-primary-500/30 text-white' : 'bg-primary-50 border-primary-300 text-dark-950'}`}
              >
                <option value="">اختر المدة</option>
                {timelines.map((time, idx) => (
                  <option key={idx} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
              وصف المشروع *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none ${isDarkMode ? 'bg-dark-800 border-primary-500/30 text-white placeholder-dark-400' : 'bg-primary-50 border-primary-300 text-dark-950 placeholder-dark-500'}`}
              placeholder="اكتب وصفاً تفصيلياً لمشروعك..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-4 rounded-xl font-black text-lg
              bg-gradient-to-r from-primary-500 to-primary-700
              text-dark-950 shadow-[0_8px_25px_rgba(245,158,11,0.4)]
              hover:shadow-[0_15px_35px_rgba(245,158,11,0.5)] hover:-translate-y-1
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isSubmitting ? 'animate-pulse' : ''}
            `}
          >
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب 🚀'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectDialog;
