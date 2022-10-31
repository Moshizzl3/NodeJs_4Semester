<script>
  import Button from "../Button/Button.svelte";
  import Input from "../Input/Input.svelte";
  import UserMessage from "../UserMessage.svelte/UserMessage.svelte";

  let name = "";
  let email = "";
  let messageToUser ="";

  export async function click() {
    const reciever = { name: name, mail: email };

    const response = await fetch("http://localhost:8089/email", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reciever),
    });
    const data = await response.json()

    if (response.ok){
      messageToUser = `Email sent to: ${data.data.accepted}`
      name = "";
      email = "";
    }
    else{
      messageToUser = `Email was not sent, with error: ${data.data}. Please contact system owner`
    }
  }
</script>

<div>
  <Input
    name="name"
    type="text"
    placeholder="Please input your name"
    bind:value={name}
  />
  <Input
    name="email"
    type="email"
    placeholder="Please input your email"
    bind:value={email}
  />
  <Button clickFunc={click} id="submit-button">Submit</Button>
  <UserMessage messageToUser={messageToUser}/>
</div>
