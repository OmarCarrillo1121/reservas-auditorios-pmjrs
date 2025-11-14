import { redirect } from "@sveltejs/kit";

export function load() {
    if (typeof window === "undefined") return;

    const userString = localStorage.getItem("user");
    if (!userString) throw redirect(302, "/login");

    const user = JSON.parse(userString);

    if (user.rolUsuario !== "admin") {
        throw redirect(302, "/forbidden");
    }

    return { user };
}