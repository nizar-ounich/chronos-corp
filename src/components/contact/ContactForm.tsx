'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Production audiovisuelle',
    'Management de talents',
    'Digital & Web',
    'Autre',
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Envoyez-nous un message</h2>
      
      <form action="https://formsubmit.co/contact@chronoscorp.fr" method="POST" className="space-y-6">
        {/* FormSubmit.co Configuration */}
        <input type="hidden" name="_subject" value="Nouveau message de contact - Chronos Corp" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="+33 6 17 53 60 03"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Nom de votre entreprise"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
            Service souhaité *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
          >
            <option value="" className="bg-black">Sélectionnez un service</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-black">
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
            placeholder="Parlez-nous de votre projet..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>
    </div>
  );
}
