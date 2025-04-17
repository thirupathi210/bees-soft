import React from "react";
import CountUp from "react-countup";

const stats = [
  { icon: "🧠", value: 20, suffix: "+", label: "Years of experience" },
  { icon: "✅", value: 280, suffix: "+", label: "Success Stories" },
  { icon: "👍", value: 1000000, suffix: "+", label: "Students" },
  { icon: "🎯", value: 100, suffix: "%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <div className="row g-4">
      {stats.map((stat, index) => (
        <div className="col-md-6" key={index}>
          <div className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>
              <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.suffix}
                enableScrollSpy
                scrollSpyDelay={100}
              />
            </h3>
            <p className="text-muted">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
