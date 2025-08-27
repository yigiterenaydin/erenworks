import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import Image, { StaticImageData } from "next/image";


import "./ProfileCard.css";

interface ProfileCardProps {
  avatarUrl?: string | StaticImageData;
  iconUrl?: string;
  grainUrl?: string;
  behindGradient?: string;
  innerGradient?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string | StaticImageData;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
  sizes?: string;
  priority?: boolean;
}

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(238,100%,90%,var(--card-opacity)) 4%,hsla(238,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(238,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(238,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#6366f1c4 0%,#8b5cf600 100%),radial-gradient(100% 100% at 50% 50%,#a855f7ff 1%,#8b5cf600 76%),conic-gradient(from 124deg at 50% 50%,#6366f1ff 0%,#a855f7ff 40%,#a855f7ff 60%,#ec4899ff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#6366f144 0%,#a855f744 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
};

const clamp = (value: number, min: number = 0, max: number = 100): number =>
  Math.min(Math.max(value, min), max);

const round = (value: number, precision: number = 3): number =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number => round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Eren Aydin",
  title = "Schüler",
  handle = "eren_aydin",
  status = "Online",
  contactText = "Kontakt",
  showUserInfo = true,
  onContactClick,
  sizes,
  priority = false,
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateCardTransform = (
      offsetX: number,
      offsetY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ): void => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties: Record<string, string> = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ): void => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      if (prefersReducedMotion) return;
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers, prefersReducedMotion]
  );

  const handlePointerEnter = useCallback(() => {
    if (prefersReducedMotion) return;
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers, prefersReducedMotion]);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      if (prefersReducedMotion) return;
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers, prefersReducedMotion]
  );

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      if (prefersReducedMotion) return;
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const { beta, gamma } = event;
      if (!beta || !gamma) return;

      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity, prefersReducedMotion]
  );

  // Event listeners
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      type DeviceMotionEventConstructor = typeof window.DeviceMotionEvent & {
        requestPermission?: () => Promise<PermissionState | 'granted' | 'denied'>;
      };
      const DeviceMotionEventCtor: DeviceMotionEventConstructor | undefined =
        (window as unknown as { DeviceMotionEvent?: DeviceMotionEventConstructor }).DeviceMotionEvent;
      if (DeviceMotionEventCtor && typeof DeviceMotionEventCtor.requestPermission === 'function') {
        DeviceMotionEventCtor
          .requestPermission!()
          .then((state: PermissionState | 'granted' | 'denied') => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation as EventListener);
            }
          })
          .catch((err: unknown) => console.error(err));
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation as EventListener);
      }
    };

    card.addEventListener("pointerenter", handlePointerEnter as EventListener, { passive: true });
    card.addEventListener("pointermove", handlePointerMove as EventListener, { passive: true });
    card.addEventListener("pointerleave", handlePointerLeave as EventListener, { passive: true });
    card.addEventListener("click", handleClick, { passive: true });

    return () => {
      card.removeEventListener("pointerenter", handlePointerEnter as EventListener);
      card.removeEventListener("pointermove", handlePointerMove as EventListener);
      card.removeEventListener("pointerleave", handlePointerLeave as EventListener);
      card.removeEventListener("click", handleClick);
    };
  }, [handlePointerEnter, handlePointerMove, handlePointerLeave, enableMobileTilt, handleDeviceOrientation]);

  // Initialize card transform
  useEffect(() => {
    if (!enableTilt || !animationHandlers || prefersReducedMotion) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    animationHandlers,
    prefersReducedMotion,
  ]);

  const cardStyle = useMemo<React.CSSProperties & Record<string, string>>(
    () =>
      ({
        "--icon": iconUrl ? `url(${iconUrl})` : "none",
        "--grain": grainUrl ? `url(${grainUrl})` : "none",
        "--behind-gradient": showBehindGradient
          ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
          : "none",
        "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
      } as unknown as React.CSSProperties & Record<string, string>),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    // Kontakt bölümüne scroll yap
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const elementTop = contactSection.offsetTop;
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 60 : 80;
      const scrollTop = elementTop - offset;
      
      window.scrollTo({ 
        top: Math.max(0, scrollTop), 
        behavior: 'smooth' 
      });
    }
    
    // Eğer onContactClick prop'u varsa onu da çağır
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <Image
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              width={480}
              height={480}
              priority={true}
              quality={90}
              placeholder={typeof avatarUrl === 'object' ? 'blur' : undefined}
              blurDataURL={typeof avatarUrl === 'object' ? (avatarUrl as StaticImageData).blurDataURL : undefined}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <Image
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      width={48}
                      height={48}
                      quality={75}
                      placeholder={typeof miniAvatarUrl === 'object' ? 'blur' : undefined}
                      blurDataURL={typeof miniAvatarUrl === 'object' ? (miniAvatarUrl as StaticImageData).blurDataURL : undefined}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
                                           <div className="pc-content">
                        <div className="pc-details">
                        </div>
                      </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
