'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Pricing = () => {
  const includedServices = [
    { service: "Vers fruit", icon: "🍎" },
    { service: "Warme maaltijd (11:30)", icon: "🍽️" },
    { service: "Drinken (water, melk, sap)", icon: "🥛" },
    { service: "Tussendoortjes", icon: "🥨" },
    { service: "Boterham (16:30)", icon: "🥪" },
    { service: "Zalf", icon: "🧴" },
    { service: "Billendoekjes", icon: "🧻" }
  ];

  const parentProvides = [
    { item: "Flesvoeding", icon: "🍼" },
    { item: "Speciale voeding", icon: "🥄" }
  ];

  return (
    <section id="tarieven" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Praktische Informatie
          </h2>
          <div className="w-24 h-1 mx-auto rounded mb-6" style={{ backgroundColor: '#40735B' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparante tarieven en duidelijke informatie over wat inbegrepen is.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-semibold text-gray-800">Openingstijden</h3>
            </div>
            <div className="space-y-3 text-center">
              <div className="p-3 rounded" style={{ backgroundColor: 'rgba(217, 194, 126, 0.25)' }}>
                <p className="font-semibold text-gray-800">DINSDAG</p>
                <p style={{ color: '#40735B' }}>7:30 - 18:30</p>
              </div>
              <div className="p-3 rounded" style={{ backgroundColor: 'rgba(217, 194, 126, 0.25)' }}>
                <p className="font-semibold text-gray-800">WOENSDAG</p>
                <p style={{ color: '#40735B' }}>7:30 - 18:30</p>
              </div>
              <div className="p-3 rounded" style={{ backgroundColor: 'rgba(217, 194, 126, 0.25)' }}>
                <p className="font-semibold text-gray-800">DONDERDAG</p>
                <p style={{ color: '#40735B' }}>7:30 - 18:30</p>
              </div>
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white p-8 rounded-lg shadow-lg transform scale-105"
            style={{ backgroundColor: '#40735B' }}
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold">Tarieven 2025</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
                <p className="text-3xl font-bold">€8,49</p>
                <p className="text-lg">per uur per kind</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
                <p className="text-xl font-semibold">€49,50</p>
                <p className="text-sm">per maand gastouderbureau</p>
              </div>
              <div className="p-3 rounded text-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <p className="font-semibold">✅ Kinderopvangtoeslag mogelijk</p>
                <p>LRK geregistreerd</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-semibold text-gray-800">Contact</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <p className="font-semibold text-gray-800">Telefoon</p>
                <p style={{ color: '#40735B' }}>06 31 08 45 24</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">Email</p>
                <p style={{ color: '#40735B' }}>info@debinkskes.nl</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">LRK nummer</p>
                <p style={{ color: '#40735B' }}>102546241</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What's Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              ✅ Gastouder verzorgt
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedServices.map((item, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg" style={{ backgroundColor: 'rgba(217, 194, 126, 0.2)' }}>
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-gray-700">{item.service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              📝 Ouder/verzorger geeft mee
            </h3>
            <div className="space-y-4">
              {parentProvides.map((item, index) => (
                <div key={index} className="flex items-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(217, 194, 126, 0.2)' }}>
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <span className="text-gray-700 text-lg">{item.item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(217, 194, 126, 0.25)' }}>
              <h4 className="font-semibold text-gray-800 mb-2">Aangesloten bij:</h4>
              <p className="font-medium" style={{ color: '#40735B' }}>Gastouderbureau Villa Nana</p>
              <a
                href="https://villa-nana.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:opacity-70 transition-opacity"
                style={{ color: '#40735B' }}
              >
                villa-nana.nl
              </a>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-white p-8 rounded-lg inline-block" style={{ backgroundColor: '#40735B' }}>
            <h4 className="text-2xl font-semibold mb-4">Klaar om te starten?</h4>
            <p className="mb-6 text-lg">
              Neem contact op voor een vrijblijvende kennismaking en inschrijving!
            </p>
            <Link
              href="#inschrijven"
              className="bg-white px-8 py-3 rounded-md font-semibold transition-opacity hover:opacity-80 inline-block text-lg"
              style={{ color: '#40735B' }}
            >
              Inschrijven voor ouders
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;