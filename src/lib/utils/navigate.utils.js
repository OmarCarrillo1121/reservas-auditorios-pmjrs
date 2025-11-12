import { goto } from "$app/navigation";

$: console.log('Entrando a boton')
export function navigateTo(route) {
    goto(route);
}