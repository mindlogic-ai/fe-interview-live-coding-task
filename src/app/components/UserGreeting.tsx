// File: app/components/UserGreeting.tsx
import styles from "../page.module.css";
import { User } from "../types";

async function getUserData(): Promise<User> {
  const res = await fetch("https://api.example.com/user", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    console.error("Failed to fetch user data");
    return { name: "Guest" } as User;
  }

  return res.json();
}

export default async function UserGreeting() {
  const userData = await getUserData();

  return (
    <div className={styles.userGreeting}>
      <h2 className={styles.greetingText}>
        Welcome back, {userData.user.name}!
      </h2>
    </div>
  );
}
