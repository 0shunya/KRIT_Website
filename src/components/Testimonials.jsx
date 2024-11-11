import React from "react";
import "../components/styles/testimonials.css"; // You'll need to create this CSS file

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    content:
      "The courses offered here have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date with industry standards.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    content:
      "I've taken several data science courses, and I'm impressed by the depth of knowledge provided. The hands-on projects really helped solidify my understanding.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    content:
      "The UX design course was exactly what I needed to transition into this field. The curriculum was comprehensive and the feedback from instructors was invaluable.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-content">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
