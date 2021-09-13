// TODO: load the dataset

function filterData(category) {
  /* **************************************************
   *
   * TODO: filter attractions by the selected category
   * TODO: filter top 5 attractions
   *
   * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
   *
   * renderBarChart(data)
   *
   * - 'data' must be an array of JSON objects
   * - the max. length of 'data' is 5
   *
   * **************************************************/

  let attractions;

  fetch("attractions.json")
    .then((response) => response.json())
    .then((data) => {
      attractions = data;

      if (category != null) {
        attractions = attractions.filter((element) => {
          return element.Category === category;
        });
      }

      attractions.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      });

      attractions = attractions.slice(0, 5);
      console.log("after slice", attractions);
      renderBarChart(attractions);
    });
}

filterData();

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

document
  .querySelector("#attraction-category")
  .addEventListener("change", callbackFunction);

function callbackFunction(event) {
  filterData(event.target.value);
}
