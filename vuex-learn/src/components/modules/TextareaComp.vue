<!-- htmlかくとこ -->
<template>
  <div>
    <p class="error">{{ error }}</p>
    <textarea></textarea>
  </div>
</template>

<!-- スクリプトかくとこ -->
<script>
export default {
  name: 'textareaComp',
  data() {
    return {
      error: '入力は必須です'
    }
  }  
}
</script>

<!-- cssかくとこ -->
<style scoped>
.error {
  color: red;
}
</style>
