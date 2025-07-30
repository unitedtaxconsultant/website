import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#de1425]" />,
      title: "Office Address",
      details: [
        "Office # 38, 3rd Floor",
        "Sialkot Business Center",
        "Pakistan"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-[#de1425]" />,
      title: "Phone Number",
      details: ["+92 342 587 5337"],
      link: "tel:+923425875337"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#de1425]" />,
      title: "Email Address",
      details: ["info@taxwalaconsultant.com"],
      link: "mailto:info@taxwalaconsultant.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#de1425]" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#092e56] to-[#1a4480] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with our expert team for professional tax consulting services. 
              We're here to help you with all your tax-related needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#092e56] mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {info.link ? (
                        <a href={info.link} className="hover:text-[#de1425] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/923425875337"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#de1425] text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+923425875337"
              className="border-2 border-[#de1425] text-[#de1425] px-8 py-4 rounded-lg font-semibold hover:bg-[#de1425] hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Send Us a Message"
            subtitle="Fill out the form below and our team will get back to you within 24 hours."
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092e56] mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Visit our office in Sialkot Business Center for in-person consultations
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#092e56] mb-4">Office Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-[#de1425] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#092e56]">United Tax Consulting</p>
                      <p className="text-gray-600">
                        Office # 38, 3rd Floor<br />
                        Sialkot Business Center<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-[#de1425]" />
                    <div>
                      <p className="font-semibold text-[#092e56]">Phone</p>
                      <a href="tel:+923425875337" className="text-gray-600 hover:text-[#de1425]">
                        +92 342 587 5337
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-[#de1425]" />
                    <div>
                      <p className="font-semibold text-[#092e56]">Email</p>
                      <a href="mailto:info@taxwalaconsultant.com" className="text-gray-600 hover:text-[#de1425]">
                        info@taxwalaconsultant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <MapPin className="w-16 h-16 text-[#de1425] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[#092e56] mb-2">Visit Our Office</h4>
                <p className="text-gray-600 mb-4">
                  Schedule an appointment for personalized consultation and professional tax advice.
                </p>
                <a
                  href="https://wa.me/923425875337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#de1425] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Schedule Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#de1425] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you with urgent tax matters and time-sensitive requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923425875337"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#de1425] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Now</span>
            </a>
            <a
              href="tel:+923425875337"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#de1425] transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;