import React, { useState } from "react";
import styles from "./styles.module.css";
import TaskLists from "../TaskLists";
import Header from "../Header";
import SideNavigation from "../SideNavigation";
import Footer from "../Footer";
import useHomeHandler from "./hooks/useHomeHandler";
import Register from "../Register";
import { useDispatch } from "react-redux";

const HomeTasks = () => {
  const { isLoggedIn, setIsLoggedIn } = useHomeHandler();
  const [userId, setUserId] = useState();

  return (
    <div className={styles.container}>
      <Header />
      {isLoggedIn ? (
        <>
          <div className={styles.content}>
            <SideNavigation />
            <TaskLists />
          </div>

          <Footer />
        </>
      ) : (
        <Register setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default HomeTasks;
