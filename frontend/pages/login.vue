<script setup>
import { ref } from 'vue';

const showOtpForm = ref(false);
const showOtpInput = ref(false);
definePageMeta({
  layout: "Login_Register",
});
</script>

<template>
  <div class="main flex items-center justify-center h-screen bg-white">
    <div class="flex flex-col place-items-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-14 w-auto" src="../images/allora_logo_1.png" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <!-- Regular Login Form -->
        <form v-if="!showOtpForm" class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wild-strawberry sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wild-strawberry-600 sm:text-sm sm:leading-6" />
            </div>

            <div class="text-sm mt-1 block text-left"> <!-- Added mt-1 and block class -->
            <a href="#" class="font-semibold text-indigo-600 hover:text-wild-strawberry-500">Forgot password?</a>
          </div>

          </div>
          
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-wild-strawberry-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-wild-strawberry-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wild-strawberry-600">
              Sign in
            </button>
          </div>
          

          
          <div class="relative flex justify-center text-sm font-medium leading-6">
              <span class="bg-white px-6 text-gray-900">Or</span>
            </div>

              <div>
              <button @click="showOtpForm = true" type="button" class="flex w-full justify-center rounded-md bg-wild-strawberry-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-wild-strawberry-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wild-strawberry-600">
                Login with OTP
              </button>
            </div>
        
   

        </form>

        <!-- OTP Login Form -->
        <form v-if="showOtpForm" class="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <!-- OTP Input -->
          <div id="otpContainer" class="mb-4">
            <label for="otp" class="block text-gray-700 text-sm font-bold mb-2">Mobile:</label>
            <input type="text" id="otp" name="otp" placeholder="Enter your Mobile Number"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-wild-strawberry-500">

             
              <!-- OTP Input (Initially Hidden) -->
              <div v-if="showOtpInput" class="mt-4">
                <input type="text" id="otp" name="otp" placeholder="Enter your OTP"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-wild-strawberry-500">
              </div>

          </div>

          <!-- Resend OTP Link -->
          <div>
            <p id="resendLink" class="text-center mt-4 text-wild-strawberry-500 hover:underline hidden">Resend OTP</p>
          </div>


                   
          <div>
            <button @click="showOtpInput = true" type="button" class="flex w-full justify-center rounded-md bg-wild-strawberry-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-wild-strawberry-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wild-strawberry-600">
              Login with OTP
            </button>

                
              <!-- <div class="mt-4">
                <button type="submit" class="flex w-full justify-center rounded-md bg-wild-strawberry-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-wild-strawberry-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wild-strawberry-600">
                    Sign in
                </button>
          </div> -->

             


          </div>

          
        </form>

      </div>
    </div>
  </div>
</template>