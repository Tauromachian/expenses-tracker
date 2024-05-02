<script setup>
import { initModals } from "flowbite";

onMounted(() => {
  initModals();
});

const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["submitForm"]);
const types = ref(["One time", "Monthly", "Anual"]);

const inputCategory = ref("");
const savedCategory = ref("");
const inputType = ref("");
const savedType = ref("");
const visibleCategories = ref(false);
const visibleTypes = ref(false);
const fadingInOutTypes = ref(false);
const fadingInOutCategories = ref(false);

const filteredCategories = computed(() => {
  return props.categories.filter((item) => {
    return item.name.toLowerCase().includes(inputCategory.value.toLowerCase());
  });
});

const filteredTypes = computed(() => {
  return types.value.filter((item) => {
    return item.toLowerCase().includes(inputType.value.toLowerCase());
  });
});

function onSubmit(values) {
  emit("submitForm", values);
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
    fadingInOutCategories.value = false;
    inputCategory.value = savedCategory.value;
    visibleCategories.value = false;
  }, 300);
}

function handleBlurType() {
  setTimeout(() => {
    fadingInOutTypes.value = false;
    inputType.value = savedType.value;
    visibleTypes.value = false;
  }, 300);
}

function handleFocusType() {
  visibleTypes.value = true;
  setTimeout(() => {
    fadingInOutTypes.value = true;
  }, 10);
}

function handleFocusCategory() {
  visibleCategories.value = true;
  setTimeout(() => {
    fadingInOutCategories.value = true;
  }, 10);
}
</script>

<template>
  <div
    class="bg-white w-full max-w-md h-min mobile:rounded-md mobile:shadow-md"
  >
    <div class="bg-teal-50 flex mobile:rounded-t-md">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="w-10 text-teal-700 rounded-xl my-5 mx-7 shadow-md p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          />
        </svg>
      </div>
      <div class="my-auto">
        <span class="font-bold block text-lg">Add new expense</span>
        <span class="text-xs">
          Fill in the form with the details of the expense
        </span>
      </div>
    </div>
    <Form v-slot="{ errors }" class="mx-7 my-4 pt-3" @submit="onSubmit">
      <div>
        <label>Name</label>
        <div class="block mt-1 mb-5 text-gray-800">
          <Field
            type="text"
            name="name"
            :rules="validateTextField"
            class="text-field"
          />
          <span
            class="text-red-500 block absolute empty:opacity-0 opacity-100 transition ease-in-out duration-100"
            >{{ errors.name }}</span
          >
        </div>

        <label>Description</label>
        <div class="block mt-1 mb-5 text-gray-800">
          <Field
            type="text"
            name="description"
            :rules="validateTextField"
            placeholder="Add expense information"
            class="text-field"
          />
          <span
            class="text-red-500 block absolute empty:opacity-0 opacity-100 transition ease-in-out duration-100"
            >{{ errors.description }}</span
          >
        </div>

        <label>Amount</label>
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
          <span
            class="text-red-500 block absolute empty:opacity-0 opacity-100 transition ease-in-out duration-100"
            >{{ errors.expense }}</span
          >
        </div>

        <label>Type</label>
        <div class="block mt-1 mb-5 text-gray-800 relative">
          <Field
            v-model="inputType"
            type="text"
            name="types"
            class="relative text-field peer"
            :rules="validateTextField"
            @focus="handleFocusType"
            @blur="handleBlurType"
          />
          <span
            class="text-red-500 block absolute empty:opacity-0 opacity-100 transition ease-in-out duration-100"
            >{{ errors.types }}</span
          >
          <div
            v-if="visibleTypes"
            class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute z-10 transition-opacity duration-150 ease-in-out"
            :class="{
              'opacity-100': fadingInOutTypes,
              'opacity-0': !fadingInOutTypes,
            }"
          >
            <div v-if="!filteredTypes.length" class="text-center">
              No types match your search
            </div>
            <div
              v-for="type in filteredTypes"
              v-else
              :key="type"
              class="pl-2 flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full transition ease-in-out duration-150"
              @click="savedType = type"
            >
              <span>{{ type }}</span>
            </div>
          </div>
        </div>

        <label>Category</label>
        <div class="block mt-1 mb-3 text-gray-800 relative">
          <Field
            v-model="inputCategory"
            type="text"
            name="categories"
            class="relative text-field peer"
            :rules="validateTextField"
            @focus="handleFocusCategory"
            @blur="handleBlurCategory"
          />
          <span
            class="text-red-500 block absolute empty:opacity-0 opacity-100 transition ease-in-out duration-100"
            >{{ errors.categories }}</span
          >
          <div
            v-if="visibleCategories"
            class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute z-10 transition-opacity duration-150 ease-in-out max-h-32 overflow-scroll scrollbar-none"
            :class="{
              'opacity-100': fadingInOutCategories,
              'opacity-0': !fadingInOutCategories,
            }"
          >
            <div v-if="!filteredCategories.length" class="text-center">
              No categories match your search
            </div>
            <div
              v-for="category in filteredCategories"
              v-else
              :key="category.id"
              class="flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full transition ease-in-out duration-150"
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
          <BaseButton>
            <span>Submit</span>
            <Icon
              name="material-symbols-light:arrow-forward-rounded"
              class="ml-1 w-5 h-5"
            />
          </BaseButton>
        </div>
      </div>
    </Form>
  </div>
</template>
