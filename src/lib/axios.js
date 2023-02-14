import axios from "axios";

const instance = axios.create({
  baseURL: "http://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getAllproducts() {
  try {
    const response = await instance.get("/products");
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await instance.get(`/products/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// // Async Usage
// async function getUser() {
//   try {
//     const response = await axios.get("/user?ID=12345");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Get
// axios
//   .get("https://wwww.fakeshop-api.com/getAllProducts")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Post
// axios
//   .post("/user", {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
