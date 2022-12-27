const getCars = async () => {
  const res = await fetch("http://localhost:3333/api/cars");
  const data = await res.json();
  return data;
};

getCars();

const currencyFormatter = (value) => {
  return new Intl.NumberFormat("mn-MN", {
    maximumFractionDigits: 2,
  }).format(value);
};

const getCarCard = (car) => {
  return `
    <div class="col-3">
    <div class="card" >
      <div class="ratio ratio-4x3">
        <img
          src="${car.imageUrl}"
          alt="ᴱᴿᴿᴼᴿ " />
      </div>
      <div class="card-body">
        <div class="card-name">${car.model}</div>
        <div class="card-category">${car.brand}</div>
        <div class="card-name card-price">${currencyFormatter(car.price)}₮</div>
        <div class="d-flex justify-content-end gap-3">
        <button type="button" class="btn btn-success" onclick="editCar(${
          car.id
        })">edit</button>
        <button  onclick="deleteCar(${
          car.id
        })" type="button" class="btn btn-danger">
            delete
        </button>
      </div>
    </div>
  </div>`;
};

const carsTarget = document.querySelector("#cars");

const getCarsHtml = async () => {
  carsTarget.innerHTML = " ";
  const cars = await getCars();
  for (const car of cars) {
    carsTarget.innerHTML += getCarCard(car);
  }
};

getCarsHtml();

const submitBtn = document.querySelector("#formSubmit");

const imageUrlTarget = document.querySelector("#imageUrl");

const modelTarget = document.querySelector("#model");

const brandTarget = document.querySelector("#brand");

const priceTarget = document.querySelector("#price");

submitBtn.addEventListener("click", async () => {
  const newCar = {
    imageUrl: imageUrlTarget.value,
    model: modelTarget.value,
    brand: brandTarget.value,
    price: priceTarget.value,
  };

  console.log(newCar);
  const req = await fetch("http://localhost:3333/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar),
  });
  const res = await req.json();
  console.log(res);
  getCarsHtml();
  modal.hide();
});

const deleteCar = (id) => {
  console.log("id is :", id);
  if (confirm("Delete ?"))
    fetch("http://localhost:3333/api/cars", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => console.log(res))
      .then((err) => {
        console.warn(err);
        alert("Done !");
        getCarsHtml();
      });
};
