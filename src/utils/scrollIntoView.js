export default function scrollIntoView(id) {
  return (e) => {
    if (e) e.preventDefault();
    console.log(id, "HERE");
    const top = document.getElementById(id).offsetTop - 100;
    console.log(top, "TOP");
    window.scroll({ top, behavior: "smooth" });
  };
}
