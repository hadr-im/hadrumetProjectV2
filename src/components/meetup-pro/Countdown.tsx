import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  // Countdown to October 1, 2026
  const targetDate = new Date("2026-10-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Save The Date
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-gray-900">
            Countdown to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              MeetUp Pro 4.0
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            October 2026 • Sousse, Tunisia
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {timeBlocks.map((block, idx) => (
            <div key={idx} className="group relative  border">
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2 tabular-nums">
                  {String(block.value).padStart(2, "0")}
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base uppercase tracking-wider">
                  {block.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12">
          <p className="text-gray-600 text-sm md:text-base">
            Mark your calendar and don't miss the biggest B2B networking event
            in the Sahel region
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
