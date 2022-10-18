
<!-- Exercise 1
<script>
	let name = "worldssss"
</script>

<p>Exercise 1</p>
<h1>
	hello {name}
</h1> -->

<!-- <p>Exercise 2</p>
<script>
	let src = 'src/assets/dances.gif';
</script>

<img src={src} alt="a man dances">

<img {src} alt="a man dances"> -->

<!-- <p>Exercise 3</p>
<p>This is a paragraph.</p>

<style>
	p {
		color: purple;
        background-color: red;
	}
</style> -->

<!-- <p>Exercise 4</p>
<p>This is a paragraph.</p>
<Nested/>

<script>
import Nested from "./Nested.svelte";
</script>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style> -->

<!-- <p>Exercise 5</p>
<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p> 
-->

<!-- <p>Exercise 1 reactivity</p>
<script>
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button> -->

<!-- <p>Exercise 2 reactivity</p>

<script>
	let count = 0;
	$: doubled = count * 2

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>
	{count} doubled is {doubled}
</p> -->

<!-- <p>Exercise 3 reactivity</p>
<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
	
	$: {
		console.log('the count is ' + count)
	}
	
	$: if(count >= 10){
		alert("count is dangerously high!")
		count = 9
	}
	
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button> -->


 <p>Exercise 4 reactivity</p>

<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers = [...numbers, numbers.length +1]
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>