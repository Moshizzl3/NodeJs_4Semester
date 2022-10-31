<script>
  export let name;
  export let type;
  export let placeholder;
  export let value = "";

  function typeAction(node) {
    node.type = type;
  }
</script>

<input use:typeAction {name} {placeholder} bind:value />
