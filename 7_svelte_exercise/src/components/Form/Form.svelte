<script>
  import Button from "../Button/Button.svelte";
  import Input from "../Input/Input.svelte";

   let name =""
   let email =""

  export function click(){
    console.log(name,email)
  }

</script>

<div>
    <Input name="name" type="text" placeholder="Please input your name" bind:value={name}/>
    <Input name="email" type="email" placeholder="Please input your email" bind:value={email}/>
    <Button clickFunc={click} id="submit-button">Submit</Button>
</div>
