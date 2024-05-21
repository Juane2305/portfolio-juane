import { useState, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';


const ContactUs = () => {

  const { t, i18n } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])

  const [data, setData] = useState({
    username: '',
    email: '',
    message: ''
  })

  const refForm = useRef();


  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value })
  }

  const messageSuccess = i18n.language == 'en' ?  'Your message has been successfully sent!' : '¡Su consulta ha sido enviada con éxito!'
  const messageError = i18n.language == 'en' ?  'Your message could not be sent' : 'No se ha podido enviar su consulta'



  const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_envrsj9'
      const templateId = 'template_ioq3qen'
      const publicKey = 'i9JqoBg9vA0X6dC52'

      emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
        .then((result) => {
          Swal.fire({
            title: messageSuccess,
            icon: 'success',
          })
          console.log(result.text);
          }, () => {
            Swal.fire({
              title: messageError,
              icon: 'error',
            })
          });
      setData({
        username: '',
        email: '',
        message: ''
      })
  }


    return (
      <div id='contact' className="h-full w-full bg-[#E8E8D8] py-24">
        <h1 className='text-[2rem] lg:text-[4rem] pt-10 pb-10 lg:pb-0 text-[#2B3033] font-bold text-center'  data-aos="flip-right" data-aos-duration="2000">
          {t("contact")}
        </h1>
        {/* <img src={background} alt="" className='absolute right-0'/> */}
        <section className='flex justify-center items-center lg:pt-10 mx-5 sm:mx-0'>
          <div className='z-10 hidden lg:w-[35rem] lg:flex lg:justify-center lg:items-center' data-aos="fade-right">
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1703865403/contact2_y1f45t.png" alt="" className='z-10 w-[35rem]'/>
          </div>
          <div className="bg-white px-8 pb-8 rounded-lg shadow-lg max-w-sm lg:w-1/3 z-10" data-aos="fade-up">
            <div className="flex justify-center mb-6">
            </div>
            <h2 className="text-2xl font-semibold text-center mb-5 cursor-default">
              {t("contactMe")}
            </h2>
            <form ref={refForm} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("name")}
                </label>
                <input
                  type="text"
                  name='username'
                  id="username"
                  value={data.username}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                  placeholder={t("namePlaceholder")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                  placeholder={t("emailPlaceholder")}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("message")}
                </label>
                <textarea
                  name='message'
                  id="message"
                  value={data.message}
                  onChange={handleChange}
                  className="form-input w-full p-2  border rounded-lg text-gray-700 focus:ring-purple-500"
                  placeholder={t("messagePlaceholder")}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </section>
      </div>
    );
};

export default ContactUs;       