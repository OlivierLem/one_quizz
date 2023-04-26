import { getCurrentUser } from "../apis/auth.js";

export async function userLoader() {
    return getCurrentUser();
}