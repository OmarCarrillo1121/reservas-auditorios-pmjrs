<script>
  export let path;
  export let size = 24;
  export let color = "currentColor";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width={size}
  height={size}
  fill={color}
>
  <path d={path} />
</svg>