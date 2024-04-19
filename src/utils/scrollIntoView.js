export default function scrollIntoView(id) {
  return (e) => {
    if (e) e.preventDefault();

    const top = document.getElementById(id).offsetTop - 100;

    window.scroll({ top, behavior: "smooth" });
  };
}
