<script>
  import Parent from "./components/parent/Parent.svelte";
  import Home from "./components/home/Home.svelte";
  const parents = ["Kurt", "Katja"];
  const children = [
    { name: "Flemming", blacksheep: "ultra-black-sheep" },
    { name: "Erik", blacksheep: "medium-blacksheep", brightkid: true },
    { name: "Ingrid", brightkid: true, isGirl: true },
  ];
  const pets = [
    {
      type: "panda",
      name: "Poh",
    },
    { type: "dino", name: "dino" },
  ];
</script>

<main>
  <Home>
    <Parent {pets} {children} name={parents[0]} />
    <Parent {pets} {children} name={parents[1]} />
  </Home>
</main>

<style>
</style>
