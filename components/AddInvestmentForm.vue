<script setup></script>

<template>
  <AppCard>
    <div class="bg-teal-50 flex gap-4 mobile:rounded-t-md py-5 px-7">
      <Icon
        name="material-symbols:chart-data-outline-rounded"
        class="w-8 h-8 text-teal-700"
      />
      <div class="my-auto">
        <span class="font-bold block text-lg">Add new investment</span>
        <span class="text-xs">
          Fill in the form with the details of the investment
        </span>
      </div>
    </div>
    <Form v-slot="{ errors }" class="mx-7 my-4 pt-3" @submit="onSubmit">
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
