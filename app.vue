<script setup>
let inputCategory = ref(null);
let savedCategory = ref(null);
let inputType = ref(null);
let savedType = ref(null);
let visibleCategories = ref(false);
let visibleTypes = ref(false);

const { data: categories } = await useFetch("/api/constants/categories");
const types = ref(["One time", "Monthly", "Anual"]);

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
</script>

<template>
  <body class="bg-gray-100 text-gray-600 font-nunito">
    <main>
      <div class="bg-white w-full max-w-sm">
        <div class="bg-gray-200 flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="w-10 text-red-500 bg-white rounded-xl my-5 mx-7 shadow-md p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </div>
          <div class="my-auto">
            <span class="font-bold block text-gray-700">Add new expense</span>
            <span class="text-xs">
              Fill in the form with the details of the expense
            </span>
          </div>
        </div>

        <Form @submit="onSubmit" class="mx-7 my-4 text-sm">
          <div>
            <label for="name" type="text">Expense name</label>
            <div class="block mt-1 mb-5 text-gray-800">
              <Field
                type="text"
                name="name"
                :rules="validateTextField"
                class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
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
                class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
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
                class="pl-12 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-800 peer"
              />
              <div
                class="bg-gray-200 absolute inset-y-0 left-0 px-2 flex items-center pointer-events-none rounded-s-lg border peer-focus:border-gray-800"
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
                class="relative w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-800 peer"
                :rules="validateTextField"
                @focus="visibleTypes = true"
                @blur="handleBlurType"
              />
              <ErrorMessage name="types" class="text-red-500 absolute block" />
              <div
                class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute z-10"
                :class="{ hidden: !visibleTypes }"
              >
                <div v-if="!types" class="text-center">
                  No types match your search
                </div>
                <div
                  v-else
                  v-for="type in types"
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
                class="relative w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-800 peer"
                :rules="validateTextField"
                @focus="visibleCategories = true"
                @blur="handleBlurCategory"
              />
              <ErrorMessage
                name="categories"
                class="text-red-500 absolute block"
              />
              <div
                class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute"
                :class="{ hidden: !visibleCategories }"
              >
                <div v-if="!categories" class="text-center">
                  No categories match your search
                </div>
                <div
                  v-else
                  v-for="category in categories"
                  class="flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full"
                  @click="savedCategory = category.name"
                >
                  <Icon :name="category.icon" class="w-9 h-9 px-2"/>
                  <span>{{ category.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </main>
  </body>
</template>
