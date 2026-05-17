// @ts-nocheck
"use client";

import { Khand, Inter, Source_Code_Pro } from "next/font/google";
import content from "../data/content.json";

// /ui-ux-pro-max → Modern brutalist white · pure white + black + safety orange + concrete.
const display = Khand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const mono = Source_Code_Pro({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Brutalist white palette — pure white + black + safety orange + concrete grey.
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const CONCRETE = "#D6D3D1";
const STONE = "#F5F4F2";
const SAFETY = "#EA580C";
const MUTED = "#57534E";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main
      className={body.className}
      style={{ backgroundColor: WHITE, color: BLACK, minHeight: "100vh" }}
    >
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) 0.18s forwards; opacity: 0; }
        .fade-up-d2 { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) 0.36s forwards; opacity: 0; }
      `}</style>

      <nav style={{ backgroundColor: WHITE, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <span
            className={display.className}
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)", color: BLACK, letterSpacing: "0.08em", lineHeight: 1, textTransform: "uppercase", fontWeight: 700 }}
          >
            EUPHORIA <span style={{ color: SAFETY }}>·</span> NAIL BOUTIQUE
          </span>
          <div className="flex items-center gap-5">
            <a href="#room" className={mono.className} style={{ display: "none", fontSize: 11, color: BLACK, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              <span className="hidden md:inline">01 ROOM</span>
            </a>
            <a href="#menu" className={mono.className} style={{ fontSize: 11, color: BLACK, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              <span className="hidden md:inline">02 MENU</span>
            </a>
            <a href="#visit" className={mono.className} style={{ fontSize: 11, color: BLACK, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              <span className="hidden md:inline">03 VISIT</span>
            </a>
            <a
              href={phoneTel}
              className={mono.className}
              style={{
                backgroundColor: SAFETY,
                color: BLACK,
                padding: "12px 22px",
                fontSize: 11,
                letterSpacing: "0.28em",
                fontWeight: 700,
                textTransform: "uppercase",
                border: `2px solid ${BLACK}`,
              }}
            >
              [ BOOK ]
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — pure brutalist single-column massive type */}
      <section style={{ backgroundColor: WHITE, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p
            className={`${mono.className} fade-up`}
            style={{ fontSize: 11, letterSpacing: "0.36em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginBottom: 36 }}
          >
            /// {content.hero.eyebrow}
          </p>

          <h1
            className={`${display.className} fade-up-d1`}
            style={{
              fontSize: "clamp(3.5rem, 11vw, 11rem)",
              color: BLACK,
              lineHeight: 0.85,
              letterSpacing: "-0.035em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            A nail studio. <br />
            <span style={{ color: SAFETY }}>Reduced</span> to its <br />
            essential parts.
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-10 fade-up-d2">
            <div className="md:col-span-7">
              <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: BLACK }}>
                {content.hero.subheading}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={content.hero.ctaLink}
                  className={mono.className}
                  style={{
                    backgroundColor: BLACK,
                    color: WHITE,
                    padding: "20px 32px",
                    fontSize: 13,
                    letterSpacing: "0.3em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    border: `2px solid ${BLACK}`,
                  }}
                >
                  [ {content.hero.ctaText} ]
                </a>
                <a
                  href="#menu"
                  className={mono.className}
                  style={{ color: BLACK, fontSize: 11, letterSpacing: "0.32em", fontWeight: 700, textTransform: "uppercase", borderBottom: `2px solid ${SAFETY}`, paddingBottom: 4 }}
                >
                  /// see the menu
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div
                style={{
                  aspectRatio: "1/1",
                  backgroundImage: `url("${content.hero.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(1) contrast(1.05)",
                  border: `2px solid ${BLACK}`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: BLACK, color: WHITE, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            ["RATING", "4.3"],
            ["REVIEWS", "51"],
            ["CHAIRS", "4"],
            ["DAYS", "7"],
          ].map(([k, v], i) => (
            <div key={i} className="py-10 px-4" style={{ borderRight: i < 3 ? `1px solid rgba(255,255,255,0.20)` : "none" }}>
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700 }}>
                /// {k}
              </p>
              <p className={display.className} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: WHITE, lineHeight: 1, letterSpacing: "-0.03em", marginTop: 8, fontWeight: 700 }}>
                {v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROOM — about */}
      <section id="room" style={{ backgroundColor: STONE, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p
                className={mono.className}
                style={{ fontSize: 11, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}
              >
                /// 01 THE ROOM
              </p>
              <h2
                className={display.className}
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  color: BLACK,
                  lineHeight: 0.92,
                  letterSpacing: "-0.025em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {content.about.heading}
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6" style={{ fontSize: "1.075rem", lineHeight: 1.75, color: BLACK }}>
              {content.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU — flat list, big type, no cards */}
      <section id="menu" style={{ backgroundColor: WHITE, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-14">
            <p
              className={mono.className}
              style={{ fontSize: 11, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}
            >
              /// 02 THE MENU
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: BLACK,
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Services. Priced. Honest.
            </h2>
          </div>

          <ul>
            {content.services.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-3 py-9"
                style={{
                  borderTop: i === 0 ? `2px solid ${BLACK}` : `1px solid ${CONCRETE}`,
                  borderBottom: i === content.services.length - 1 ? `2px solid ${BLACK}` : "none",
                }}
              >
                <div className="col-span-12 md:col-span-1">
                  <p className={mono.className} style={{ fontSize: 12, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700 }}>
                    /{String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h3
                    className={display.className}
                    style={{
                      fontSize: "1.75rem",
                      color: BLACK,
                      letterSpacing: "-0.005em",
                      lineHeight: 1.05,
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3" style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "50ch" }}>
                    {s.description}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right md:items-baseline flex md:justify-end">
                  <span
                    className={display.className}
                    style={{ fontSize: "1.85rem", color: BLACK, letterSpacing: "-0.01em", fontWeight: 700 }}
                  >
                    {s.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REVIEWS — grid of plain blocks */}
      <section style={{ backgroundColor: BLACK, color: WHITE, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-14">
            <p
              className={mono.className}
              style={{ fontSize: 11, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}
            >
              /// 03 THE WORDS
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: WHITE,
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              From the chair.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0">
            {content.reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  borderLeft: i > 0 ? `1px solid rgba(255,255,255,0.2)` : `2px solid ${WHITE}`,
                  borderRight: i === content.reviews.length - 1 ? `2px solid ${WHITE}` : "none",
                  borderTop: `2px solid ${WHITE}`,
                  borderBottom: `2px solid ${WHITE}`,
                  padding: "30px 28px",
                }}
              >
                <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>
                  /// N°{String(i + 1).padStart(2, "0")}
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: WHITE }}>"{r.text}"</p>
                <div className="mt-7 pt-5" style={{ borderTop: `1px solid rgba(255,255,255,0.2)` }}>
                  <p className={display.className} style={{ fontSize: 16, color: WHITE, letterSpacing: "-0.01em", textTransform: "uppercase", fontWeight: 700 }}>
                    — {r.name}
                  </p>
                  <p className={mono.className} style={{ fontSize: 11, color: WHITE, opacity: 0.7, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 4, fontWeight: 500 }}>
                    {r.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" style={{ backgroundColor: WHITE, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-14">
            <p
              className={mono.className}
              style={{ fontSize: 11, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}
            >
              /// 04 THE ROOM, PHYSICALLY
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: BLACK,
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Visit Euphoria.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
                /// ADDRESS
              </p>
              <p className={display.className} style={{ fontSize: "1.5rem", color: BLACK, letterSpacing: "-0.005em", lineHeight: 1.25, textTransform: "uppercase", fontWeight: 700 }}>
                {content.contact.address.split(",")[0]}
              </p>
              <p className={mono.className} style={{ fontSize: 12, color: MUTED, marginTop: 4, letterSpacing: "0.06em" }}>
                {content.contact.address.split(",").slice(1).join(",").trim()}
              </p>

              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: SAFETY, textTransform: "uppercase", fontWeight: 700, marginTop: 32, marginBottom: 14 }}>
                /// HOURS
              </p>
              <table className={mono.className} style={{ width: "100%", fontSize: 14, letterSpacing: "0.04em" }}>
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => {
                    const closed = String(time).toLowerCase().includes("closed");
                    return (
                      <tr key={day} style={{ borderBottom: `1px solid ${CONCRETE}` }}>
                        <td style={{ padding: "10px 0", color: BLACK, fontWeight: 700, textTransform: "uppercase" }}>{day.slice(0, 3)}</td>
                        <td className="text-right" style={{ padding: "10px 0", color: closed ? MUTED : BLACK, fontStyle: closed ? "italic" : "normal" }}>
                          {String(time)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <a
                href={phoneTel}
                className={`${display.className} block mt-10`}
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: SAFETY, letterSpacing: "-0.02em", lineHeight: 1, fontWeight: 700 }}
              >
                {content.contact.phone}
              </a>
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: BLACK, textTransform: "uppercase", marginTop: 6, fontWeight: 500 }}>
                /// CALL · WE'LL CONFIRM
              </p>
            </div>
            <div className="md:col-span-7">
              <div style={{ border: `2px solid ${BLACK}`, minHeight: 460 }}>
                <iframe
                  title="Location"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0, minHeight: 456, display: "block", filter: "grayscale(0.9) contrast(1.05)" }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — safety orange */}
      <section style={{ backgroundColor: SAFETY, color: BLACK, borderBottom: `2px solid ${BLACK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: BLACK, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>
              /// 05 THE CLOSING
            </p>
            <h3
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                color: BLACK,
                lineHeight: 0.9,
                letterSpacing: "-0.045em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Book the chair. <br />Skip the line.
            </h3>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={phoneTel}
              className={mono.className}
              style={{
                display: "inline-block",
                backgroundColor: BLACK,
                color: SAFETY,
                padding: "22px 30px",
                fontSize: 13,
                letterSpacing: "0.32em",
                fontWeight: 700,
                textTransform: "uppercase",
                border: `2px solid ${BLACK}`,
              }}
            >
              [ CALL · {content.contact.phone} ]
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: WHITE, color: BLACK }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
            <div>
              <p className={display.className} style={{ fontSize: 22, color: BLACK, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>
                EUPHORIA <span style={{ color: SAFETY }}>·</span> NAIL BOUTIQUE
              </p>
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", color: SAFETY, textTransform: "uppercase", marginTop: 6, fontWeight: 700 }}>
                /// GLENDALE · CALIFORNIA
              </p>
            </div>
            <div className={mono.className} style={{ fontSize: 12, color: BLACK, letterSpacing: "0.06em" }}>
              <p>{content.contact.address}</p>
              <p className="mt-1">{content.contact.phone}</p>
            </div>
            {content.social && (
              <div className="flex flex-wrap gap-3 md:justify-end">
                {Object.entries(content.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={String(url)}
                    className={mono.className}
                    style={{
                      backgroundColor: BLACK,
                      color: WHITE,
                      padding: "8px 16px",
                      fontSize: 11,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      border: `2px solid ${BLACK}`,
                    }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>
          <p
            className={mono.className}
            style={{
              fontSize: 11,
              letterSpacing: "0.32em",
              borderTop: `2px solid ${BLACK}`,
              paddingTop: 14,
              color: MUTED,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            © {new Date().getFullYear()} EUPHORIA NAIL BOUTIQUE /// GLENDALE /// SET IN KHAND + SOURCE CODE PRO
          </p>
        </div>
      </footer>
    </main>
  );
}
