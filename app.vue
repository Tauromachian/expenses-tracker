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

        <div class="mx-7 my-4 text-sm">
          <div>
            <label for="name" type="text">Expense</label>
            <div class="block mt-1 mb-3 text-gray-800">
              <input
                type="text"
                name="name"
                id="name"
                class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
              />
            </div>

            <label for="description" type="text">Description</label>
            <div class="block mt-1 mb-3 text-gray-800">
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Add expense information"
                class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
              />
            </div>

            <label for="expense" type="text">Amount</label>
            <div class="block mt-1 mb-3 text-gray-800 relative">
              <input
                type="text"
                name="expense"
                id="expense"
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
            </div>

            <label for="types">Type of expense</label>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>
