<script setup>
import { initModals } from "flowbite";

import { required } from "@/utils/rules";

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
const formRef = ref(null);

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
  formRef.value.resetForm();
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
  <AppCard>
    <div class="bg-teal-50 flex gap-4 mobile:rounded-t-md py-5 px-7">
      <Icon
        name="material-symbols:chart-data-outline-rounded"
        class="w-8 h-8 text-teal-700 rotate-90"
      />
      <div class="my-auto">
        <span class="font-bold block text-lg">Add new expense</span>
        <span class="text-xs">
          Fill in the form with the details of the expense
        </span>
      </div>
    </div>
    <Form
      v-slot="{ errors }"
      class="mx-7 my-4 pt-3"
      @submit="onSubmit"
      ref="formRef"
    >
      <div>
        <label>Name</label>
        <div class="block mt-1 mb-5 text-gray-800">
          <Field type="text" name="name" :rules="required" class="text-field" />
          <span
            class="text-red-500 block absolute empty:opacity-0 opacity-100 transition"
            >{{ errors.name }}</span
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
          <ErrorText> {{ errors.expense }}</ErrorText>
        </div>

        <label>Type</label>
        <div class="block mt-1 mb-5 text-gray-800 relative">
          <Field
            v-model="inputType"
            type="text"
            name="types"
            class="relative text-field peer"
            :rules="required"
            @focus="handleFocusType"
            @blur="handleBlurType"
          />

          <ErrorText>{{ errors.types }}</ErrorText>
          <div
            v-if="visibleTypes"
            class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute z-10 transition-opacity"
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
              class="pl-2 flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full transition"
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
            :rules="required"
            @focus="handleFocusCategory"
            @blur="handleBlurCategory"
          />
          <ErrorText>{{ errors.categories }}</ErrorText>

          <div
            v-if="visibleCategories"
            class="bg-white w-full mt-1 p-2 rounded-lg border border-gray-300 absolute z-10 transition-opacity max-h-32 overflow-scroll scrollbar-none"
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
              class="flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full transition"
              @click="savedCategory = category.name"
            >
              <Icon
                :name="category.icon"
                class="w-5 h-5 pl-2 mr-4"
                :style="{ color: category.color }"
              />
              <span>{{ category.name }}</span>
            </div>
          </div>
        </div>

        <label>Description</label>
        <div class="block mt-1 mb-5 text-gray-800">
          <Field
            as="textarea"
            type="text"
            name="description"
            :rules="required"
            class="text-field"
          />

          <ErrorText>{{ errors.description }}</ErrorText>
        </div>

        <div class="flex justify-end pt-5 pb-2">
          <BaseButton> Submit </BaseButton>
        </div>
      </div>
    </Form>
  </AppCard>
</template>
