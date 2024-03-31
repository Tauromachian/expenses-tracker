export default defineEventHandler(async (event) => {
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
      icon: "ic:round-catching-pokemon",
      color: "#ff3300",
      bgColor: "#ffe6e6",
      name: "Pet",
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
    {
      icon: "mdi:heart-plus",
      color: "#b30000",
      bgColor: "#ffb3b3",
      name: "Health",
    },
    {
      icon: "mdi:tshirt-crew",
      color: "#00aaff",
      bgColor: "#e6f7ff",
      name: "Clothes",
    },
    {
      icon: "material-symbols:waterfall-chart",
      color: "#2eb8b8",
      bgColor: "#d6f5f5",
      name: "Investments",
    },
    {
      icon: "material-symbols:featured-seasonal-and-gifts",
      color: "#ffcc00",
      bgColor: "#ffcccc",
      name: "Gift",
    },
    {
      icon: "material-symbols-light:view-quilt",
      color: "#4d4d4d",
      bgColor: "#e6e6e6",
      name: "Others",
    },
  ];

  return data;
});
