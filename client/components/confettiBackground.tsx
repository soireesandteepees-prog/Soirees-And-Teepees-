// components/ConfettiBackground.tsx
export const ConfettiBackground = () => {
  return (
    <div className="fixed inset-0 z-30 overflow-hidden pointer-events-none">
      {[...Array(45)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-4 h-4 rounded-full opacity-90 animate-[float_6s_infinite]`}
          style={{
            backgroundColor: ['#F7C6B7', '#EEC7D9', '#D99CA6', '#F3C89B'][i % 4],
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
