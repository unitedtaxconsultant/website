import React from 'react';
import { Award, Users, Target, CheckCircle, User } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Zabi Ul Umair",
      position: "Managing Director & Lead Consultant",
      qualification: "Chartered Accountant (CA)",
      image: "https://github.com/unitedtaxconsultant/website/blob/main/src/assets/Zabi%20Ul%20Umair.png",
      description: "Zabi Ul Umair is a highly qualified Chartered Accountant who leads United Tax Consulting with exceptional expertise in taxation, financial management, and business advisory services. With years of experience in the field, he has successfully guided numerous businesses and individuals through complex tax regulations and compliance requirements. His deep understanding of Pakistani tax laws and international accounting standards makes him an invaluable asset to our clients. Zabi's leadership ensures that our firm maintains the highest standards of professional excellence and client satisfaction."
    },
    {
      name: "Chaudhary Junaid Shafi",
      position: "Senior Tax Consultant",
      qualification: "ACCA (Association of Chartered Certified Accountants)",
      image: "https://ibb.co/5g97bcKr?auto=compress&cs=tinysrgb&w=600",
      description: "Chaudhary Junaid Shafi brings extensive expertise as an ACCA qualified professional with specialized knowledge in tax planning, compliance, and financial reporting. His comprehensive understanding of both local and international taxation frameworks enables him to provide strategic tax solutions for complex business scenarios. Junaid's meticulous attention to detail and analytical approach ensures accurate tax filings and optimal tax planning strategies for our clients. His expertise spans across corporate taxation, individual tax planning, and regulatory compliance."
    },
    {
      name: "Amina Babar",
      position: "Technology & Systems Manager",
      qualification: "Software Engineer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Amina Babar is our accomplished Software Engineer who revolutionizes our service delivery through innovative technology solutions. With her strong technical background and understanding of tax processes, she has developed and implemented digital systems that streamline our operations and enhance client experience. Amina's expertise in software development, database management, and process automation ensures that our firm stays at the forefront of technological advancement in the tax consulting industry. Her contributions have significantly improved our efficiency and accuracy in service delivery."
    },
    {
      name: "Ubaid Bhatti",
      position: "Head of Marketing",
      qualification: "Marketing Professional",
      image: "/Ubaid Ullah copy.png",
      description: "Ubaid Bhatti leads our marketing initiatives with strategic vision and creative excellence. As Head of Marketing, he is responsible for building and maintaining our brand presence, developing client relationships, and expanding our market reach. His deep understanding of the tax consulting industry combined with modern marketing strategies helps us connect with clients effectively and communicate the value of our services. Ubaid's innovative approach to client engagement and market development has been instrumental in our firm's growth and reputation building."
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-[#de1425]" />,
      title: "Excellence",
      description: "We strive for the highest standards in every service we provide, ensuring accuracy and professionalism."
    },
    {
      icon: <Users className="w-8 h-8 text-[#de1425]" />,
      title: "Client-Centric",
      description: "Our clients' success is our priority. We provide personalized solutions tailored to individual needs."
    },
    {
      icon: <Target className="w-8 h-8 text-[#de1425]" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our professional relationships."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#de1425]" />,
      title: "Reliability",
      description: "Consistent, timely, and dependable service delivery that our clients can count on."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#092e56] to-[#1a4480] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About United Tax Consulting</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner for comprehensive tax solutions, backed by expertise, integrity, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#092e56] mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                United Tax Consulting is a premier tax advisory firm based in Pakistan, dedicated to providing 
                comprehensive tax solutions for individuals, businesses, and organizations. With our team of 
                certified professionals and years of combined experience, we have established ourselves as a 
                trusted partner in navigating the complex landscape of tax regulations and compliance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our firm specializes in a wide range of services including NTN registration, tax filing, 
                sales tax registration, company incorporation, and intellectual property registration. We pride 
                ourselves on delivering accurate, timely, and cost-effective solutions that help our clients 
                achieve their financial and business objectives.
              </p>
              <p className="text-lg text-gray-600">
                Located in the heart of Sialkot's business district, we serve clients across Pakistan, 
                combining local expertise with international best practices to deliver exceptional value.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#092e56] mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses and individuals with expert tax guidance, ensuring compliance 
                  while optimizing their financial position through strategic tax planning and professional service delivery.
                </p>
                <h3 className="text-2xl font-bold text-[#092e56] mb-6">Our Vision</h3>
                <p className="text-gray-600">
                  To be Pakistan's leading tax consulting firm, recognized for our expertise, integrity, 
                  and commitment to client success in an ever-evolving regulatory environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092e56] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#092e56] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092e56] mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of qualified professionals brings together diverse expertise and extensive experience 
              to serve your tax consulting needs
            </p>
          </div>
          
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover aspect-square"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-[#de1425] text-white p-4 rounded-full">
                      <User className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-[#092e56] mb-2">{member.name}</h3>
                    <p className="text-[#de1425] font-semibold mb-2">{member.position}</p>
                    <p className="text-gray-600 font-medium mb-4">{member.qualification}</p>
                    <p className="text-gray-700 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#de1425] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your tax consulting needs and discover how our expertise can benefit you.
          </p>
          <a
            href="https://wa.me/923425875337"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#de1425] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
