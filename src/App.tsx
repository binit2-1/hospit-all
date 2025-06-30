import { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Activity, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  Stethoscope,
  FileText,
  BarChart3,
  Shield,
  UserCheck,
  Building2
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'admissions', label: 'Patient Admissions' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/Hospit-All/logo/alt logo.png" alt="Hospit-All Logo" className="h-8 w-8 object-contain mb-1" />
              <span className="font-bold text-xl text-gray-800">Hospit-All</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="/Hospit-All/logo/alt logo.png" 
                alt="Hospit-All Logo" 
                className="h-16 w-16 object-contain mx-auto mb-4"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hospit-All
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Streamline hospital operations with our comprehensive patient admission and monitoring system. 
                Real-time tracking, efficient scheduling, and centralized healthcare management.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <button 
                  onClick={() => scrollToSection('admissions')}
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Admissions Section */}
      <section id="admissions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Admissions System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive patient management tools designed for modern healthcare facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-Time OPD Queue Tracking */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time OPD Queue Tracking</h3>
              <p className="text-gray-600 mb-4">
                Monitor patient queues in real-time with live updates and estimated wait times. 
                Reduce overcrowding and improve patient satisfaction.
              </p>
              <div className="bg-gray-100 rounded p-4">
                <p className="text-sm text-gray-500">[Queue Tracking Interface Image]</p>
              </div>
            </div>

            {/* Appointment Scheduling */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Calendar className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Appointment Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Advanced scheduling system with automated reminders, conflict resolution, 
                and multi-doctor calendar management.
              </p>
              <div className="bg-gray-100 rounded p-4">
                <p className="text-sm text-gray-500">[Scheduling Interface Image]</p>
              </div>
            </div>

            {/* Admissions Logging */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <FileText className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Admissions Logging</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive admission records with digital forms, automated data entry, 
                and seamless integration with hospital systems.
              </p>
              <div className="bg-gray-100 rounded p-4">
                <p className="text-sm text-gray-500">[Admissions Form Image]</p>
              </div>
            </div>

            {/* Patient Data Integration */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <UserCheck className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Data Integration</h3>
              <p className="text-gray-600 mb-4">
                Unified patient records across all departments with secure data sharing 
                and comprehensive medical history tracking.
              </p>
              <div className="bg-gray-100 rounded p-4">
                <p className="text-sm text-gray-500">[Patient Data Dashboard Image]</p>
              </div>
            </div>

            {/* Centralized Monitoring */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Activity className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Centralized Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Real-time monitoring dashboard for hospital operations, patient flow, 
                and resource utilization across all departments.
              </p>
              <div className="bg-gray-100 rounded p-4">
                <p className="text-sm text-gray-500">[Monitoring Dashboard Image]</p>
              </div>
            </div>

            {/* Patient Load Balancing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <BarChart3 className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Load Balancing</h3>
              <p className="text-gray-600 mb-4">
                Intelligent patient distribution across departments and facilities 
                to optimize care delivery and reduce wait times.
              </p>
              <div className="bg-gray-100 rounded p-4">
                <p className="text-sm text-gray-500">[Load Balancing Chart Image]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-Wide Health Monitoring Section */}
      <section id="monitoring" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">City-Wide Health Module</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare monitoring and coordination across multiple facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Hospital Integration</h4>
                    <p className="text-gray-600">Connect all healthcare facilities in the region for seamless data sharing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regional Health Analytics</h4>
                    <p className="text-gray-600">Comprehensive health statistics and trend analysis across the city</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Resource Optimization</h4>
                    <p className="text-gray-600">Efficient allocation of medical resources based on real-time demand</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <Activity className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-500">[City-Wide Health Dashboard Image]</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Benefits to Healthcare Delivery</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Reduced Wait Times</h4>
                <p className="text-gray-600">Up to 40% reduction in patient wait times through optimized scheduling</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Improved Efficiency</h4>
                <p className="text-gray-600">Streamlined operations leading to 30% increase in patient throughput</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* Heart icon removed */}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Better Patient Care</h4>
                <p className="text-gray-600">Enhanced care coordination and reduced medical errors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading healthcare technology solutions for modern hospitals and medical facilities
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Overview</h3>
              <p className="text-gray-600 mb-4">
                Hospit-All has been at the forefront of healthcare technology innovation for over a decade. 
                We specialize in developing comprehensive patient management solutions that enhance hospital 
                efficiency and improve patient care outcomes.
              </p>
              <p className="text-gray-600">
                Our systems are trusted by hospitals nationwide, processing millions of patient interactions 
                annually while maintaining the highest standards of security and reliability.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <Building2 className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-500">[Company Overview Image]</p>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To revolutionize healthcare delivery through innovative technology solutions that streamline 
                operations, reduce wait times, and enhance patient care quality across all medical facilities.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To create a connected healthcare ecosystem where every patient receives timely, efficient, 
                and personalized care through seamless integration of technology and medical expertise.
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Dr. Hari Shankar Parsai', role: 'Chief Medical Officer', icon: Stethoscope },
                { name: 'Aish Biradar', role: 'Chief Technology Officer', icon: Activity },
                { name: 'Rajiv Chetri', role: 'Chief Operations Officer', icon: Users }
              ].map((member, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-6">
                  <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="h-12 w-12 text-gray-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-sm text-gray-500 mt-2">[Team Member Image]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to learn more about our healthcare solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-2">
                    Hospital/Organization
                  </label>
                  <input
                    type="text"
                    id="hospital"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your hospital name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone Number</p>
                      <p className="text-gray-600">+91 9942995732</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Address</p>
                      <p className="text-gray-600">24020101000@reva.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Office Location</p>
                      <p className="text-gray-600">REVA University</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-500">[Interactive Location Map]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* Heart icon removed */}
                <span className="font-bold text-xl">Hospit-All</span>
              </div>
              <p className="text-gray-300">
                Leading healthcare technology solutions for modern hospitals and medical facilities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>+91 9942995732</p>
                <p>24020101000@reva.edu.in</p>
                <p> REVA University</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Hospit-All. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;