import React, { useEffect, useState } from "react";
import { useServices } from "../context/ServiceProvider";
import type { User } from "../services/UserService";
import styles from "./UserProfile.module.css";
import Wallpaper from "../assets/2b-wallpaper.gif"

const UserProfile: React.FC = () => {
  const { userService } = useServices();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    userService.getUser().then(setUser);
  }, [userService]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.avatar} style={{
            width: "30%"
        }}>
          <img style={{
            overflow: "hidden",
            borderRadius: "50%",
            aspectRatio: "1 / 1"
          }} src="https://i.pinimg.com/474x/e8/ea/cf/e8eacf394e000d9216499cf023d0e8c0.jpg" alt="" />
        </div>
        <h2>Perfil</h2>
        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
