export const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
}