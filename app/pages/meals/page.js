import MealsGrid from "@/app/components/meals/meals-grid";
import classes from "./page.module.css";
import { getMeals } from "@/app/lib/meals";

import Link from "next/link";

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="./pages/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
