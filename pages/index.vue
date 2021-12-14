<template>
  <div class="text-center m-14">
    <h1 class="text-4xl m-14">
      Welcome to the Civic Hacking Hub!
      <br />A place where people can find nonprofits to code for.
    </h1>
    <h2 class="text-2xl px-10 py-3 text-gray-600 font-normal m-14">
      Find causes that you care about to sharpen your programming skills, <br />
      and to make a positive difference in the world!
    </h2>

    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-2
        md:gap-2
        lg:gap-2
        p-3
        divide-x-2 divide-gray-600
        rounded-none
      "
    >
      <div
        class="
          text-lg
          font-bold
          text-center
          pt-8
          grid-rows-2
          sm:grid-rows-3
          md:grid-rows-4
          lg:grid-rows-5
          xl:grid-rows-6
          text-gray-600
        "
      >
        <div class="text-xl font-normal">
          Pandora lifted <br />
          conversions by
        </div>
        <div class="text-6xl p-4 font-normal">130%</div>
      </div>
      <div
        class="
          text-lg
          font-bold
          text-center
          pt-8
          grid-rows-2
          sm:grid-rows-3
          md:grid-rows-4
          lg:grid-rows-5
          xl:grid-rows-6
          text-gray-600
        "
      >
        <div class="text-2xl font-normal">LendingTree <br />reduced CPA by</div>
        <div class="text-6xl p-4 px-8 font-normal">65%</div>
        <div class="text-2xl font-normal">with 100% higher CVR</div>
      </div>
      <div
        class="
          text-green-500 text-lg
          font-bold
          text-center
          pt-8
          grid-rows-2
          sm:grid-rows-3
          md:grid-rows-4
          lg:grid-rows-5
          xl:grid-rows-6
          text-gray-600
        "
      >
        <div class="text-2xl font-normal">GoodGame Studios</div>
        <div class="text-6xl p-4 font-normal">Tripled</div>
        <div class="text-2xl font-normal">Its Player Base</div>
      </div>

      <div
        class="
          bg-green-100
          text-green-500 text-lg
          font-bold
          text-center
          pt-8
          grid-rows-2
          sm:grid-rows-3
          md:grid-rows-4
          lg:grid-rows-5
          xl:grid-rows-6
          text-gray-600
        "
      >
        <div class="text-2xl font-normal">Boxed tallied</div>
        <div class="text-6xl p-4 font-normal">1,496</div>
        <div class="text-2xl font-normal">
          Sales From a single
          <br />piece of content
        </div>
      </div>
    </div>
    <div class="mt-14">
      <NuxtLink
        to="/project"
        class="
          rounded-full
          px-8
          py-4
          m-4
          bg-primary
          text-xl text-white text-center
          w-screen
          md:w-1/2
        "
        >Get Started</NuxtLink
      >
    </div>
  </div>
</template>
<script>
export default {
  name: '',
}
</script>
