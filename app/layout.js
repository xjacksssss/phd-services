import { Roboto, Open_Sans } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'PHD Services | Plumbing, Heating & Electrical Services in Shepperton',
  description: 'Trusted plumbing, heating, and electrical services in Shepperton. Over 20 years of experience. 24/7 emergency services. Fully licensed and insured. Call 01932 423197.',
  keywords: 'plumbing services shepperton, heating services shepperton, electrical services shepperton, boiler repair, gas certificates, bathroom installation',
  authors: [{ name: 'PHD Services' }],
  openGraph: {
    title: 'PHD Services | Plumbing, Heating & Electrical Services',
    description: 'Trusted plumbing, heating, and electrical services in Shepperton. Over 20 years of experience.',
    url: 'https://www.phdservices.co.uk',
    siteName: 'PHD Services',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <head>
        {/* Google Analytics - Replace with your GA4 ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}