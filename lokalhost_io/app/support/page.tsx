'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdSend, IoMdClose } from 'react-icons/io'
import { FaHeadset, FaBug, FaCode, FaQuestionCircle, FaEnvelope, FaPhone } from 'react-icons/fa'
import { MdBusinessCenter, MdSecurity, MdFeedback } from 'react-icons/md'

function SupportPage() {
  const [selectedSupport, setSelectedSupport] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    priority: 'medium',
    projectType: '',
    budget: '',
    timeline: ''
  })

  const supportOptions = [
    {
      id: 'product-support',
      icon: <FaHeadset className="text-2xl" />,
      title: 'Product Support',
      description: 'Get help with technical issues, troubleshooting, and product questions. Our dedicated support team is available 24/7 to assist you with any challenges you face while using Lokalhost.io.',
      buttonText: 'Get Support',
      formFields: ['name', 'email', 'company', 'subject', 'priority', 'message']
    },
    {
      id: 'custom-work',
      icon: <FaCode className="text-2xl" />,
      title: 'Custom Work & Freelancing',
      description: 'Need custom development, integration, or specialized solutions? Our expert team offers freelancing services to build custom features, integrations, and tailored solutions for your specific needs.',
      buttonText: 'Request Quote',
      formFields: ['name', 'email', 'company', 'phone', 'projectType', 'budget', 'timeline', 'message']
    },
    {
      id: 'report-bug',
      icon: <FaBug className="text-2xl" />,
      title: 'Report a Bug',
      description: 'Found a bug or unexpected behavior? Help us improve Lokalhost.io by reporting issues. We take every bug report seriously and work quickly to resolve problems.',
      buttonText: 'Report Issue',
      formFields: ['name', 'email', 'subject', 'priority', 'message']
    },
   
    {
      id: 'feedback',
      icon: <MdFeedback className="text-2xl" />,
      title: 'Feedback & Suggestions',
      description: 'We love hearing from our community! Share your ideas, feature requests, and suggestions to help us build the best local development platform possible.',
      buttonText: 'Share Feedback',
      formFields: ['name', 'email', 'subject', 'message']
    },
    {
      id: 'general-inquiry',
      icon: <FaQuestionCircle className="text-2xl" />,
      title: 'General Inquiries',
      description: 'Have a question that doesn\'t fit other categories? Reach out to our team for general questions, partnership opportunities, or any other inquiries.',
      buttonText: 'Contact Us',
      formFields: ['name', 'email', 'company', 'subject', 'message']
    },
  ]

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Form submitted successfully!')
    setSelectedSupport(null)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      priority: 'medium',
      projectType: '',
      budget: '',
      timeline: ''
    })
  }

  const renderFormField = (fieldName:any) => {
    const baseInputClass = "w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
    
    switch(fieldName) {
      case 'name':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="John Doe"
              className={baseInputClass}
            />
          </div>
        )
      case 'email':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="john@company.com"
              className={baseInputClass}
            />
          </div>
        )
      case 'company':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company"
              className={baseInputClass}
            />
          </div>
        )
      case 'phone':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className={baseInputClass}
            />
          </div>
        )
      case 'subject':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Brief description of your inquiry"
              className={baseInputClass}
            />
          </div>
        )
      case 'priority':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Priority Level</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className={baseInputClass}
            >
              <option value="low">Low - General question</option>
              <option value="medium">Medium - Need assistance</option>
              <option value="high">High - Blocking issue</option>
              <option value="critical">Critical - Service down</option>
            </select>
          </div>
        )
      case 'projectType':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className={baseInputClass}
            >
              <option value="">Select project type</option>
              <option value="integration">Custom Integration</option>
              <option value="feature">Feature Development</option>
              <option value="migration">Migration Services</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>
        )
      case 'budget':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={baseInputClass}
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>
          </div>
        )
      case 'timeline':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className={baseInputClass}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP - Within 2 weeks</option>
              <option value="1-month">1 Month</option>
              <option value="2-3-months">2-3 Months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        )
      case 'message':
        return (
          <div>
            <label className="block text-sm font-sans font-medium mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="6"
              placeholder="Please provide details about your inquiry..."
              className={baseInputClass}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 20%, transparent 80%)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full container max-w-[1580px] h-auto mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section - Left Aligned */}
        <div className="mb-16">
          <div className="border border-dashed p-8 md:p-12">
            <div className="max-w-3xl space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="px-4 py-2 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 text-xs font-sans font-semibold rounded-full border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 inline-block">
                  Support & Contact
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold font-sans"
              >
                How can we help?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 font-sans font-medium text-sm md:text-base leading-relaxed"
              >
                Get in touch with our sales and support teams for demos, onboarding support, or product questions. Whether you're looking for technical assistance, custom development work, or just want to learn more about Lokalhost.io, we're here to help. Our dedicated team is committed to providing you with the best possible experience and ensuring your success with our platform. Choose the option below that best matches your needs, and we'll get back to you as quickly as possible.
              </motion.p>

              {/* Quick Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                <div className="flex items-center gap-2 text-sm font-sans font-medium text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="text-neutral-500" />
                  <span>support@lokalhost.io</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-sans font-medium text-gray-600 dark:text-gray-300">
                  <FaPhone className="text-neutral-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Support Options Grid */}
        <div className="border border-dashed p-3 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-sans mb-2">Choose Your Support Option</h2>
            <p className="text-gray-600 dark:text-gray-300 font-sans font-medium text-sm">
              Select the category that best describes your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-dashed p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedSupport(option)}
              >
                <div className="w-12 h-12 bg-gradient-to-t from-[#262626] to-[#525252] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-neutral-200">
                  {option.icon}
                </div>
                
                <h3 className="text-lg font-bold font-sans mb-3 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 font-sans font-medium text-sm mb-4 line-clamp-3">
                  {option.description}
                </p>

                <button className="w-full transition-all duration-300 flex items-center justify-center gap-2 border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer text-sm font-sans font-medium px-4 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group-hover:-translate-y-1">
                  {option.buttonText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {selectedSupport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2"
            onClick={() => setSelectedSupport(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-neutral-950 border border-dashed max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Form Header */}
              <div className="sticky top-0 bg-white dark:bg-neutral-950 border-b border-dashed p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-t from-[#262626] to-[#525252] rounded-lg flex items-center justify-center text-neutral-200">
                    {selectedSupport.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-sans">{selectedSupport.title}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-sans font-medium">
                      Fill out the form below and we'll get back to you shortly
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSupport(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <IoMdClose className="text-2xl" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedSupport.formFields.map((field) => (
                    <div key={field} className={field === 'message' ? 'md:col-span-2' : ''}>
                      {renderFormField(field)}
                    </div>
                  ))}
                </div>

                {/* Form Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-dashed">
                  <motion.button
                    type="submit"
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    whileHover={{ y: -3 }}
                    whileTap={{ y: -4 }}
                    className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-50 dark:border-neutral-400 relative overflow-hidden cursor-pointer text-sm font-sans font-medium px-6 py-2.5 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2"
                  >
                    <span><IoMdSend className="text-lg text-neutral-700" /></span>
                    Submit Request
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setSelectedSupport(null)}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    whileHover={{ y: -3 }}
                    whileTap={{ y: -4 }}
                    className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer text-sm font-sans font-medium px-6 py-2.5 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SupportPage