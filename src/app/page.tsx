import { Hero } from "@/components/Hero";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxSection />
      <Carousel />
      <footer style={{
        background: "#050810",
        borderTop: "1px solid rgba(204,255,0,0.1)",
        padding: "5rem 2rem 3rem",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>STUDIO</p>
              <p style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.7 }}>
                Professional photography studio. Capturing authentic moments that reveal truth.
              </p>
            </div>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>SERVICES</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["Portfolio", "About", "Contact"].map(s => (
                  <a key={s} href="#" className="footer-link">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>CONNECT</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[["Instagram", "#"], ["YouTube", "#"], ["Email", "mailto:hello@photography.com"]].map(([s, href]) => (
                  <a key={s} href={href} className="footer-link">{s}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(204,255,0,0.08)", paddingTop: "2rem" }}>
            <p style={{ color: "#333", fontSize: "0.75rem", textAlign: "center" }}>
              © 2026 Visual Stories. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
