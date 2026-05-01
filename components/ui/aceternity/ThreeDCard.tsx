"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

const ThreeDContext = createContext<{ isHovered: boolean; isTouch: boolean }>({
  isHovered: false,
  isTouch: false,
});

interface ThreeDCardContainerProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  rotationStrength?: number;
}

export function ThreeDCardContainer({
  children,
  className,
  containerClassName,
  rotationStrength = 15,
}: ThreeDCardContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isTouch = useIsTouchDevice();

  const max = isTouch ? Math.min(rotationStrength, 5) : rotationStrength;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (ref.current) {
      ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <ThreeDContext.Provider value={{ isHovered, isTouch }}>
      <div
        className={cn(
          "flex items-center justify-center",
          containerClassName,
        )}
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsHovered(true)}
      >
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative transition-transform duration-200 ease-out [transform-style:preserve-3d]",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </ThreeDContext.Provider>
  );
}

interface ThreeDCardItemProps {
  children: ReactNode;
  className?: string;
  translateZ?: number;
  translateX?: number;
  translateY?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  as?: ElementType;
  style?: CSSProperties;
}

export function ThreeDCardItem({
  children,
  className,
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Tag = "div",
  style,
}: ThreeDCardItemProps) {
  const { isHovered, isTouch } = useContext(ThreeDContext);
  const z = isTouch ? Math.min(translateZ, 20) : translateZ;
  const transform =
    isHovered && !isTouch
      ? `translate3d(${translateX}px, ${translateY}px, ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : "translate3d(0, 0, 0) rotate(0)";

  const Component = Tag as ElementType;
  return (
    <Component
      className={cn("transition-transform duration-200 ease-out", className)}
      style={{ ...style, transform }}
    >
      {children}
    </Component>
  );
}
