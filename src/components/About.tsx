'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="over-ons" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Voorstellen
          </h2>
          <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#40735B' }}></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(217, 194, 126, 0.2)' }}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Over Vivian</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Ik ben Vivian Lotz, ben 53 jaar en ben getrouwd met Ivo Salden. Samen hebben we twee
                  zonen Nic en Tijs. We hebben een hond Binky en een poes Sien.
                </p>
                <p>
                  Wij wonen samen in Berg aan de Maas, wat een hele mooie locatie is om met de kindjes
                  er op uit te gaan. (Bootjes kijken aan het kanaal en met het veerpondje naar de overkant
                  via de Maas)
                </p>
                <p>
                  Na het behalen van mijn diploma gespecialiseerd pedagogisch medewerker niveau 4 en
                  mijn certificaat in Babyspecialisme en stage te hebben gelopen bij twee fantastische
                  kinderdagverblijven waar ik ontzettend veel geleerd heb en mijzelf verder heb kunnen
                  ontwikkelen.
                </p>
                <p>
                  In Augustus 2025 ben ik mijn eigen gastouderopvang De Binkskes gestart.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Family Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative rounded-lg w-full h-80 shadow-lg overflow-hidden">
              <Image
                src="/Familie Lotz-Salden.jpeg"
                alt="Familie Lotz-Salden"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-8 rounded-lg mb-12"
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Opvang De Binkskes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4 mt-1">🎯</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mijn doel</h4>
                  <p className="text-gray-700">
                    De kwaliteiten van een professionele kinderopvang combineren
                    met huiselijkheid en persoonlijke benadering die een gastouder biedt.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4 mt-1">🌱</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ontwikkeling</h4>
                  <p className="text-gray-700">
                    Ik wil een veilige, stimulerende, gezellige en liefdevolle omgeving creëren waarin de
                    kinderen zich optimaal kunnen ontwikkelen op hun eigen tempo.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4 mt-1">🎨</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Activiteiten</h4>
                  <p className="text-gray-700">
                    Ik bied veel persoonlijke aandacht en pas verschillende activiteiten toe
                    op de ontwikkelingsbehoeften van uw kind. Denk aan knutselen en
                    bouwopdrachten om de fijne motoriek te stimuleren.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4 mt-1">📚</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Taal & Muziek</h4>
                  <p className="text-gray-700">
                    Ik zing graag en lees ook heel graag voor, dit vind ik erg belangrijk om de
                    taalontwikkeling van de kinderen te stimuleren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-white p-6 rounded-lg inline-block" style={{ backgroundColor: '#40735B' }}>
            <h4 className="text-xl font-semibold mb-4">✅ LRK Geregistreerd</h4>
            <p className="mb-4">
              U kunt kinderopvangtoeslag aanvragen, en ik ben aangesloten bij Gastouderbureau Villa Nana.
            </p>
            <Link
              href="#inschrijven"
              className="bg-white px-6 py-2 rounded-md font-semibold transition-opacity hover:opacity-80 inline-block"
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

export default About;