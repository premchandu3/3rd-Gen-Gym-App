export default function ContactMap() {
  return (
    <section className="bg-white pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=10%20Ganesh%20Nagar%20Alamadhi%20Main%20Road%20Vellanur%20Chennai%20600062&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="
              w-full
              h-[250px]
              sm:h-[300px]
              md:h-[380px]
              lg:h-[420px]
            "
          />
        </div>
      </div>
    </section>
  );
}