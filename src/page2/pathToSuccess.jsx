import React from "react";
import { UserPlus, BookOpen, Trophy } from "lucide-react";
import "./pathToSuccess.css";
const steps = [
  {
    number: "1",
    label: "Join",
    icon: UserPlus,
    description:
      "Create your account and tell us about your goals to receive a personalized learning path.",
    active: false,
  },
  {
    number: "2",
    label: "Learn",
    icon: BookOpen,
    description:
      "Engage with high-quality video content, interactive assignments, and our AI tutor.",
    active: true,
  },
  {
    number: "3",
    label: "Achieve",
    icon: Trophy,
    description:
      "Earn industry-recognized certificates and land your dream role with our career support.",
    active: false,
  },
];

export default function PathToSuccess() {
  return (
    <section className="pathSection">
      <div className="pathContainer">
        <h2 className="pathTitle">
          Your Path to Success
        </h2>
         <p className="pathDesc">
            A simple, streamlined process designed to take you from beginner to
          professional in record time.
        </p>

        <div className="steps">
          {/* connecting line, desktop only */}

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="step"
              >
                <div
                  className={`iconCircle ${step.active ? "active" : "inactive"}`}
                     >
                  <Icon
                    size={28}
                    strokeWidth={2}
                    className={step.active ? "text-white" : "text-blue-600"}
                  />
                </div>
                <h3 className="stepTitle">
                  {step.number}. {step.label}
                </h3>
                <p className="stepDesc">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}9
