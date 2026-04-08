import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact - Chronos Corp',
  description: 'Contactez-nous pour discuter de votre projet. Notre équipe est prête à vous accompagner dans votre transformation digitale.',
};

export default function ContactPage() {
  return (
    <main className="bg-black">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
