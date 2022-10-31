<script>
  export let name;
  export let children;

  import { fridgeMessageStore } from "../../store/fridgeBulletinStore";
  import Child from "../child/Child.svelte";

  function handleTellILoveU(message) {
    console.log(message);
  }

  function handleAlwaysSayHi(message) {
    console.log("hi", message);
  }

  function handleEreaseFridgeBulletin() {
    fridgeMessageStore.set("teeest");
  }
</script>

<h1>Hi i am {name}</h1>
<div
  class="erase-fridge-bulletin-div"
  on:click={handleEreaseFridgeBulletin}
  on:keydown={() => {}}
>
  erase stuff from fridge buttiletin
</div>

{#each children as child}
  <Child
    {child}
    parentName={name}
    onTellILoveYou={handleTellILoveU}
    onAlwaysSayHi={handleAlwaysSayHi}
  />
{/each}
