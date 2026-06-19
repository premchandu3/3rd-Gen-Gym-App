import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">

<div className="relative h-[400px] w-full md:hidden overflow-hidden">
  <Image
    src="/contact/contact-bg.png"
    alt="Contact Background"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute top-20 left-0 right-0 z-10 flex justify-center">
    <h1
      className="
        text-white
        font-black
        uppercase
        leading-[0.9]
        text-center

        text-[48px]
        min-[390px]:text-[56px]

        max-w-full
      "
    >
      CONTACT
      <br />
      US
    </h1>
  </div>

  <div
    className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      z-20

      w-[220px]
      h-[300px]

      min-[390px]:w-[250px]
      min-[390px]:h-[330px]
    "
  >
    <Image
      src="/contact/contact-person.png"
      alt="Trainer"
      fill
      priority
      className="object-contain object-bottom"
    />
  </div>
</div>

      <div className="relative hidden md:block h-[537px] w-full">
        <Image
          src="/contact/contact-bg.png"
          alt="Contact Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 flex justify-center pt-[145px]">
          <h1
            className="
              text-white
              font-black
              uppercase
              leading-none
              tracking-tight
              text-[140px]
            "
          >
            CONTACT US
          </h1>
        </div>

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            z-20
            bottom-[-5px]
            w-[520px]
            h-[560px]
          "
        >
          <Image
            src="/contact/contact-person.png"
            alt="Trainer"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>

    </section>
  );
}