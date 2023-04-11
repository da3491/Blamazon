import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});

// *******Products*******

export async function getAllProducts() {
  try {
    const response = await instance.get("/products");
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getProductBySearch(query) {
  try {
    const response = await instance.get(`/products/search?q=${query}`);
    console.log("fetching by query: ", query);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getProductCategories() {
  try {
    const response = await instance.get(`/products/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getProductsByCategory(category) {
  console.log("category selected, ", category);
  try {
    console.log("trying fetch with ", category);
    const response = await instance.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// *******Account*******

export async function getUsers() {
  console.log("in getUsers");
  try {
    const response = await instance.get("/users");
    console.log(response.data.users);
    return response.data.users;
  } catch (error) {
    console.error(error);
  }
}

export async function getLoginToken(iUsername, iPassword) {
  console.log("in login", iUsername, iPassword);
  try {
    const response = await instance.post("/auth/login", {
      username: `${iUsername}`,
      password: `${iPassword}`,
    });
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
}

// export async function logout() {
//   const token = localStorage.getItem("token");
//   console.log(token);
//   // localStorage.removeItem("token");
// }

export async function createAccount({
  email,
  username,
  password,
  firstname,
  lastname,
}) {
  console.log("in createAccount");
  try {
    const response = await instance.post("/users", {
      body: JSON.stringify({
        email: { email },
        username: { username },
        password: { password },
        name: {
          firstname: { firstname },
          lastname: { lastname },
        },
      }),
    });
    console.log(response.data.id);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// *******Cart*******

export async function getAllCarts() {
  try {
    const response = await instance.get(`/carts`);
    console.log(response.data.carts);
    return response.data.carts;
  } catch (error) {
    console.error(error);
  }
}

export async function getCart(userId = 5) {
  try {
    console.log("getting cart for id: ", userId);
    const response = await instance.get(`/carts/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function addToCart(userId, productId, quantity) {
  console.log(userId, productId, quantity);
  try {
    const response = await instance.put(`/carts/${userId}`, {
      merge: true,
      products: [
        {
          id: { productId },
          quantity: { quantity },
        },
      ],
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// *******Google Location*******

export async function getLocation() {
  try {
    const response = await axios.get("https://get.geojs.io/v1/ip/geo.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
