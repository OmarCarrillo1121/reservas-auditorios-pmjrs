import { writable } from "svelte/store";

export const auth = writable({
    user: null,
    token: null
});

if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
        auth.set({
            token,
            user: JSON.parse(user)
        });
    }
}