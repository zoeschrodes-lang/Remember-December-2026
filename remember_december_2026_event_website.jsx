export default function RememberDecemberWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.85)), url('/mnt/data/20251203_181700.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <img
            src="/mnt/data/Untitled design (5).png"
            alt="Remember December Logo"
            className="w-72 md:w-96 mx-auto mb-8 drop-shadow-2xl"
          />

          <p className="uppercase tracking-[0.35em] text-red-300 text-sm md:text-base mb-4">
            CRC Summer Vacay 2026
          </p>

          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6">
            Remember
            <br />
            December
          </h1>

          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-sm md:text-lg font-bold tracking-widest uppercase mb-8 shadow-2xl animate-pulse">
            5 Year Anniversary Celebration
          </div>

          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            An unforgettable summer experience filled with community, worship,
            adventure, beach sunsets, evangelism, water baptisms, and life-changing moments.
          </p>

          <a
            href="https://links.subprimekings.com/widget/survey/lH0jFR7jofTKojGxW1lJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-500 transition-all duration-300 px-10 py-5 rounded-2xl text-lg md:text-xl font-bold shadow-2xl hover:scale-105"
          >
            Request More Info
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            Fifth Year Anniversary
          </h2>

          <div className="w-32 h-1 bg-red-600 mx-auto mb-10 rounded-full" />

          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            For five incredible years, Remember December has created a space for
            young people to encounter God, build lifelong friendships, and make
            unforgettable memories along the beautiful South African coastline.
            This year is going bigger than ever.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know before joining us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-black border border-red-900/40 rounded-3xl p-8 shadow-xl hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-4 leading-snug">
                  {faq.question}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
              Wilderness,
              <br />
              South Africa
            </h2>

            <div className="w-24 h-1 bg-red-600 mb-8 rounded-full" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              We will be staying at the Wilderness Hotel in Wilderness, surrounded by breathtaking beaches, nature, adventure activities, and unforgettable sunsets.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Expect beach worship sessions, evangelism opportunities, late-night conversations, games, activities, and moments that will stay with you long after the trip ends.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl border border-red-900/40">
            <img
              src="/mnt/data/20251203_181700.jpg"
              alt="Remember December Beach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight mb-8">
            Secure Your Spot
          </h2>

          <p className="text-lg md:text-2xl text-red-100 mb-10 leading-relaxed">
            Spaces are limited. Request more information, submit your documents,
            and get ready for the most unforgettable summer of your life.
          </p>

          <a
            href="https://links.subprimekings.com/widget/survey/lH0jFR7jofTKojGxW1lJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-700 hover:bg-zinc-100 transition-all duration-300 px-10 py-5 rounded-2xl text-lg md:text-xl font-black shadow-2xl hover:scale-105"
          >
            Get More Information
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-10 text-center px-6">
        <p className="text-gray-500 text-sm md:text-base">
          CRC Remember December 2026 • Summer Vacay • Fifth Anniversary Edition
        </p>
      </footer>
    </div>
  );
}

const faqData = [
  {
    question: 'What are the dates for Remember December?',
    answer:
      'Remember December will be taking place from 30th Nov – 9 December 2026.',
  },
  {
    question: 'Who can attend Remember December?',
    answer:
      'It is open to Matriculants and Students aged 17–25.',
  },
  {
    question: 'How do you secure your spot?',
    answer:
      'Click on the link to request more info. Pay your deposit and submit your indemnity form and all other documents to secure your spot. Terms and conditions apply.',
  },
  {
    question: 'How much is the cost of the trip?',
    answer:
      'Cost for cities will be adjusted per city based on traveling expenses. Kindly request more information.',
  },
  {
    question: 'Where will we be staying?',
    answer: 'The Wilderness Hotel in Wilderness.',
  },
  {
    question: 'Are all activities included in the price?',
    answer:
      'All activities except for one which is a self-paid and chosen activity.',
  },
  {
    question: 'Are all meals included?',
    answer: 'All dinners are included.',
  },
  {
    question: 'Will there be supervision?',
    answer:
      'Yes, there is supervision for all attendees. There will also be opportunities for praise and worship, quiet time, evangelising, water baptism and much, much more!',
  },
  {
    question:
      'Which other activities will be available on the trip at our own cost?',
    answer:
      'Additional activities include bungee jumping, mini-golf, hiking, zipline, tennis, bowling, pool swimming and one of South Africa’s most beautiful beaches within walking distance. A full list will be provided closer to the time.',
  },
];
