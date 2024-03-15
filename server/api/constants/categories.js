export default defineEventHandler(async (event) => {
  const data = [
    {
      icon: "material-symbols-light:light-group-outline-rounded",
      name: "Utilities",
    },
    {
      icon: "material-symbols-light:home-outline",
      name: "House",
    },
    {
      icon: "material-symbols-light:shopping-cart-outline",
      name: "Shop",
    },
    {
      icon: "material-symbols-light:sports-basketball-outline",
      name: "Entertainment",
    },
    {
      icon: "material-symbols-light:fastfood-outline",
      name: "Food",
    },
    {
      icon: "material-symbols-light:directions-bus-outline",
      name: "Transportation",
    },
    {
      icon: "material-symbols-light:travel-luggage-and-bags-outline",
      name: "Travel",
    },
  ];

  return data;
});
