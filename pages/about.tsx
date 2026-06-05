import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const patrons = [
  "ESSENZA",
  "CHASIN",
  "GAS",
  "GIT",
  "CISALFA",
  "CAR JEANS",
  "KLEINIGKEIT",
  "BLUE BANANA",
  "CLEAN CUT",
  "PELLEGRINI",
  "KRONOS",
  "COSTES",
  "MELTING",
  "SCANWEAR",
  "BASIC APPAREL",
  "COLINGS",
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Fast Trim International</title>
        <meta
          name="description"
          content="Fast Trim International is a Bangladesh-based garment accessories manufacturer and exporter focused on quality, innovation, and customer delivery."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 from-yellow-500 via-purple-600 to-pink-500 to-red-600 animate-gradient-x text-white min-h-[calc(100vh-5rem)] flex items-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),_transparent_40%)]" />
            <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
                  Precision garment accessories built for global brands.
                </h1>
                <p className="mt-8 text-lg leading-8 text-slate-100/90">
                  Established in 2008, Fast Trim International is a trusted Bangladesh-based garments accessories manufacturer and exporter. We specialize in buttons, labels, trims and customized finishing solutions for buyers who demand quality, reliable delivery and competitive pricing.
                </p>
                <p className="mt-6 text-lg leading-8 text-slate-100/90">
                  Our modern production complex combines export-ready infrastructure with hands-on quality control at every stage. We serve global apparel brands with flexible order management and consistent stock availability for seasonal and bulk orders.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 sm:px-8 mt-14 space-y-12">
            <div className="grid gap-10 xl:gap-12">
              <div className="grid gap-8 md:grid-cols-[1.5fr_0.95fr] items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 mb-4">What we do</h2>
                  <p className="text-slate-700 leading-8">
                    We provide garment accessories solutions with a focus on accuracy, quality control and timely delivery. Our manufacturing process is engineered for export compliance, and our production teams keep every step aligned with customer expectations.
                  </p>
                </div>

                <div>

                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] bg-white p-6 border border-slate-200 shadow-2xl ring-1 ring-slate-200">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">Detail</p>
                    <p className="text-slate-600 leading-7">Export-ready workflows ensure every trim and label is compliant and ready for transit.</p>
                  </div>
                  <div className="rounded-[2rem] bg-white p-6 border border-slate-200 shadow-2xl ring-1 ring-slate-200">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">Quality</p>
                    <p className="text-slate-600 leading-7">On-site inspection and material verification at every production milestone.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 justify-items-center">
                <div className="w-full max-w-[30rem] rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
                  <div className="relative aspect-[4/3] bg-slate-200">
                    <Image
                      src="/images/production-overview.jpg"
                      alt="Production overview"
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Production overview</h3>
                    <p className="text-slate-600 leading-7 font-medium mb-3">
                      A clear look at the precision and scale behind every accessory we produce.
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[30rem] rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
                  <div className="relative aspect-[4/3] bg-slate-200">
                    <Image
                      src="/images/quality-control.jpg"
                      alt="Quality control"
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Quality & service</h3>
                    <p className="text-slate-600 leading-7 font-medium mb-3">
                      A strong service foundation built around inspection, responsiveness, and delivery reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div className="rounded-[1.75rem] overflow-hidden border border-slate-200 bg-slate-100">
                  <div className="relative aspect-[16/9] bg-slate-200">
                    <Image
                      src="/images/vision.jpg"
                      alt="Vision"
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 mb-4">Vision</h2>
                  <p className="leading-8 text-slate-700">
                    We aim to strengthen the garments accessories industry with innovative, customized solutions that support quality production and on-time delivery. Our goal is to be the first choice for buyers seeking dependable export-grade accessories from Bangladesh.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Export-ready manufacturing</h3>
                <p className="text-slate-600 leading-7">
                  Fully equipped production units with experienced quality controllers at every stage.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Customer-focused service</h3>
                <p className="text-slate-600 leading-7">
                  Fast turnaround, consistent quality and flexibility for custom orders.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Trusted industry partner</h3>
                <p className="text-slate-600 leading-7">
                  A reliable supply chain partner for global brands and garment manufacturers.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 mb-10">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our Patrons</h2>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                {patrons.map((patron) => (
                  <span key={patron} className="rounded-2xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
                    {patron}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
