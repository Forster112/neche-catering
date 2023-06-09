import desertdata from "../fakeData/fakedata";

export function activeDesert(state) {
  if (state === "ALL") return desertdata;
  if (state === "CAKES")
    return desertdata.filter(
      (item) => item.category === "CAKES"
    );
  if (state === "PERFAITS")
    return desertdata.filter(
      (item) => item.category === "PERFAITS"
    );
  if (state === "SMALLCHOPS")
    return desertdata.filter(
      (item) => item.category === "SMALLCHOPS"
    );
  if (state === "CUPCAKES")
    return desertdata.filter(
      (item) => item.category === "CUPCAKES"
    );
}

export function showInputs(e, taskref, inputref) {
  e.preventDefault();
  taskref.current.textContent =
    "Fill out the form with what you love";
  e.target.classList.add("hidden");
  inputref.current.classList.add("show");
}

export function sizeToRender() {
  if (
    screen.width <= 767 ||
    (window.matchMedia &&
      window.matchMedia(
        "only screen and (max-width: 767px)"
      ).matches)
  )
    return true;
}
