import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const qualities = [
    {
      icon: <Award className="w-8 h-8 text-[#de1425]" />,
      title: "Expert Team",
      description: "Certified professionals with extensive experience in tax consulting and financial services."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#de1425]" />,
      title: "Reliable Service",
      description: "Trusted by hundreds of clients for accurate, timely, and professional tax solutions."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#de1425]" />,
      title: "Quick Turnaround",
      description: "Fast processing times with most services completed within 1-10 working days."
    },
    {
      icon: <Users className="w-8 h-8 text-[#de1425]" />,
      title: "Personalized Approach",
      description: "Tailored solutions to meet your specific business and individual tax requirements."
    }
  ];

  const services = [
    "NTN Registration Services",
    "Tax Filing Services", 
    "Sales Tax Registration",
    "Company Registration",
    "Intellectual Property Registration",
    "Audit Services"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#092e56] to-[#1a4480] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Professional Tax Consulting Services in Pakistan
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Expert guidance for all your tax registration, filing, and compliance needs. 
                Trusted by businesses and individuals across Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923425875337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#de1425] text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Us on WhatsApp</span>
                </a>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#092e56] transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#de1425] flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092e56] mb-4">
              Our Core Qualities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets United Tax Consulting apart as your trusted tax advisory partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#092e56] mb-3">
                    {quality.title}
                  </h3>
                  <p className="text-gray-600">
                    {quality.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#092e56] mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for professional tax consulting services. Our expert team is ready to help you with all your tax-related needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#de1425] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#092e56]">Call Us</h4>
                    <a href="tel:+923425875337" className="text-gray-600 hover:text-[#de1425]">
                      +92 342 587 5337
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#de1425] p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#092e56]">WhatsApp</h4>
                    <a 
                      href="https://wa.me/923425875337" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#de1425]"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm 
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you shortly."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#de1425] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Professional Tax Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let tax complexities hold you back. Get expert guidance from our certified professionals.
          </p>
          <a
            href="https://wa.me/923425875337"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#de1425] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Get Free Consultation</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;