import { useEffect } from "react";

const Background = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#F7F9FC]"
    >
      {/* AccessFlow Network Illustration */}
      <div
        className="
          absolute inset-0
          bg-[url('/accessflow-network-bg.png')]
          bg-cover
          bg-center
          bg-no-repeat
          opacity-70
        "
      />

      {/* Keep the content area clean and readable */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/30
          via-white/10
          to-white/60
        "
      />

      {/* Soft white center for content readability */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.12)_55%,transparent_85%)]
        "
      />

      {/* Dark mode overlay */}
      <div
        className="
          absolute inset-0 hidden
          bg-[#080D19]/90
          mix-blend-multiply
          dark:block
        "
      />

      {/* Subtle dark-mode blue atmosphere */}
      <div
        className="
          absolute inset-0 hidden
          bg-[radial-gradient(ellipse_at_top_left,rgba(49,92,255,0.16),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.10),transparent_45%)]
          dark:block
        "
      />
    </div>
  );
};
export default Background;