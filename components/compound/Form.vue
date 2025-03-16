<script setup>
import { positiveNumber, required } from "@/utils/rules";

const formRef = ref(null);

function onSubmit(values) {
  emit("submit", values);
  formRef.value.resetForm();
}
</script>

<template>
  <AppCard>
    <div class="bg-teal-50 flex gap-4 mobile:rounded-t-md py-5 px-7">
      <Icon
        name="material-symbols:chart-data-outline-rounded"
        class="text-3xl text-primary-700"
      />
      <div class="my-auto">
        <span class="font-bold block text-lg">Add new investment</span>
        <span class="text-xs">
          Fill in the form with the details of the investment
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
        <AppInput
          label="Name"
          name="name"
          :error="errors.name"
          :rules="required"
          type="text"
        ></AppInput>

        <AppInput
          label="Year"
          name="year"
          :error="errors.name"
          :rules="positiveNumber"
          type="text"
        ></AppInput>

        <AppInput
          label="Amount"
          type="text"
          input-class="pl-12"
          name="amount"
          :rules="validateNumberField"
          :error="errors.expense"
        >
          <template #prepend>
            <div
              class="bg-teal-50 text-teal-700 absolute inset-y-0 left-0 px-2 flex items-center pointer-events-none rounded-s-lg border peer-focus:border-teal-800"
            >
              <Icon name="material-symbols:paid-outline" class="text-xl"></Icon>
            </div>
          </template>
        </AppInput>

        <AppInput
          label="Description"
          as="textarea"
          type="text"
          name="description"
          :error="errors.description"
        ></AppInput>

        <div class="flex justify-end pt-5 pb-2">
          <BaseButton> Submit </BaseButton>
        </div>
      </div>
    </Form>
  </AppCard>
</template>
