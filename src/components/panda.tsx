// components/PandaAvatar.tsx
'use client';

import { cn } from '@/lib/utils';

type Props = {
  size?: number;          // px
  className?: string;
};

export default function PandaAvatar({ size = 128, className }: Props) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn('inline-block', className)}
      aria-label="Animated panda avatar"
      role="img"
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* soft background */}
        <defs>
          <radialGradient id="bg" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#f5f7ff" />
            <stop offset="100%" stopColor="#e9eefc" />
          </radialGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.18" />
          </filter>
        </defs>

        <circle cx="100" cy="100" r="96" fill="url(#bg)" />

        {/* Panda group with gentle bob */}
        <g className="panda-bob" filter="url(#shadow)">
          {/* Ears (wiggle) */}
          <g className="ear-wiggle">
            <circle cx="60" cy="45" r="22" fill="#1f2937" />
            <circle cx="140" cy="45" r="22" fill="#1f2937" />
          </g>

          {/* Head */}
          <g>
            <circle cx="100" cy="105" r="60" fill="#ffffff" />
            {/* Eye patches */}
            <ellipse cx="72" cy="98" rx="22" ry="18" fill="#1f2937" />
            <ellipse cx="128" cy="98" rx="22" ry="18" fill="#1f2937" />

            {/* Eyes (blink using eyelids) */}
            <g className="blink">
              <circle cx="72" cy="98" r="6" fill="#111827" />
              <circle cx="128" cy="98" r="6" fill="#111827" />
            </g>

            {/* Nose + snout */}
            <ellipse cx="100" cy="120" rx="22" ry="16" fill="#f3f4f6" />
            <path d="M100 114c4 0 7 2 7 5s-3 5-7 5-7-2-7-5 3-5 7-5z" fill="#111827" />
            {/* Smile */}
            <path
              d="M90 132c4 6 16 6 20 0"
              fill="none"
              stroke="#374151"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Cheeks (subtle pulse) */}
            <g className="cheeks">
              <circle cx="60" cy="125" r="6" fill="#fecaca" />
              <circle cx="140" cy="125" r="6" fill="#fecaca" />
            </g>
          </g>
        </g>
      </svg>

      <style jsx>{`
        /* gentle up/down float */
        @keyframes bob {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        .panda-bob {
          transform-origin: 100px 100px;
          animation: bob 3.2s ease-in-out infinite;
        }

        /* quick blink every few seconds */
        @keyframes blink {
          0%, 92%, 100% { transform: scaleY(1); }
          94% { transform: scaleY(0.1); }
          96% { transform: scaleY(1); }
        }
        .blink {
          transform-origin: center;
          animation: blink 4.5s ease-in-out infinite;
        }

        /* subtle ear wiggle offset from bob */
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-4deg); }
        }
        .ear-wiggle {
          transform-origin: 100px 80px;
          animation: wiggle 3.2s ease-in-out infinite;
        }

        /* tiny cheek pulse */
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .cheeks {
          animation: pulse 2.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
