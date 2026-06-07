/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Navbar, Hero } from './components/Hero';
import { About, Activities, Terms } from './components/AboutActivities';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Activities />
          <Terms />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

