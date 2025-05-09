<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <RouterLink class="flex items-center gap-2 font-semibold" to="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </RouterLink>
      </div>
      <nav class="ml-auto space-x-4 gap-4 flex items-center h-10 sm:space-x-6">
        <div class="flex gap-4">
          <RouterLink class="hover:text-blue-500 font-semibold" to="/"> Home </RouterLink>
          <RouterLink class="hover:text-blue-500 font-semibold" to="/features">
            Features
          </RouterLink>
          <RouterLink class="hover:text-blue-500 font-semibold" to="/pricing"> Pricing </RouterLink>
          <RouterLink class="hover:text-blue-500 font-semibold" to="/contact"> Contact </RouterLink>
        </div>
        <div>
          <RouterLink
            to="/auth"
            class="bg-blue-500 py-2 px-3 rounded-xl font-semibold text-white tracking-wide hover:bg-blue-500/80"
          >
            Login
          </RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <RouterView />
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
