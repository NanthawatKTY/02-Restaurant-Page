<template>
    <div>
        <div class="container">
            <NuxtLayout name="error">
              <template #header>
                <h1>Page not found</h1>
              </template>

              <!-- Image sad face is between #header and redirectEl -->

              <template #redirectEl>
                <NuxtLink href="/">Go to homepage</NuxtLink>
              </template>
            </NuxtLayout>
        </div>
    </div>
</template>

<style scoped>
  .container {
    text-align: center;
    margin-top: 5rem;
  }
</style>