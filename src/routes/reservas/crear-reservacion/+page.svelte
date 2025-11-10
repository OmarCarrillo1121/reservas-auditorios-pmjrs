<!-- <script>
  import { ProgressStepper, Label, Input, Button } from "flowbite-svelte";
  import { onMount } from "svelte";

  let currentStep = 0;

  const steps = [
    { label: "Account", status: "current" },
    { label: "Payment", status: "pending" },
    { label: "Confirm", status: "pending" }
  ];

  function updateStepper() {
    steps.forEach((s, i) => {
      if (i < currentStep) s.status = "completed";
      else if (i === currentStep) s.status = "current";
      else s.status = "pending";
    });
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStepper();
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      updateStepper();
    }
  }

  onMount(updateStepper);
</script>

<ProgressStepper {steps} class="mb-8" />

{#if currentStep === 0}
  <form on:submit|preventDefault={nextStep}>
    <h3 class="mb-4 text-lg font-medium">Account details</h3>
    <div class="grid gap-4 sm:grid-cols-2 mb-4">
      <div>
        <Label for="username">Username</Label>
        <Input id="username" name="username" placeholder="username.example" required />
      </div>
      <div>
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="name@company.com" required />
      </div>
      <div>
        <Label for="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" required />
      </div>
      <div>
        <Label for="confirm-password">Confirm password</Label>
        <Input id="confirm-password" type="password" placeholder="••••••••" required />
      </div>
    </div>
    <Button type="submit">Next Step: Payment Info</Button>
  </form>
{/if}

{#if currentStep === 1}
  <form on:submit|preventDefault={nextStep}>
    <h3 class="mb-4 text-lg font-medium">Payment Info</h3>
    <div class="grid gap-4 sm:grid-cols-2 mb-4">
      <div>
        <Label for="card">Card Number</Label>
        <Input id="card" placeholder="1234 5678 9012 3456" required />
      </div>
      <div>
        <Label for="expiry">Expiry Date</Label>
        <Input id="expiry" placeholder="MM/YY" required />
      </div>
      <div>
        <Label for="cvv">CVV</Label>
        <Input id="cvv" placeholder="123" required />
      </div>
    </div>
    <div class="flex justify-between">
      <Button color="gray" type="button" on:click={prevStep}>Back</Button>
      <Button type="submit">Next Step: Confirm</Button>
    </div>
  </form>
{/if}

{#if currentStep === 2}
  <section>
    <h3 class="mb-4 text-lg font-medium">Confirm Details</h3>
    <p class="mb-4">Review all your information before submitting.</p>
    <div class="flex justify-between">
      <Button color="gray" on:click={prevStep}>Back</Button>
      <Button color="green">Submit</Button>
    </div>
  </section>
{/if} -->

<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let nombre = '';
	let email = '';
	let mensaje = '';

	$: valido = nombre.trim() && email.includes('@') && mensaje.length > 10;
</script>

<form method="POST" use:enhance class="space-y-4 p-4 border rounded-md max-w-md mx-auto">
	<h2>Formulario de contacto</h2>

	<label>
		Nombre:
		<input type="text" name="nombre" bind:value={nombre} required />
	</label>

	<label>
		Correo:
		<input type="email" name="email" bind:value={email} required />
	</label>

	<label>
		Mensaje:
		<textarea name="mensaje" bind:value={mensaje} required></textarea>
	</label>

	<button type="submit" disabled={!valido}>Enviar</button>

	{#if $page.form?.success}
		<p class="text-green-600 mt-2">✅ Mensaje enviado correctamente.</p>
	{:else if $page.form?.error}
		<p class="text-red-600 mt-2">❌ {$page.form.error}</p>
	{/if}
</form>

