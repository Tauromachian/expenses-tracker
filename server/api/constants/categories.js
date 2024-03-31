export default defineEventHandler(async (event) => {
  //annadirle las mascotas con la bola de pokemon, health / self care con un corazo plus, ropa, inversiones y otros
  const data = [
    {
      icon: "material-symbols-light:light-group-rounded",
      color: "#3385ff",
      bgColor: "#e6f0ff",
      name: "Utilities",
    },
    {
      icon: "material-symbols-light:home",
      color: "#990073",
      bgColor: "#ffe6f9",
      name: "House",
    },
    {
      icon: "material-symbols-light:shopping-cart",
      color: "#ff33ff",
      bgColor: "#ffe6ff",
      name: "Shop",
    },
    {
      icon: "material-symbols-light:sports-basketball",
      color: "#00cca3",
      bgColor: "#e6fffa",
      name: "Entertainment",
    },
    {
      icon: "material-symbols-light:fastfood",
      color: "#ffcc00",
      bgColor: "#fffae6",
      name: "Food",
    },
    {
      icon: "material-symbols-light:directions-bus",
      color: "#00b300",
      bgColor: "#e6ffe6",
      name: "Transportation",
    },
    {
      icon: "material-symbols-light:travel-luggage-and-bags",
      color: "#663300",
      bgColor: "#ffe6cc",
      name: "Travel",
    },
  ];

  return data;
});
