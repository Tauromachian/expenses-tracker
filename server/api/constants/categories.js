export default defineEventHandler(async (event) => {
  const data = [
    {
      icon: "material-symbols-light:light-group-rounded",
      color: "#0080ff",
      name: "Utilities",
    },
    {
      icon: "material-symbols-light:home",
      color: "#ff8000",
      name: "House",
    },
    {
      icon: "material-symbols-light:shopping-cart",
      color: "#ff33cc",
      name: "Shop",
    },
    {
      icon: "material-symbols-light:sports-basketball",
      color: "#00cca3",
      name: "Entertainment",
    },
    {
      icon: "material-symbols-light:fastfood",
      color: "#e6e600",
      name: "Food",
    },
    {
      icon: "material-symbols-light:directions-bus",
      color: "#00e600",
      name: "Transportation",
    },
    {
      icon: "material-symbols-light:travel-luggage-and-bags",
      color: "indigo",
      name: "Travel",
    },
  ];

  return data;
});
