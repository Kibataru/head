<template>
  <div class="root">
    <Header />
    <main class="content">
      <Main />
    </main>
    <Footer />
  </div>
</template>

<style>
.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1 0 auto;
}
</style>