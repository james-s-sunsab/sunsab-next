export default function akamaiLoader({ src, width, quality }) {
    return `https://james-s-sunsab.github.io/sunsab-next/${src}?imwidth=${width}&q=${quality || 75}`
}