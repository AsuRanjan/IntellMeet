import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Project Manager",
    review:
      "IntellMeet has completely transformed how our team collaborates every day.",
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    review:
      "The AI meeting summaries save hours every week.",
  },
  {
    name: "David Chen",
    role: "Product Designer",
    review:
      "Simple, fast and beautifully designed. Exactly what modern teams need.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="TESTIMONIALS"
          title="Loved by Modern Teams"
          subtitle="Example testimonials for the project UI."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-slate-500">
                  {item.role}
                </p>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

