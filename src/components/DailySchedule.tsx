'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const DailySchedule = () => {
  const schedule = [
    {
      time: "7:30 - 9:00",
      activity: "Brengen & Vrij Spelen",
      description: "De kinderen worden gebracht, ouders mogen gezellig mee naar binnen komen om afscheid te nemen. Lekker vrij spelen.",
      icon: "👋"
    },
    {
      time: "9:00 - 9:30",
      activity: "Fruit & Verzorging",
      description: "Fruit eten en drinken. Verschonen/naar het toilet gaan.",
      icon: "🍎"
    },
    {
      time: "9:30 - 10:00",
      activity: "Wandeling met Binky",
      description: "Wandeling met hond Binky. Bij mooi weer naar het kanaal om bootjes te kijken en eendjes voeren. Bij slecht weer binnen activiteiten zoals knutselen, dansen, voorlezen.",
      icon: "🚶‍♀️"
    },
    {
      time: "10:00",
      activity: "Slaapje Kleintjes",
      description: "Slaapje voor de kleintjes.",
      icon: "😴"
    },
    {
      time: "11:30 - 12:30",
      activity: "Warme Maaltijd",
      description: "We eten een warme maaltijd en drinken water of iets anders. Na de maaltijd worden alle kindjes verschoond/gaan naar toilet.",
      icon: "🍽️"
    },
    {
      time: "12:30 - 14:30",
      activity: "Middagdutje",
      description: "Middagdutje voor de kindjes die nog slapen. Voor kindjes die wakker blijven: vrijspelen of samen een spelletje doen.",
      icon: "💤"
    },
    {
      time: "14:30 - 15:00",
      activity: "Wakker Worden",
      description: "Kindjes worden rustig wakker en worden verschoond/gaan naar toilet.",
      icon: "☀️"
    },
    {
      time: "15:00",
      activity: "Tussendoortje",
      description: "Tussendoortje met drinken.",
      icon: "🥨"
    },
    {
      time: "16:30 - 17:00",
      activity: "Boterham",
      description: "Boterham met melk (of iets anders).",
      icon: "🥪"
    },
    {
      time: "17:00 - 18:30",
      activity: "Ophalen",
      description: "Alle kindjes worden opgehaald en nog even een momentje om de dag te bespreken.",
      icon: "🏠"
    }
  ];

  return (
    <section id="dagindeling" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dagindeling
          </h2>
          <div className="w-24 h-1 mx-auto rounded mb-6" style={{ backgroundColor: '#40735B' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Een dag bij De Binkskes is gevuld met leuke activiteiten, rust en persoonlijke aandacht.
            Hieronder vindt u onze vaste dagindeling.
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Time & Icon */}
              <div className="flex-shrink-0 text-center">
                <div className="text-white rounded-full w-24 h-24 flex items-center justify-center mb-2" style={{ backgroundColor: '#40735B' }}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <p className="font-bold text-lg" style={{ color: '#40735B' }}>{item.time}</p>
              </div>

              {/* Content */}
              <div className={`flex-1 bg-gray-50 p-6 rounded-lg shadow-md ${
                index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'
              }`}>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.activity}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-lg mb-12"
          style={{ backgroundColor: 'rgba(217, 194, 126, 0.2)' }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Flexibiliteit & Persoonlijke Aandacht
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="text-3xl mr-4 mt-1">🌧️</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Weer</h4>
                <p className="text-gray-700">
                  Wij gaan bijna altijd naar buiten! Voor een klein beetje regen zijn wij niet bang.
                  Bij heel slecht weer hebben we binnen genoeg leuke activiteiten.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4 mt-1">👶</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Individuele Behoeften</h4>
                <p className="text-gray-700">
                  Elk kind is uniek. Wij passen ons aan de individuele slaap- en eetbehoeften
                  van uw kind aan binnen onze dagstructuur.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-white p-8 rounded-lg inline-block" style={{ backgroundColor: '#40735B' }}>
            <h4 className="text-2xl font-semibold mb-4">Vragen over onze dagindeling?</h4>
            <p className="mb-6 text-lg">
              Neem gerust contact op voor meer informatie!
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

export default DailySchedule;