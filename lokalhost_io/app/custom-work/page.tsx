'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdSend, IoMdClose, IoMdRocket } from 'react-icons/io'
import { FaReact, FaNodeJs, FaMobile, FaCloud, FaCode, FaPalette, FaRocket, FaCheckCircle } from 'react-icons/fa'
import { SiNextdotjs, SiFlutter, SiReact, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'
import { MdWeb, MdDesignServices, MdSpeed, MdSecurity } from 'react-icons/md'

function CustomWorkPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedTimeline, setSelectedTimeline] = useState('')
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    features: [],
    techPreferences: [],
    referenceUrls: '',
    additionalInfo: ''
  })

  const services = [
    {
      id: 'web-apps',
      icon: <MdWeb className="text-3xl" />,
      title: 'Web Applications',
      shortDesc: 'Full-stack web applications built with modern technologies',
      description: 'Custom web applications tailored to your business needs. From dashboards and admin panels to complex enterprise solutions, we build scalable, secure, and performant web apps using cutting-edge technologies like React, Next.js, Node.js, and more.',
      features: [
        'Responsive design for all devices',
        'RESTful API development',
        'Database design & integration',
        'Authentication & authorization',
        'Real-time features with WebSockets',
        'Cloud deployment & hosting',
        'Performance optimization',
        'SEO optimization'
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
      startingPrice: '$5,000',
      timeline: '4-12 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'saas',
      icon: <FaCloud className="text-3xl" />,
      title: 'SaaS Products',
      shortDesc: 'Complete SaaS platforms from concept to launch',
      description: 'End-to-end SaaS development including multi-tenancy architecture, subscription management, payment integration, and more. We help you build, launch, and scale your SaaS product with best practices and proven technologies.',
      features: [
        'Multi-tenant architecture',
        'Subscription & billing integration',
        'User management & roles',
        'Analytics & reporting dashboard',
        'Email & notification system',
        'API & webhook support',
        'Automated backups & recovery',
        'Scalable infrastructure'
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'Stripe', 'AWS', 'Redis', 'Prisma'],
      startingPrice: '$15,000',
      timeline: '8-16 weeks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'mobile-apps',
      icon: <FaMobile className="text-3xl" />,
      title: 'Mobile Applications',
      shortDesc: 'Cross-platform mobile apps with React Native & Flutter',
      description: 'Native-quality mobile applications that work seamlessly on both iOS and Android. Using React Native and Flutter, we build performant cross-platform apps with a single codebase, reducing development time and costs.',
      features: [
        'iOS & Android compatibility',
        'Native performance & UX',
        'Push notifications',
        'Offline functionality',
        'In-app purchases',
        'Social media integration',
        'Geolocation services',
        'App store deployment'
      ],
      techStack: ['React Native', 'Flutter', 'Firebase', 'Redux', 'Native Modules'],
      startingPrice: '$8,000',
      timeline: '6-14 weeks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'custom-solutions',
      icon: <FaCode className="text-3xl" />,
      title: 'Custom Solutions',
      shortDesc: 'Anything on the web - your vision, our expertise',
      description: 'Have a unique idea or specific requirement? We specialize in building custom solutions that don\'t fit into traditional categories. From automation tools to AI integrations, we turn your vision into reality.',
      features: [
        'Custom API development',
        'Third-party integrations',
        'Automation & scripting',
        'Data migration & transformation',
        'Chrome extensions & plugins',
        'Microservices architecture',
        'AI/ML integration',
        'Custom workflows'
      ],
      techStack: ['Custom stack based on requirements'],
      startingPrice: '$3,000',
      timeline: '2-10 weeks',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ui-ux-design',
      icon: <FaPalette className="text-3xl" />,
      title: 'UI/UX Design',
      shortDesc: 'Beautiful, user-centered design that converts',
      description: 'Professional UI/UX design services to create intuitive and visually stunning interfaces. From wireframes to high-fidelity prototypes, we ensure your product delivers exceptional user experience.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'High-fidelity mockups',
        'Design system creation',
        'Responsive design',
        'Usability testing',
        'Brand identity',
        'Design handoff to developers'
      ],
      techStack: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      startingPrice: '$2,500',
      timeline: '2-6 weeks',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'consulting',
      icon: <FaRocket className="text-3xl" />,
      title: 'Tech Consulting',
      shortDesc: 'Expert guidance for your tech decisions',
      description: 'Strategic technology consulting to help you make informed decisions. Whether you need architecture review, code audit, or technology stack selection, we provide expert guidance.',
      features: [
        'Technology stack selection',
        'Architecture design & review',
        'Code quality audit',
        'Performance optimization',
        'Security assessment',
        'Scalability planning',
        'Team training & mentoring',
        'Best practices implementation'
      ],
      techStack: ['Varies by project needs'],
      startingPrice: '$150/hour',
      timeline: 'Flexible',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000', icon: '💰' },
    { value: '5k-15k', label: '$5,000 - $15,000', icon: '💎' },
    { value: '15k-30k', label: '$15,000 - $30,000', icon: '🚀' },
    { value: '30k-50k', label: '$30,000 - $50,000', icon: '⭐' },
    { value: '50k-plus', label: '$50,000+', icon: '👑' }
  ]

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (1-2 weeks)', icon: '⚡' },
    { value: '1-month', label: '1 Month', icon: '📅' },
    { value: '2-3-months', label: '2-3 Months', icon: '📆' },
    { value: '3-6-months', label: '3-6 Months', icon: '🗓️' },
    { value: 'flexible', label: 'Flexible Timeline', icon: '🌊' }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setFormData({
      ...formData,
      serviceType: service.title
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Project request submitted:', formData)
    alert('Your project request has been submitted! We\'ll get back to you within 24 hours.')
    setSelectedService(null)
    setStep(1)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      serviceType: '',
      projectDescription: '',
      budget: '',
      timeline: '',
      features: [],
      techPreferences: [],
      referenceUrls: '',
      additionalInfo: ''
    })
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
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
      <div className="w-full container max-w-[1580px] h-auto mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Hero Section */}
<div className="mb-20">
  <div className="border border-dashed p-8 md:p-12 lg:p-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 text-xs font-sans font-semibold rounded-full border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 inline-block">
              Custom Development Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold font-sans leading-tight"
          >
            Let's Build Something{' '}
              Amazing
            Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-[17px] text-gray-600 dark:text-gray-300 font-sans font-medium leading-relaxed"
          >
            From web applications to mobile apps, SaaS platforms to custom solutions - we turn your ideas into reality with cutting-edge technology and exceptional design.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 text-sm font-sans font-medium">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
              <FaCheckCircle className="text-white text-sm" />
            </div>
            <span className="text-gray-700 dark:text-gray-200 text-sm">100+ Projects Delivered Successfully</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-sans font-medium">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
              <FaCheckCircle className="text-white text-sm" />
            </div>
            <span className="text-gray-700 dark:text-gray-200 text-sm">5+ Years of Expert Experience</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-sans font-medium">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0">
              <FaCheckCircle className="text-white text-sm" />
            </div>
            <span className="text-gray-700 dark:text-gray-200 text-sm">24-48 Hour Response Time Guarantee</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <motion.button
            transition={{ duration: 0.28, ease: "easeInOut" }}
            whileHover={{ y: -3 }}
            whileTap={{ y: -4 }}
            className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-50 dark:border-neutral-400 relative overflow-hidden cursor-pointer text-sm font-sans font-medium px-8 py-2 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2"
          >
            <span><IoMdRocket className="text-lg text-neutral-700" /></span>
            Start Your Project
          </motion.button>
          <motion.button
            transition={{ duration: 0.28, ease: "easeInOut" }}
            whileHover={{ y: -3 }}
            whileTap={{ y: -4 }}
            className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer text-sm font-sans font-medium px-8 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Side - Image/Video Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Placeholder Container - Add your image or video here */}
        <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
          
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          
          {/* Placeholder Content - Replace this entire div with your image/video */}
          <div className="relative z-10 text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-sans font-medium text-sm">
              Add your image or video here
            </p>
            <p className="text-gray-400 dark:text-gray-500 font-sans text-xs mt-2">
              Replace this placeholder with your media content
            </p>
          </div>

          {/* Example: Uncomment below to add an image */}
          {/* 
          <img 
            src="/your-image.jpg" 
            alt="Hero Image" 
            className="w-full h-full object-cover"
          />
          */}

          {/* Example: Uncomment below to add a video */}
          {/* 
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/your-video.mp4" type="video/mp4" />
          </video>
          */}

        </div>

        {/* Decorative Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10" />
      </motion.div>

    </div>
  </div>
</div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="border border-dashed p-6 md:p-10">
            <div className="mb-10">
              <h2 className="text-2xl md:text-4xl font-bold font-sans mb-3">Our Services</h2>
              <p className="text-gray-600 dark:text-gray-300 font-sans font-medium text-sm md:text-base">
                Choose the service that fits your needs, or let us know if you need something custom
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-dashed p-6 hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  onClick={() => handleServiceSelect(service)}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-t from-[#262626] to-[#525252] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-neutral-200">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold font-sans mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 font-sans font-medium text-sm mb-4">
                      {service.shortDesc}
                    </p>

                    <div className="flex items-center justify-between mb-4 text-xs font-sans font-medium">
                      <span className="text-gray-500 dark:text-gray-400">Starting at</span>
                      <span className="font-bold text-base">{service.startingPrice}</span>
                    </div>

                    <div className="flex items-center justify-between mb-6 text-xs font-sans font-medium">
                      <span className="text-gray-500 dark:text-gray-400">Timeline</span>
                      <span className="font-bold">{service.timeline}</span>
                    </div>

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className="w-full transition-all duration-300 flex items-center justify-center gap-2 border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer text-sm font-sans font-medium px-4 py-2.5 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                    >
                      Get Started
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="border border-dashed p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold font-sans mb-3">Technologies We Master</h2>
              <p className="text-gray-600 dark:text-gray-300 font-sans font-medium text-sm">
                Modern tech stack for cutting-edge solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: <FaReact />, name: 'React' },
                { icon: <SiNextdotjs />, name: 'Next.js' },
                { icon: <FaNodeJs />, name: 'Node.js' },
                { icon: <SiReact />, name: 'React Native' },
                { icon: <SiFlutter />, name: 'Flutter' },
                { icon: <SiTailwindcss />, name: 'Tailwind' },
                { icon: <SiMongodb />, name: 'MongoDB' },
                { icon: <SiPostgresql />, name: 'PostgreSQL' },
                { icon: <FaCloud />, name: 'AWS' },
                { icon: <FaMobile />, name: 'Mobile' },
                { icon: <FaCode />, name: 'TypeScript' },
                { icon: <FaPalette />, name: 'Figma' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center gap-2 p-4 border border-dashed hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-sans font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div>
          <div className="border border-dashed p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-sans">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 font-sans font-medium text-sm md:text-base">
                Let's discuss your project requirements and turn your vision into reality. We offer free consultations to understand your needs and provide accurate estimates.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <motion.button
                  onClick={() => handleServiceSelect(services[3])}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: -4 }}
                  className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-50 dark:border-neutral-400 relative overflow-hidden cursor-pointer text-sm font-sans font-medium px-8 py-3 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2"
                >
                  <span><IoMdRocket className="text-lg text-neutral-700" /></span>
                  Start a Project
                </motion.button>
                <motion.button
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: -4 }}
                  className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer text-sm font-sans font-medium px-8 py-3 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                >
                  Schedule a Call
                </motion.button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Enhanced Project Request Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedService(null)
              setStep(1)
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-slate-900 border border-dashed max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-dashed p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${selectedService.color} rounded-xl flex items-center justify-center text-white`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-sans">{selectedService.title}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-sans font-medium">
                      Step {step} of 3 - Let's build something amazing
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null)
                    setStep(1)
                  }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <IoMdClose className="text-2xl" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="px-6 pt-4">
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1">
                      <div className={`h-2 rounded-full transition-all duration-300 ${
                        s <= step 
                          ? 'bg-gradient-to-r from-[#262626] to-[#525252]' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6">
                {/* Step 1: Service Details & Basic Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-sans mb-4">Service Overview</h3>
                      <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg border border-dashed space-y-4">
                        <p className="text-sm font-sans font-medium text-gray-600 dark:text-gray-300">
                          {selectedService.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-sans font-bold text-sm mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {selectedService.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="text-sm font-sans font-medium text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-sans font-bold text-sm mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedService.techStack.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white dark:bg-slate-700 text-xs font-sans font-medium rounded-full border border-dashed">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-sans font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-sans font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-sans font-medium mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-sans font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Details */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-sans mb-4">Tell Us About Your Project</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-sans font-medium mb-2">Project Description *</label>
                          <textarea
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                            required
                            rows="6"
                            placeholder="Describe your project, goals, target audience, and any specific requirements..."
                            className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-sans font-medium mb-3">Budget Range *</label>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {budgetOptions.map((option) => (
                              <motion.div
                                key={option.value}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  setSelectedBudget(option.value)
                                  setFormData({ ...formData, budget: option.value })
                                }}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                  selectedBudget === option.value
                                    ? 'border-neutral-500 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200'
                                    : 'border-dashed hover:border-neutral-400'
                                }`}
                              >
                                <div className="text-2xl mb-1">{option.icon}</div>
                                <div className="text-sm font-sans font-medium">{option.label}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-sans font-medium mb-3">Project Timeline *</label>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {timelineOptions.map((option) => (
                              <motion.div
                                key={option.value}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  setSelectedTimeline(option.value)
                                  setFormData({ ...formData, timeline: option.value })
                                }}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                  selectedTimeline === option.value
                                    ? 'border-neutral-500 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200'
                                    : 'border-dashed hover:border-neutral-400'
                                }`}
                              >
                                <div className="text-2xl mb-1">{option.icon}</div>
                                <div className="text-sm font-sans font-medium">{option.label}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Additional Details */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-sans mb-4">Final Details</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-sans font-medium mb-2">Reference URLs or Inspirations</label>
                          <textarea
                            name="referenceUrls"
                            value={formData.referenceUrls}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Share links to websites, apps, or designs that inspire you (one per line)..."
                            className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-sans font-medium mb-2">Additional Information</label>
                          <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Any other details, specific requirements, or questions you have..."
                            className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                          />
                        </div>

                        {/* Summary */}
                        <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg border border-dashed">
                          <h4 className="font-sans font-bold mb-4">Project Summary</h4>
                          <div className="space-y-2 text-sm font-sans font-medium">
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Service:</span>
                              <span className="font-bold">{selectedService.title}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                              <span className="font-bold">{budgetOptions.find(b => b.value === formData.budget)?.label || 'Not selected'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                              <span className="font-bold">{timelineOptions.find(t => t.value === formData.timeline)?.label || 'Not selected'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Contact:</span>
                              <span className="font-bold">{formData.email || 'Not provided'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-4 pt-6 border-t border-dashed mt-6">
                  {step > 1 && (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      whileHover={{ y: -3 }}
                      whileTap={{ y: -4 }}
                      className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer text-sm font-sans font-medium px-6 py-2.5 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                    >
                      ← Previous
                    </motion.button>
                  )}
                  
                  <div className="flex gap-4 ml-auto">
                    <motion.button
                      type="button"
                      onClick={() => {
                        setSelectedService(null)
                        setStep(1)
                      }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      whileHover={{ y: -3 }}
                      whileTap={{ y: -4 }}
                      className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer text-sm font-sans font-medium px-6 py-2.5 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                    >
                      Cancel
                    </motion.button>

                    {step < 3 ? (
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        whileHover={{ y: -3 }}
                        whileTap={{ y: -4 }}
                        className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-50 dark:border-neutral-400 relative overflow-hidden cursor-pointer text-sm font-sans font-medium px-6 py-2.5 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                      >
                        Next Step →
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        whileHover={{ y: -3 }}
                        whileTap={{ y: -4 }}
                        className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-50 dark:border-neutral-400 relative overflow-hidden cursor-pointer text-sm font-sans font-medium px-6 py-2.5 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center gap-2"
                      >
                        <IoMdSend className="text-lg text-neutral-700" />
                        Submit Project Request
                      </motion.button>
                    )}
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CustomWorkPage