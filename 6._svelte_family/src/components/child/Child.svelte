<script>
  export let child;
  export let onTellILoveYou;
  export let onAlwaysSayHi;
  export let parentName;

  import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js";

  let fridgeMessage = "";

  function handleWriteMessage() {
    fridgeMessageStore.update((currentMessage) => {
      return currentMessage + `${fridgeMessage}`;
    });

    fridgeMessage = "";
  }
</script>

<div class:bright-kid={child.brightkid}>
  <p>{child.name}</p>

  <input placeholder="Write message" bind:value={fridgeMessage} />
  <button on:click={handleWriteMessage}>save</button>

  <button on:click={onTellILoveYou}>Whisper in parents ear</button>
  <button on:click={onAlwaysSayHi(parentName)}>Hi</button>
</div>


<style>
    .bright-kid{
        border: solid 2px yellow
    }
</style>


