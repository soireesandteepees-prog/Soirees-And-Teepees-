
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    packageType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        packageType: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Get In <span className="text-primary_button">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Ready to plan your magical slumber party? We'd love to hear from you! Contact us to discuss your vision and let us create an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-check-line text-green-600 text-xl mr-3"></i>
                    <p className="text-green-800">Thank you! We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      min="1"
                      max="12"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm"
                      placeholder="6"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Package Interest</label>
                    <div className="relative">
                      <select
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm appearance-none bg-white pr-8"
                      >
                        <option value="">Select a package</option>
                        <option value="teepee">Teepee Parties</option>
                        <option value="princess">Princess Parties</option>
                        <option value="boho">Boho Chic</option>
                        <option value="movie">Movie Nights</option>
                        <option value="unicorn">Unicorn Dreams</option>
                        <option value="spa">Spa Retreats</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tell us about your vision</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary_button transition-colors text-sm resize-none"
                    placeholder="Share your ideas, theme preferences, special requests, or any questions you have..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary_button text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#FFB88C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary_button rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-phone-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Available 9 AM - 8 PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary_button rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-mail-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">hello@soireesandteepees.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary_button rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-map-pin-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Service Area</h4>
                      <p className="text-gray-600">Los Angeles County</p>
                      <p className="text-sm text-gray-500">Free consultation within 25 miles</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary_button rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-time-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 9 AM - 8 PM</p>
                      <p className="text-gray-600">Sunday: 10 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h3>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2741728131!2d-118.6919259!3d34.0201613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  We serve the greater Los Angeles area. Contact us to confirm service availability in your specific location.
                </p>
              </div>

              {/* FAQ Quick Links */}
              {/* <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Questions?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-question-line text-primary_button text-lg mr-3"></i>
                    <span className="text-gray-700">How far in advance should I book?</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-question-line text-primary_button text-lg mr-3"></i>
                    <span className="text-gray-700">What's included in the cleanup?</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-question-line text-primary_button text-lg mr-3"></i>
                    <span className="text-gray-700">Can you accommodate special themes?</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-question-line text-primary_button text-lg mr-3"></i>
                    <span className="text-gray-700">Do you provide party favors?</span>
                  </div>
                </div>
                <Link href="/booking" className="inline-block mt-6 bg-primary_button text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FFB88C] transition-colors cursor-pointer whitespace-nowrap">
                  Book a Consultation
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
}
