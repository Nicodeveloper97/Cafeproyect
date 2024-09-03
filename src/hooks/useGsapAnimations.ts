import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useGsapAnimations = (ref: React.RefObject<HTMLElement>, options: gsap.TweenVars) => {
    useEffect(() => {
        if (ref.current) {
            gsap.to(ref.current, options);
        }
    }, [ref, options]);
};
