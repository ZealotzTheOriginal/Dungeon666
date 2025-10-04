export default function Section({ children, title }) {
  return (
    <>
      <div className="MemeDiscoText"><h1>{title}</h1></div>
      <section className="SectionPro">
        {children}
      </section>
    </>
  );
}