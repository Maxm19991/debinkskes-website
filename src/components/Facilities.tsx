'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Bed, Sun, Droplets, Umbrella } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Facilities = () => {
  return (
    <section id="opvang" className="py-20" style={{ backgroundColor: 'rgba(217, 194, 126, 0.15)' }}>
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
          <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#40735B' }}></div>
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
              <Home className="w-10 h-10 text-gray-700 mr-4" strokeWidth={1.5} />
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

            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(217, 194, 126, 0.25)' }}>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Bed className="w-6 h-6 text-gray-700 mr-2" strokeWidth={1.5} />
                Slaapruimte
              </h4>
              <p className="text-gray-700 text-sm">
                De opvangruimte is opgesplitst in drie gedeeltes: speelruimte, slaapruimte, commode.
                In de slaapruimte staan 2 duobedjes en ik heb 1 campingbedje.
                Alles is in dezelfde ruimte, wel afgescheiden met een schuifdeur.
              </p>
            </div>
          </motion.div>

          {/* Indoor Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full h-80 shadow-lg">
              <ImageCarousel
                images={[
                  '/Speelruimte 1.jpeg',
                  '/Speelruimte 2.jpeg',
                  '/Speelruimte 3.jpeg',
                  '/Speelruimte 4.jpeg'
                ]}
                alt="Speelruimte"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Outdoor Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:order-1"
          >
            <div className="w-full h-80 shadow-lg">
              <ImageCarousel
                images={[
                  '/Grote tuin 1.jpeg',
                  '/Grote tuin 2.jpeg',
                  '/Grote tuin 3.jpeg',
                  '/Grote tuin 4.jpeg'
                ]}
                alt="Grote Tuin"
              />
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
              <Sun className="w-10 h-10 text-gray-700 mr-4" strokeWidth={1.5} />
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
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(217, 194, 126, 0.25)' }}>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Droplets className="w-6 h-6 text-gray-700 mr-2" strokeWidth={1.5} />
                  Zomeractiviteiten
                </h4>
                <p className="text-gray-700 text-sm">
                  In de zomermaanden maken we gebruik van watertafels waar de kinderen zich volop
                  mee kunnen amuseren en tevens afkoelen.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(217, 194, 126, 0.25)' }}>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Umbrella className="w-6 h-6 text-gray-700 mr-2" strokeWidth={1.5} />
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
          <div className="text-white p-8 rounded-lg inline-block" style={{ backgroundColor: '#40735B' }}>
            <h4 className="text-2xl font-semibold mb-4">Interesse in onze opvang?</h4>
            <p className="mb-6 text-lg">
              Kom gerust langs voor een vrijblijvende kennismaking!
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

export default Facilities;