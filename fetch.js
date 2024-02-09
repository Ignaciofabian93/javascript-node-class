import { sumaDeNumeros } from "./funcion.js";

const apiURL = "https://fakestoreapi.com/products/3"; // Almacenar una url de api

const store = [];
// Inicializar objeto
let data = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: { rate: 0, count: 0 },
};

// console.log("log al objeto: ", data);

// console.log("Antes del async");
// Funcion asincrona para hacer la llamada a la api
const getApiInfo = async () => {
  try {
    const result = await fetch("https://fakestoreapi.com/products/1") // variable para almacenar el resultado
      .then((response) => response.json()) // la respuesta se pasa a formato JSON
      .then((data) => data); // se retorna el dato final
    console.log("Result: ", result);
    const result2 = await fetch("https://fakestoreapi.com/products/2")
      .then((response) => response.json())
      .then((data) => data);
    const result3 = await fetch("https://fakestoreapi.com/products/3");
    const res = await result3.json();
    // return res
    // console.log("Res: ", res);
    // console.log("Result: ", result);
    // response y data son nombres estandar. Pueden usar otro nombre de parametro si gustan

    const suma = sumaDeNumeros(2, 4);
    // console.log("Suma: ", suma);
    // mutar objeto creando una copia y asignando nuevos valores
    data = {
      ...data,
      id: result.id,
      title: result.title,
      price: result.price,
      description: result.description,
      category: result.category,
      image: result.image,
      rating: result.rating,
    };
    // console.log("new data: ", data);

    const product1 = {
      id: result.id,
      title: result.title,
      price: result.price,
      description: result.description,
      category: result.category,
      image: result.image,
      rating: result.rating,
    };
    const product2 = {
      id: result2.id,
      title: result2.title,
      price: result2.price,
      description: result2.description,
      category: result2.category,
      image: result2.image,
      rating: result2.rating,
    };
    const product3 = {
      id: res.id,
      title: res.title,
      price: res.price,
      description: res.description,
      category: res.category,
      image: res.image,
      rating: res.rating,
    };

    store.push(product1, product2, product3);
    // console.log("Store: ", store);

    return { product1, product2, product3 };
  } catch (error) {
    // console.log("Error en llamada a la API: ", error);
    // console.error("Error: ", error);
    throw new Error(error);
  }
};

// console.log("Despues del async");

getApiInfo();

// const toggleTheme = () => {
//   setTheme(!theme)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// LLAMADAS A API ---- CRUD
// Apis REST

// CREATE ---> POST
// READ   ---> GET
// UPDATE ---> PUT, (PATCH)
// DELETE ---> DELETE

// PRODUCTOS

const users = [];

const url = "https://jsonplaceholder.typicode.com/users";

const producto = {
  id: 1,
  name: "Producto 1",
  desc: "Cheap",
};

const user = {
  id: 1,
  name: "Vegeta",
  username: "Principe sayayin",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: [Object],
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// OBTENER PRODUCTOS
export const getProducts = async () => {
  try {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Data: ", data);
    users.push(data);
  } catch (error) {
    console.log("Error en get", error);
  }
};

getProducts();

// CREAR PRODUCTOS O GUARDAR PRODUCTOS
export const saveProduct = async (product) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${url}`, options);
    const data = await response.json(); // 'el objeto se guardo correctamente' : 'Hubo un error al guardar el objeto'
    console.log("Data POST: ", data);
    return data;
  } catch (error) {
    console.log("Error en post", error);
  }
};

saveProduct();

export const updateProduct = async (id) => {
  try {
    console.log("Users: ", users);
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${url}/${user.id}`, options);
    const data = await response.json();
    console.log("Update: ", data); // 'el objeto se actualizo correctamente' : 'Hubo un error al guardar el objeto'
    return data;
  } catch (error) {
    console.log("Error en post", error);
  }
};

updateProduct();

export const deleteProduct = async () => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${url}/${11}`, options);
    const data = await response.json(); // 'el objeto se elimino correctamente' : 'Hubo un error al eliminar el objeto'
    console.log("Delete : ", data);
    return data;
  } catch (error) {
    console.log("Error en post", error);
  }
};

// status: 200

deleteProduct();

////////////////////////////////////////////
// CODIGOS DE ESTADO

// 200 Status OK. El servidor ha recibido la petición y está procesando ella.
// 200 GET, recibes objeto o array de objetos.
// 201 POST, UPDATE, DELETE

// 300 // errores de redireccionamiento, no autorizado
// 301 // autorizado
// 302 // redireccionamiento permanente
// 304 // no modificado

// Errores de clientes
// 400 // errores de cliente, no autorizado
// 401 // no autorizado
// 403 // prohibido
// 404 // no encontrado

// Errores de servidor
// 500 // errores de servidor, no autorizado
// 501 // no implementado
// 502 // error de red
// 503 // servicio no disponible
// 504 // tiempo de espera agotado
