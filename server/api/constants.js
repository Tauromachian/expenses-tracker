export default defineEventHandler(async (event) => {
  const data = [
    {
      id: 1,
      icon: "material-symbols-light:home-outline",
      name: "House",
    },
    {
      id: 2,
      icon: "material-symbols-light:shopping-cart-outline-rounded",
      name: "Shop",
    },
  ];

  return data;
});
