'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    startDate: '',
    days: [] as string[],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDayChange = (day: string) => {
    setFormData(prev => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter(d => d !== day)
        : [...prev.days, day]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        startDate: '',
        days: [],
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Er is iets misgegaan bij het verzenden van uw bericht. Probeer het later opnieuw of neem contact op via telefoon.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const days = [
    { value: 'dinsdag', label: 'Dinsdag' },
    { value: 'woensdag', label: 'Woensdag' },
    { value: 'donderdag', label: 'Donderdag' }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'rgba(217, 194, 126, 0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact & Inschrijving
          </h2>
          <div className="w-24 h-1 mx-auto rounded mb-6" style={{ backgroundColor: '#40735B' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heeft u interesse in onze gastouderopvang? Neem gerust contact op voor meer informatie
            of vul het inschrijvingsformulier in voor een kennismaking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contactgegevens</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 mr-4" style={{ color: '#40735B' }} />
                  <div>
                    <p className="font-semibold text-gray-800">Telefoon</p>
                    <p className="text-gray-600">06 31 08 45 24</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 mr-4" style={{ color: '#40735B' }} />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@debinkskes.nl</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-6 w-6 mr-4" style={{ color: '#40735B' }} />
                  <div>
                    <p className="font-semibold text-gray-800">Locatie</p>
                    <p className="text-gray-600">Berg aan de Maas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Belangrijke informatie</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">LRK nummer:</span>
                  <span className="text-gray-600">102546241</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Openingstijden:</span>
                  <span className="text-gray-600">Di, Wo, Do: 7:30-18:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Tarief:</span>
                  <span className="text-gray-600">€8,49 per uur</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Aangesloten bij{' '}
                    <a
                      href="https://villa-nana.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70 transition-opacity"
                      style={{ color: '#40735B' }}
                    >
                      Gastouderbureau Villa Nana
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id="inschrijven"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Inschrijvingsformulier
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Bedankt voor uw aanmelding!
                  </h4>
                  <p className="text-gray-600">
                    Vivian neemt zo spoedig mogelijk contact met u op voor een kennismaking.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Parent Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Uw naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                        style={{ '--tw-ring-color': '#40735B' } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Child Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                        Naam van uw kind *
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                        Leeftijd kind *
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        required
                        placeholder="bv. 2 jaar, 6 maanden"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Gewenste startdatum
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gewenste dagen (meerdere mogelijk)
                    </label>
                    <div className="space-y-2">
                      {days.map(day => (
                        <label key={day.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.days.includes(day.value)}
                            onChange={() => handleDayChange(day.value)}
                            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-gray-700">{day.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Aanvullende vragen of opmerkingen
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Eventuele vragen of bijzonderheden over uw kind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md font-semibold text-lg text-white transition-opacity ${
                      isSubmitting
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:opacity-80'
                    }`}
                    style={{ backgroundColor: isSubmitting ? '#9ca3af' : '#40735B' }}
                  >
                    {isSubmitting ? 'Versturen...' : 'Verstuur aanmelding'}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Verplichte velden. Uw gegevens worden vertrouwelijk behandeld.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;