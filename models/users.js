import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const dataDir = path.resolve("data");
const filePath = path.join(dataDir, "users.json");

export async function initializeDataFile() {
    await fs.mkdir(dataDir, { recursive: true });

    try {
        await fs.access(filePath);
    } catch {
        await fs.writeFile(filePath, JSON.stringify([]));
    }
}

async function readJSON() {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

async function writeJSON(data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function getAllUsers() {
    return await readJSON();
}

export async function getUserById(id) {
    const users = await readJSON();
    return users.find(u => u.id === id);
}

export async function findUserByEmail(email) {
    const users = await readJSON();
    return users.find(u => u.email === email);
}

export async function createUser({ username, email, password }) {
    const users = await readJSON();

    const exists = users.find(u => u.email === email);
    if (exists) {
        throw new Error("User already exists");
    }

    const newUser = {
        id: randomUUID(),
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    await writeJSON(users);

    return newUser;
}