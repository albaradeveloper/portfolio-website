import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

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
      // ملاحظة: يجب استبدال هذه القيم بقيمك من EmailJS Dashboard
      const result = await emailjs.send(
        'service_xxxxxxx',  // استبدل بـ Service ID من EmailJS
        'template_xxxxxxx', // استبدل بـ Template ID من EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'braaomer98@gmail.com'
        },
        'YOUR_PUBLIC_KEY'   // استبدل بـ Public Key من EmailJS
      );
      
      console.log('Email sent successfully:', result);
      setStatus({ 
        type: 'success', 
        message: '✅ تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ 
        type: 'error', 
        message: '❌ حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل عبر WhatsApp.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`
      min-h-screen pt-24 relative overflow-hidden
      ${isDarkMode 
        ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950' 
        : 'bg-gradient-to-br from-white via-primary-50 to-primary-100'
      }
    `}>
      {/* Background decorative elements */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-primary-400/15 to-primary-600/10 rounded-full blur-[40px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] bg-gradient-to-br from-primary-500/10 to-primary-400/15 rounded-full blur-[30px]" />
      
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`
            inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6
            bg-gradient-to-r from-primary-400/15 to-primary-600/10
            border backdrop-blur-sm
            ${isDarkMode ? 'text-primary-400 border-primary-500/30' : 'text-primary-700 border-primary-500/30'}
          `}>
            تواصل معي 📧
          </span>
          
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-dark-950'}`}>
            <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
              دعنا نتحدث
            </span>{' '}
            عن مشروعك
          </h2>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
            أنا هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك
          </p>
        </div>

        {/* Contact Form */}
        <div className={`
          backdrop-blur-xl rounded-3xl p-10 mb-12
          border shadow-2xl
          ${isDarkMode ? 'bg-dark-800/50 border-primary-500/20' : 'bg-white/50 border-primary-500/20'}
        `}>
          {/* Status Message */}
          {status.message && (
            <div className={`
              mb-6 p-4 rounded-xl text-center font-semibold
              ${status.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-300' 
                : 'bg-red-100 text-red-800 border border-red-300'
              }
            `}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-base font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-6 py-4 rounded-xl border-2
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-all duration-300
                    ${isDarkMode 
                      ? 'bg-dark-900/50 border-primary-700 text-white placeholder-gray-500' 
                      : 'bg-white border-primary-300 text-dark-950 placeholder-gray-400'
                    }
                  `}
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div>
                <label className={`block text-base font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-6 py-4 rounded-xl border-2
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-all duration-300
                    ${isDarkMode 
                      ? 'bg-dark-900/50 border-primary-700 text-white placeholder-gray-500' 
                      : 'bg-white border-primary-300 text-dark-950 placeholder-gray-400'
                    }
                  `}
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className={`block text-base font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                الموضوع *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`
                  w-full px-6 py-4 rounded-xl border-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-all duration-300
                  ${isDarkMode 
                    ? 'bg-dark-900/50 border-primary-700 text-white placeholder-gray-500' 
                    : 'bg-white border-primary-300 text-dark-950 placeholder-gray-400'
                  }
                `}
                placeholder="ما هو موضوع رسالتك؟"
              />
            </div>

            {/* Message */}
            <div>
              <label className={`block text-base font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                الرسالة *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className={`
                  w-full px-6 py-4 rounded-xl border-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-all duration-300 resize-none
                  ${isDarkMode 
                    ? 'bg-dark-900/50 border-primary-700 text-white placeholder-gray-500' 
                    : 'bg-white border-primary-300 text-dark-950 placeholder-gray-400'
                  }
                `}
                placeholder="اكتب رسالتك هنا..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-5 rounded-xl font-bold text-lg
                bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700
                text-white shadow-[0_8px_25px_rgba(37,99,235,0.3)]
                hover:shadow-[0_15px_35px_rgba(37,99,235,0.4)]
                hover:-translate-y-1 transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                ${isSubmitting ? 'animate-pulse' : ''}
              `}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة 📨'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/249926699368"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group backdrop-blur-xl rounded-2xl p-8 text-center
              border shadow-xl
              hover:-translate-y-2 hover:scale-105
              transition-all duration-300
              ${isDarkMode ? 'bg-dark-800/50 border-primary-500/20' : 'bg-white/50 border-primary-500/20'}
            `}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📱</div>
            <h4 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-dark-950'}`}>
              واتساب
            </h4>
            <p className="text-green-600 font-semibold">+249926699368</p>
          </a>

          {/* Email */}
          <a
            href="mailto:braaomer98@gmail.com"
            className={`
              group backdrop-blur-xl rounded-2xl p-8 text-center
              border shadow-xl
              hover:-translate-y-2 hover:scale-105
              transition-all duration-300
              ${isDarkMode ? 'bg-dark-800/50 border-primary-500/20' : 'bg-white/50 border-primary-500/20'}
            `}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📧</div>
            <h4 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-dark-950'}`}>
              البريد الإلكتروني
            </h4>
            <p className="text-blue-600 font-semibold text-sm">braaomer98@gmail.com</p>
          </a>

          {/* Location */}
          <div className={`
            backdrop-blur-xl rounded-2xl p-8 text-center
            border shadow-xl
            ${isDarkMode ? 'bg-dark-800/50 border-primary-500/20' : 'bg-white/50 border-primary-500/20'}
          `}>
            <div className="text-5xl mb-4">📍</div>
            <h4 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-dark-950'}`}>
              الموقع
            </h4>
            <p className="text-purple-600 font-semibold">الخرطوم، السودان</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
