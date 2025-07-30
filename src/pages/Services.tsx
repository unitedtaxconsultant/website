import React, { useState } from 'react';
import { MessageCircle, Clock, FileText, Building, Shield, Award } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('ntn');

  const serviceCategories = [
    { id: 'ntn', name: 'NTN Registration', icon: <FileText className="w-5 h-5" /> },
    { id: 'tax-filing', name: 'Tax Filing', icon: <FileText className="w-5 h-5" /> },
    { id: 'sales-tax', name: 'Sales Tax', icon: <Building className="w-5 h-5" /> },
    { id: 'company-reg', name: 'Company Registration', icon: <Building className="w-5 h-5" /> },
    { id: 'ip', name: 'Intellectual Property', icon: <Shield className="w-5 h-5" /> },
    { id: 'other', name: 'Other Services', icon: <Award className="w-5 h-5" /> },
  ];

  const services = {
    ntn: [
      {
        title: "NTN Registration – Salaried Individuals",
        fee: "Rs. 1,000",
        workingDays: "1–2",
        requirements: "Color copy of ID card, Recent electricity bill, Phone number, +1 more"
      },
      {
        title: "NTN Registration – Business",
        fee: "Rs. 1,500",
        workingDays: "1–2",
        requirements: "Color copy of ID card, Office rent agreement or ownership documents, Business letterhead, +3 more"
      },
      {
        title: "NTN Registration – Partnership or AOP",
        fee: "Rs. 10,000",
        workingDays: "2–3",
        requirements: "Partnership deed, Partnership registration certificate, Authorization letter for principal officer, +6 more"
      },
      {
        title: "NTN Registration – Company",
        fee: "Rs. 15,000",
        workingDays: "2–3",
        requirements: "Incorporation certificate, Memorandum and Articles of Association, Partnership registration certificate, +7 more"
      },
      {
        title: "NTN Registration – Non-Profit Organization (NPO)",
        fee: "Rs. 15,000",
        workingDays: "2–3",
        requirements: "NTN of all members, Registration certificate, NPO constitution document, +8 more"
      }
    ],
    'tax-filing': [
      {
        title: "Quarterly Withholding Statements Tax Filing",
        fee: "Minimum Rs. 5,000 (varies based on business turnover and activity)",
        workingDays: "3–4",
        requirements: "Details of taxes deducted during the quarter, Additional information as needed"
      },
      {
        title: "Annual Income Tax Filing – Salaried Individuals",
        fee: "Rs. 3,500",
        workingDays: "3–5",
        requirements: "Annual salary certificate, Details of other income sources (if any), Annual personal expenses, +5 more"
      },
      {
        title: "Annual Income Tax Filing – Sole Proprietor",
        fee: "Minimum Rs. 5,000 (varies based on business turnover and activity)",
        workingDays: "3–5",
        requirements: "Annual accounts, Details of other income sources (if any), Annual personal expenses, +5 more"
      },
      {
        title: "Annual Income Tax Filing – Partnership or Private Company",
        fee: "Minimum Rs. 10,000 (varies based on business turnover and activity)",
        workingDays: "5",
        requirements: "Annual audited accounts, Details of taxes deducted at source, Additional information as needed"
      },
      {
        title: "Annual Income Tax Filing – NPO or Charitable Trusts",
        fee: "Minimum Rs. 15,000 (varies based on turnover and activity)",
        workingDays: "5",
        requirements: "Annual audited accounts, Details of taxes deducted at source, Additional information as needed"
      }
    ],
    'sales-tax': [
      {
        title: "GST Registration",
        fee: "Starting from Rs. 20,000 (Non-Manufacturer), Rs. 25,000 (Manufacturer)",
        workingDays: "2–3",
        requirements: "Bank account certificate, Business acquisition date, capacity, and activity details, Details of all branches (if any), +9 more"
      },
      {
        title: "PST Registration – Individual",
        fee: "Starting from Rs. 15,000",
        workingDays: "7–10",
        requirements: "Color copy of ID card, Office rent agreement or ownership documents, Business letterhead, +8 more"
      },
      {
        title: "PST Registration – Company",
        fee: "Starting from Rs. 15,000",
        workingDays: "7–10",
        requirements: "Incorporation certificate, Memorandum and Articles of Association, Incorporation forms (Form A & 29), +11 more"
      },
      {
        title: "PST Registration – Partnership",
        fee: "Starting from Rs. 15,000",
        workingDays: "7–10",
        requirements: "Partnership certificate and deed, Color copy of ID card, Office rent agreement or ownership documents, +9 more"
      },
      {
        title: "Monthly Federal/Provincial Sales Tax Return Filing",
        fee: "Minimum Rs. 5,000 (varies based on business turnover and activity)",
        workingDays: "3–4",
        requirements: "Copies of sales and purchase invoices, Bank statements, Additional information as needed"
      }
    ],
    'company-reg': [
      {
        title: "Private Limited Company Registration",
        fee: "Minimum Rs. 15,000 (excluding SECP fees, which depend on authorized capital)",
        workingDays: "3–10 (depending on name availability)",
        requirements: "Three proposed company names, Clear scanned copies of ID cards of directors/subscribers, Registered and correspondence address of the company, +7 more"
      },
      {
        title: "Single Member Company Registration",
        fee: "Minimum Rs. 15,000 (excluding SECP fees, which depend on authorized capital)",
        workingDays: "3–10 (depending on name availability)",
        requirements: "Three proposed company names, Clear scanned copies of ID cards of directors/subscribers and nominee, Registered and correspondence address of the company, +5 more"
      },
      {
        title: "Limited Liability Partnership (LLP) Registration",
        fee: "Rs. 20,000 (excluding SECP fees)",
        workingDays: "7–10 (depending on name availability and signed documents)",
        requirements: "Three proposed LLP names, Clear scanned copies of ID cards of all partners, FBR credentials of partners, +5 more"
      },
      {
        title: "Partnership or AOP Registration",
        fee: "Starting from Rs. 15,000 (excluding official fees)",
        workingDays: "7–15 (subject to timely submission of signed documents)",
        requirements: "Clear scanned copies of ID cards of all partners, Business activity details, Registered and correspondence address of the AOP, +4 more"
      }
    ],
    ip: [
      {
        title: "Trademark Registration",
        fee: "Starting from Rs. 15,000",
        workingDays: "Contact for details",
        requirements: "TM-1 form (in duplicate), Six representations on durable 13x8 inch paper, ID card of the trademark holder/partners, +3 more"
      },
      {
        title: "Copyright Registration",
        fee: "Starting from Rs. 15,000",
        workingDays: "Contact for details",
        requirements: "Two copies of the work, Payment of applicable fee (demand draft/pay order), ID card of the copyright holder/partners, +5 more"
      },
      {
        title: "Patent Registration",
        fee: "Starting from Rs. 25,000",
        workingDays: "Contact for details",
        requirements: "Patent application forms (P-1, P-1A, P-2, P-2A, P-3, or P-3A), Patent specification and drawings (if any), Payment of applicable fee (demand draft/pay order), +4 more"
      }
    ],
    other: [
      {
        title: "Password Recovery",
        fee: "Price upon Inquiry",
        workingDays: "Contact for details",
        requirements: "Contact us for specific requirements"
      },
      {
        title: "7E Exemption Certificate",
        fee: "Price upon Inquiry",
        workingDays: "Contact for details",
        requirements: "Contact us for specific requirements"
      },
      {
        title: "Approvals",
        fee: "Price upon Inquiry",
        workingDays: "Contact for details",
        requirements: "Contact us for specific requirements"
      },
      {
        title: "Audits",
        fee: "Price upon Inquiry",
        workingDays: "Contact for details",
        requirements: "Contact us for specific requirements"
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#092e56] to-[#1a4480] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Pricing</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive tax consulting services with transparent pricing and quick turnaround times
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[#de1425] text-white'
                    : 'bg-white text-[#092e56] hover:bg-gray-100'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeCategory as keyof typeof services]?.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#092e56] mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Fee:</span>
                    <span className="text-[#de1425] font-semibold">{service.fee}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Timeline:</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{service.workingDays} days</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.requirements}</p>
                </div>

                <a
                  href="https://wa.me/923425875337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#de1425] text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092e56] mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional, reliable, and cost-effective solutions for all your tax consulting needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#de1425] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#092e56] mb-3">Quick Turnaround</h3>
              <p className="text-gray-600">
                Most services completed within 1-10 working days with efficient processing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#de1425] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#092e56] mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with extensive experience in tax consulting
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#de1425] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#092e56] mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear, upfront pricing with no hidden fees or surprise charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#de1425] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements and get a personalized quote
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

export default Services;