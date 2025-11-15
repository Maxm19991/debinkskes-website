import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactgegevens</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span>06 31 08 45 24</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <span>info@debinkskes.nl</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-3" />
                <span>Berg aan de Maas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle links</h3>
            <div className="space-y-2">
              <Link href="#over-ons" className="block hover:opacity-70 transition-opacity">
                Over Vivian
              </Link>
              <Link href="#opvang" className="block hover:opacity-70 transition-opacity">
                Opvanglocatie
              </Link>
              <Link href="#dagindeling" className="block hover:opacity-70 transition-opacity">
                Dagindeling
              </Link>
              <Link href="#tarieven" className="block hover:opacity-70 transition-opacity">
                Tarieven
              </Link>
            </div>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Belangrijke informatie</h3>
            <div className="space-y-2 text-sm">
              <p>LRK nummer: 102546241</p>
              <p>Aangesloten bij:</p>
              <Link
                href="https://villa-nana.nl/"
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#D9C27E' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gastouderbureau Villa Nana
              </Link>
              <p className="mt-4">Openingstijden:</p>
              <p>Di, Wo, Do: 7:30 - 18:30</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Gastouderopvang De Binkskes. Alle rechten voorbehouden.
            </p>
            <Link
              href="#inschrijven"
              className="text-white px-6 py-2 rounded-md text-sm font-medium transition-opacity hover:opacity-80 mt-4 md:mt-0"
              style={{ backgroundColor: '#40735B' }}
            >
              Inschrijven voor ouders
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;