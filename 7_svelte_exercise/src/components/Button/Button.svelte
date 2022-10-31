<script>
  export let id;
  export let clickFunc
</script>

<button on:click={clickFunc} {id}>
  <slot />
</button>
