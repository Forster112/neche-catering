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

export function formatDate(newdate) {
  const date = new Date(newdate * 1000);

  const getday = date.getDate();
  const getmonth = date.getMonth() + 1;
  const getyear = date.getFullYear();

  const day = getday < 10 ? `0${getday}` : getday;
  const month = getmonth < 10 ? `0${getmonth}` : getmonth;
  const year = getyear;

  return `${day}/${month}/${year}`;
}

export function stats(status) {
  if (status === "Delivered") return "$green";
  if (status === "On transit") return "$yellow";
  if (status === "Cancelled") return "$red";
}
