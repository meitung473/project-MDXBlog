/**
 * just an example.
 * server action way, it causes re-render current route
 * not suitable for changing theme with cookies
 */
"use server";
import { cookies } from "next/headers";

export async function actionSetCookie(name, value, options) {
    cookies().set(name, value, options);
}
