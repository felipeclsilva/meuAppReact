import Footer from "./Footer.jsx";

export default function Card({ title }) {
  return (
    <div
      style={{ border: "1px solid #00000038", padding: "16px", margin: "8px" }}
    >
      <span>{title}</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        officiis blanditiis totam, quae ipsa quasi odit ad quod quaerat possimus
        perferendis reprehenderit laboriosam vitae, dolore explicabo beatae
        fugit quis voluptatum?
      </p>
      <Footer />
    </div>
  );
}
