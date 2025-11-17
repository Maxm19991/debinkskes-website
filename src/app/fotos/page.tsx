'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const photosList = [
  '/gallerij/De binkskes.jpeg',
  '/gallerij/Moestuintje.jpeg',
  '/gallerij/Mr_fold.jpeg',
  '/gallerij/Wandelen.jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.57.jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.57 (1).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.57 (2).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58.jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (1).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (2).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (3).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (4).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (5).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (6).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (7).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (8).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (9).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (10).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (11).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (12).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.58 (13).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.59.jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.59 (1).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.59 (2).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.59 (3).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.28.59 (4).jpeg',
  '/gallerij/WhatsApp Image 2025-11-14 at 16.29.00.jpeg',
];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function FotosPage() {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    setPhotos(shuffleArray(photosList));
  }, []);
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'linear-gradient(to bottom right, rgba(217, 194, 126, 0.15), rgba(217, 194, 126, 0.25))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Link
            href="/#opvang"
            className="inline-flex items-center text-gray-700 hover:opacity-70 transition-opacity mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar opvanglocatie
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Onze <span style={{ color: '#40735B' }}>Foto's</span>
          </h1>
          <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#40735B' }}></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Bekijk hier foto's van onze gastouderopvang, de speelruimte, tuin en de gezellige momenten bij De Binkskes.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.length > 0 && photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              <Image
                src={photo}
                alt={`De Binkskes foto ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/#opvang"
            className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition-opacity hover:opacity-80 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#40735B' }}
          >
            Terug naar home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
