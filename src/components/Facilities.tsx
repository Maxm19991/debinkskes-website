'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Facilities = () => {
  return (
    <section id="opvang" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Opvanglocatie
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Indoor Facilities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="text-4xl mr-4">🏠</span>
              Binnen
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                De opvang vindt plaats in een gezellige, kindvriendelijke speelruimte.
                Er is voldoende speelgoed aanbod voor iedere leeftijd.
              </p>
              <p>
                Daarnaast bied ik speelgoed aan wat bij de ontwikkeling van het kind aansluit.
                Aangezien de ruimte helemaal is ingericht voor de kinderen kunnen ze hier gezellig
                samen spelen en ontdekken.
              </p>
            </div>

            <div className="mt-6 bg-amber-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <span className="text-2xl mr-2">🛏️</span>
                Slaapruimte
              </h4>
              <p className="text-gray-700 text-sm">
                De opvangruimte is opgesplitst in drie gedeeltes: speelruimte, slaapruimte, commode.
                In de slaapruimte staan 2 duobedjes en ik heb 1 campingbedje.
                Alles is in dezelfde ruimte, wel afgescheiden met een schuifdeur.
              </p>
            </div>
          </motion.div>

          {/* Indoor Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-br from-orange-200 to-amber-300 rounded-lg w-full h-80 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🎪</div>
                <p className="text-amber-800 font-semibold">Speelruimte</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-2xl">
                  <span>🧸</span>
                  <span>🎨</span>
                  <span>📚</span>
                  <span>🧩</span>
                  <span>🎵</span>
                  <span>🎲</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Outdoor Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:order-1"
          >
            <div className="bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg w-full h-80 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🌳</div>
                <p className="text-green-800 font-semibold">Grote Tuin</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-2xl">
                  <span>🏰</span>
                  <span>🛝</span>
                  <span>🚲</span>
                  <span>🏖️</span>
                  <span>⚽</span>
                  <span>🐕</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Outdoor Facilities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg lg:order-2"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="text-4xl mr-4">🌞</span>
              Buiten
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Wij proberen iedere dag naar buiten te gaan, voor een klein beetje regen zijn wij niet bang.
              </p>
              <p>
                Wij hebben een grote, kindvriendelijke tuin. In de tuin staat een speelhuis met glijbaan,
                een zandbak, loopfietsjes, auto, ballen en nog veel meer.
              </p>
              <p>
                Ook maken we iedere dag een wandeling met onze hond Binky.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">💧</span>
                  Zomeractiviteiten
                </h4>
                <p className="text-gray-700 text-sm">
                  In de zomermaanden maken we gebruik van watertafels waar de kinderen zich volop
                  mee kunnen amuseren en tevens afkoelen.
                </p>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">☂️</span>
                  Bescherming
                </h4>
                <p className="text-gray-700 text-sm">
                  Voor de bescherming van de huidjes is er een grote parasol boven de zandbak en er is
                  voldoende schaduw om in te spelen.
                </p>
              </div>
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
          <div className="bg-amber-600 text-white p-8 rounded-lg inline-block">
            <h4 className="text-2xl font-semibold mb-4">Interesse in onze opvang?</h4>
            <p className="mb-6 text-lg">
              Kom gerust langs voor een vrijblijvende kennismaking!
            </p>
            <Link
              href="#inschrijven"
              className="bg-white text-amber-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
            >
              Inschrijven voor ouders
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;