<script setup>
// TODO
// -make transitions to all the form

const { data: categories } = await useFetch("/api/constants/categories");
const types = ref(["One time", "Monthly", "Anual"]);

let inputCategory = ref("");
let savedCategory = ref("");
let inputType = ref("");
let savedType = ref("");
let visibleCategories = ref(false);
let visibleTypes = ref(false);

let filteredCategories = computed(() => {
  return categories.value.filter((item) => {
    return item.name.toLowerCase().includes(inputCategory.value.toLowerCase());
  });
});

let filteredTypes = computed(() => {
  return types.value.filter((item) => {
    return item.toLowerCase().includes(inputType.value.toLowerCase());
  });
});

function onSubmit(values) {
  console.log(values);
}

function validateTextField(value) {
  if (!value) return "This field is required";
  return true;
}

function validateNumberField(value) {
  if (!value) return "This field is required";
  if (/^-?\d*\.?\d+$/.test(value) && parseFloat(value) > 0) return true;
  return "Invalid amount";
}

function handleBlurCategory() {
  setTimeout(() => {
    inputCategory.value = savedCategory.value;
    visibleCategories.value = false;
  }, 110);
}

function handleBlurType() {
  setTimeout(() => {
    inputType.value = savedType.value;
    visibleTypes.value = false;
  }, 110);
}

function contactMe(url) {
  console.log(url);
  window.open(url);
}
</script>

<template>
  <div id="app" class="bg-gray-100 text-gray-600 font-nunito">
    <main class="flex justify-center mobile:items-center h-screen">
      <div
        class="bg-white w-full max-w-md h-min mobile:rounded-md mobile:shadow-md"
      >
        <div class="bg-teal-700 text-white flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="w-10 text-teal-700 bg-white rounded-xl my-5 mx-7 shadow-md p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </div>
          <div class="my-auto">
            <span class="font-bold block text-white">Add new expense</span>
            <span class="text-xs">
              Fill in the form with the details of the expense
            </span>
          </div>
        </div>

        <Form @submit="onSubmit" class="mx-7 my-4 text-sm pt-3">
          <div>
            <label for="name" type="text">Expense name</label>
            <div class="block mt-1 mb-5 text-gray-800">
              <Field
                type="text"
                name="name"
                :rules="validateTextField"
                class="text-field"
              />
              <ErrorMessage name="name" class="text-red-500 block absolute" />
            </div>

            <label for="description" type="text">Description</label>
            <div class="block mt-1 mb-5 text-gray-800">
              <Field
                type="text"
                name="description"
                :rules="validateTextField"
                placeholder="Add expense information"
                class="text-field"
              />
              <ErrorMessage
                name="description"
                class="text-red-500 block absolute"
              />
            </div>

            <label for="expense" type="text">Amount</label>
            <div class="block mt-1 mb-5 text-gray-800 relative">
              <Field
                type="text"
                name="expense"
                :rules="validateNumberField"
                class="pl-12 text-field peer"
              />
              <div
                class="bg-teal-50 text-teal-700 absolute inset-y-0 left-0 px-2 flex items-center pointer-events-none rounded-s-lg border peer-focus:border-teal-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <ErrorMessage
                name="expense"
                class="text-red-500 absolute block"
              />
            </div>

            <label for="types">Type</label>
            <div class="block mt-1 mb-5 text-gray-800 relative">
              <Field
                type="text"
                name="types"
                v-model="inputType"
                class="relative text-field peer"
                :rules="validateTextField"
                @focus="visibleTypes = true"
                @blur="handleBlurType"
              />
              <ErrorMessage name="types" class="text-red-500 absolute block" />
              <div
                class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute z-10"
                :class="{ hidden: !visibleTypes }"
              >
                <div v-if="!filteredTypes.length" class="text-center">
                  No types match your search
                </div>
                <div
                  v-else
                  v-for="type in filteredTypes"
                  class="pl-2 flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full"
                  @click="savedType = type"
                >
                  <span>{{ type }}</span>
                </div>
              </div>
            </div>

            <label for="categories">Category</label>
            <div class="block mt-1 mb-3 text-gray-800 relative">
              <Field
                type="text"
                name="categories"
                v-model="inputCategory"
                class="relative text-field peer"
                :rules="validateTextField"
                @focus="visibleCategories = true"
                @blur="handleBlurCategory"
              />
              <ErrorMessage
                name="categories"
                class="text-red-500 absolute block"
              />
              <div
                class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute max-h-32 overflow-y-scroll scrollbar-none"
                :class="{ hidden: !visibleCategories }"
              >
                <div v-if="!filteredCategories.length" class="text-center">
                  No categories match your search
                </div>
                <div
                  v-else
                  v-for="category in filteredCategories"
                  class="flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full"
                  @click="savedCategory = category.name"
                >
                  <Icon
                    :name="category.icon"
                    class="w-9 h-9 px-2"
                    :color="category.color"
                  />
                  <span>{{ category.name }}</span>
                </div>
              </div>
            </div>

            <div class="flex justify-end pt-5 pb-2">
              <button
                class="px-3 py-2 bg-teal-50 text-teal-700 rounded-full hover:bg-teal-700 hover:text-white"
              >
                <span>Submit</span>
                <Icon
                  name="material-symbols-light:arrow-forward-rounded"
                  class="ml-1 w-5 h-5"
                />
              </button>
            </div>
          </div>
        </Form>
      </div>
    </main>
    <footer class="flex flex-col items-center font-mono text-gray-600 pb-5">
      <hr class="h-2 w-full max-w-md pb-5" />
      <div class="flex gap-2 mb-2">
        <Icon
          name="uil:whatsapp"
          class="w-7 h-7 cursor-pointer hover:text-gray-800"
          @click="contactMe(`https://wa.me/5356653917`)"
        />
        <Icon
          name="uil:telegram"
          class="w-7 h-7 cursor-pointer hover:text-gray-800"
          @click="contactMe(`https://t.me/cmorellr`)"
        />
        <Icon
          name="uil:github"
          class="w-7 h-7 cursor-pointer hover:text-gray-800"
          @click="contactMe(`https://github.com/pfrito`)"
        />
      </div>
      <div>
        <span>©2024 Designed, created and maintained by </span>
        <a
          href="https://github.com/pfrito"
          class="uppercase hover:text-gray-800"
          >Carlos</a
        >
      </div>
    </footer>
  </div>
</template>
