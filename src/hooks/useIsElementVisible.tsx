import { useEffect, useState } from "react";

export const useIsElementVisible = (ref: React.MutableRefObject<Element | null>) => {
    const [isVisible, setIsVisible] = useState<Boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsVisible(entries[0]?.isIntersecting);
        }, {
            rootMargin: '0px',
            threshold: 0.1,
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isVisible;
}