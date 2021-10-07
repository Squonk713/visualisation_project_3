-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "global_happiness_data" (
    "country" VARCHAR   NOT NULL,
    "region" VARCHAR   NOT NULL,
    "year" INTEGER   NOT NULL,
    "overall_rank" FLOAT   NOT NULL,
    "happiness_score" FLOAT   NOT NULL,
    "gdp_per_capita" FLOAT   NOT NULL,
    "life_expectancy" FLOAT   NOT NULL
);

CREATE TABLE "global_happiness_mean_values" (
    "overall_rank" FLOAT   NOT NULL,
    "happiness_score" FLOAT   NOT NULL,
    "gdp_per_capita" FLOAT   NOT NULL,
    "life_expectancy" FLOAT   NOT NULL
);

