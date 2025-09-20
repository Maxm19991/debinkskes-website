'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Welkom bij{' '}
              <span className="text-amber-600">Gastouderopvang De Binkskes</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Bent u op zoek naar een veilige, liefdevolle en gezellige plek voor uw kind of kinderen?
              Dan bent u bij mij aan het juiste adres.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Via deze site bied ik u de mogelijkheid om meer over De Binkskes te weten te komen.
              Heeft u nog vragen neem dan gerust contact op.
            </p>

            <p className="text-lg font-medium text-gray-700 mb-8 italic">
              Groetjes Vivian Lotz
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#inschrijven"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Inschrijven voor ouders
              </Link>
              <Link
                href="#over-ons"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Meer over ons
              </Link>
            </div>
          </motion.div>

          {/* Logo/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-amber-200 rounded-full w-80 h-80 md:w-96 md:h-96 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🌳</div>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-800">DE BINKSKES</h2>
                <div className="flex justify-center mt-4 space-x-2">
                  <span className="text-3xl">🦒</span>
                  <span className="text-3xl">🦁</span>
                  <span className="text-3xl">🐘</span>
                  <span className="text-3xl">🐨</span>
                  <span className="text-3xl">🦛</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">👶</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">0-4 jaar</h3>
            <p className="text-gray-600">Opvang voor kinderen van 0 tot 4 jaar</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3 dagen per week</h3>
            <p className="text-gray-600">Dinsdag, woensdag en donderdag</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Berg aan de Maas</h3>
            <p className="text-gray-600">Mooie locatie met grote tuin</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;