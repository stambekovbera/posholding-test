var carObject = [
  {
    mark: "Audi",
    model: "A4",
    year: "2015",
    delivery: "21.05.2021-28.02.2022",
  },
  {
    mark: "Audi",
    model: "A4",
    year: "2016",
    delivery: "01.05.2021-21.03.2022",
  },
  {
    mark: "Audi",
    model: "A5",
    year: "2015",
    delivery: "21.05.2021-28.06.2021",
  },
  {
    mark: "ВАЗ",
    model: "2101",
    year: "1970",
    delivery: "21.05.2021-28.02.2022",
  },
  {
    mark: "BMW",
    model: "218i F44",
    year: "2020",
    delivery: "21.05.2021-11.12.2022",
  },
  {
    mark: "Mercedes-Benz",
    model: "GL",
    year: "2016",
    delivery: "16.05.2021-08.10.2022",
  },
  {
    mark: "Mercedes-Benz",
    model: "CLA",
    year: "2021",
    delivery: "01.05.2021-25.09.2022",
  },
  {
    mark: "Mercedes-Benz",
    model: "CLA",
    year: "2018",
    delivery: "15.05.2021-14.11.2022",
  },
  {
    mark: "Mercedes-Benz",
    model: "GLS",
    year: "2021",
    delivery: "28.05.2021-08.08.2022",
  },
  {
    mark: "Bentley",
    model: "Continental",
    year: "2016",
    delivery: "11.08.2021-11.08.2022",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  let fileJSON = JSON.stringify(carObject);
  let data = JSON.parse(fileJSON);

  let carMarks = [];

  for (let i = 0; i < data.length; i++) {
    carMarks.push(data[i].mark);
  }

  for (let i = 0; i < carMarks.length; i++) {
    var carMarksFilter = [...new Set(carMarks)];
  }

  let selectMark = document.getElementById("mark");

  for (let i = 0; i < carMarksFilter.length; i++) {
    var marks = carMarksFilter[i];
    var el = document.createElement("option");
    el.textContent = marks;
    el.value = marks;
    mark.appendChild(el);
  }

  selectMark.addEventListener("change", () => {
    let model = document.getElementById("model");
    while (model.firstChild) {
      model.removeChild(model.firstChild);
    }
    let year = document.getElementById("year");
    while (year.firstChild) {
      year.removeChild(year.firstChild);
    }
    let elem = document.createElement("option");
    elem.textContent = "Не выбрана";
    elem.value = "not__model";
    model.appendChild(elem);

    var carModels = [];
    var carModelsFilter = [];
    var models = [];

    for (let i = 0; i < data.length; i++) {
      if (selectMark.value == data[i].mark) {
        carModels.push(data[i].model);
      }
    }

    for (let i = 0; i < carModels.length; i++) {
      carModelsFilter = [...new Set(carModels)];
    }
    for (let i = 0; i < carModelsFilter.length; i++) {
      models = carModelsFilter[i];
      var el = document.createElement("option");
      el.setAttribute("id", "model__option");
      el.textContent = models;
      el.value = models;
      model.appendChild(el);
    }

    let selectedMark = document.getElementById("mark");
    let rentalBtn = document.getElementById("rental__deliver");
    let selectedValueMark =
      selectedMark.options[selectedMark.selectedIndex].value;
    if (
      selectedValueMark == 0 ||
      selectedValueMark == " " ||
      selectedValueMark == "not__mark"
    ) {
      rentalBtn.classList.remove("active__btn");
    }
  });

  let selectModel = document.getElementById("model");

  selectModel.addEventListener("change", () => {
    let year = document.getElementById("year");
    while (year.firstChild) {
      year.removeChild(year.firstChild);
    }

    let elem = document.createElement("option");
    elem.textContent = "Не выбран";
    elem.value = "not__year";
    year.appendChild(elem);

    var carYears = [];
    var years = [];
    for (let i = 0; i < data.length; i++) {
      if (selectModel.value == data[i].model) {
        carYears.push(data[i].year);
      }
    }

    for (let i = 0; i < carYears.length; i++) {
      years = carYears[i];
      var el = document.createElement("option");
      el.setAttribute("id", "model__option");
      el.textContent = years;
      el.value = years;
      year.appendChild(el);
    }

    let selectedModel = document.getElementById("model");
    let rentalBtn = document.getElementById("rental__deliver");
    let selectedValueModel =
      selectedModel.options[selectedModel.selectedIndex].value;
    if (
      selectedValueModel == 0 ||
      selectedValueModel == " " ||
      selectedValueModel == "not__model"
    ) {
      rentalBtn.classList.remove("active__btn");
    }
  });

  let selectYear = document.getElementById("year");
  selectYear.addEventListener("change", () => {
    let selectYear = document.getElementById("year");
    let rentalBtn = document.getElementById("rental__deliver");
    let selectedValueYear = selectYear.options[selectYear.selectedIndex].value;
    if (
      selectedValueYear == 0 ||
      selectedValueYear == " " ||
      selectedValueYear == "not__year"
    ) {
      rentalBtn.classList.remove("active__btn");
    } else {
      rentalBtn.classList.add("active__btn");
    }
  });

  let rentalBtn = document.getElementById("rental__deliver");
  rentalBtn.addEventListener("click", () => {
    let divSelectCar = document.querySelector(".select__car");
    while (divSelectCar.querySelector(".rental__date")) {
      divSelectCar.removeChild(divSelectCar.querySelector(".rental__date"));
    }
    const carDeliveryDate = [];

    let selectYear = document.getElementById("year");
    let selectModel = document.getElementById("model");
    let selectMark = document.getElementById("mark");
    selectYear.setAttribute("disabled", true);
    selectModel.setAttribute("disabled", true);
    selectMark.setAttribute("disabled", true);

    for (let i = 0; i < data.length; i++) {
      if (
        selectModel.value == data[i].model &&
        selectMark.value == data[i].mark &&
        selectYear.value == data[i].year
      ) {
        carDeliveryDate.push(data[i].delivery);
      }
    }
    let newCarDate = carDeliveryDate.join("");
    let arrCarDate = newCarDate.split("-");
    let carMinDate = arrCarDate[0].split(".").reverse().join("-");
    let carMaxDate = arrCarDate[1].split(".").reverse().join("-");

    let el = document.createElement("input");
    el.setAttribute("type", "date");
    el.setAttribute("min", carMinDate);
    el.setAttribute("max", carMaxDate);
    el.classList.add("rental__date");
    divSelectCar.appendChild(el);
    divSelectCar.classList.add("date__added");
    rentalBtn.setAttribute("disabled", "disabled");
    close(".rental__date");
  });

  function close(classDate) {
    let carDate = document.querySelector(classDate);

    carDate.onchange = () => {
      let divSelectCar = document.querySelector(".select__car");
      let body = document.body;

      let valueDate = carDate.value;
      let date = valueDate.split("-").reverse().join(".");
      let valueMark = selectMark.value;
      let valueModel = selectModel.value;
      let valueYear = selectYear.value;

      divSelectCar.style.display = "none";

      let el = document.createElement("p");
      el.textContent = `Вы выбрали автомобиль: ${valueMark}, модель: ${valueModel}, ${valueYear} года, доставка ${date}!`;
      el.classList.add("car__info");
      body.appendChild(el);
      let btn = document.createElement("button");
      btn.textContent = "Начать заново";
      btn.classList.add("restart__btn");
      body.appendChild(btn);

      btnRestart(".restart__btn");
    };
  }

  function btnRestart(classBtn) {
    let btn = document.querySelector(classBtn);

    btn.addEventListener("click", () => {
      window.location.reload(true);
    });
  }
});
