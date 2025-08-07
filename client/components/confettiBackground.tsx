// components/ConfettiBackground.tsx
export const ConfettiBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(45)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-4 h-4 rounded-full opacity-90 animate-[float_6s_infinite]`}
          style={{
            backgroundColor: ['#FF6FA3', '#FFDD57', '#A3F7BF', '#6EC3F4'][i % 4],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
