import pandas as pd


def calculate_demographic_data(print_data=True):
    # Read data from file
    df = pd.read_csv("adult.data.csv")
    print(df.columns)

    # How many of each race are represented in this dataset? This should be a Pandas series with race names as the index labels.
    race_count = df.race.value_counts()

    # What is the average age of men?
    average_age_men = df[df["sex"] == "Male"].age.mean().round(1)

    # What is the percentage of people who have a Bachelor's degree?
    percentage_bachelors = (df.education.value_counts(normalize = True).Bachelors * 100).round(1)

    # What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
    # What percentage of people without advanced education make more than 50K?
    # with and without `Bachelors`, `Masters`, or `Doctorate`
    higher_education = df[
      (df.education == "Bachelors") |
      (df.education == "Masters") | 
      (df.education == "Doctorate")
    ]
    higher_education_50 = higher_education[higher_education.salary == ">50K"]
    
    lower_education = df[
      (df.education != "Bachelors") &
      (df.education != "Masters") & 
      (df.education != "Doctorate")
    ]

    lower_education_50 = lower_education[lower_education.salary == ">50K"]

    # percentage with salary >50K
    higher_education_rich = round(len(higher_education_50) / len(higher_education) * 100, 1)
    lower_education_rich = round(len(lower_education_50) / len(lower_education) * 100, 1)

    # What is the minimum number of hours a person works per week (hours-per-week feature)?
    min_work_hours = df["hours-per-week"].min()

    # What percentage of the people who work the minimum number of hours per week have a salary of >50K?
    num_min_workers = df[
      df["hours-per-week"] == min_work_hours
    ]
    num_min_workers_50 = num_min_workers[num_min_workers.salary == ">50K"]

    rich_percentage = round(len(num_min_workers_50) / len(num_min_workers) * 100, 1)

    # What country has the highest percentage of people that earn >50K?
    earning_country = df.groupby(["native-country", "salary"]).size().reset_index(name = "sum")
    earning_country_pivot = earning_country.pivot(
      columns = "salary",
      index = "native-country",
      values = "sum"
    ).reset_index()
    earning_country_pivot["percentage"] = earning_country_pivot[">50K"] / (earning_country_pivot["<=50K"] + earning_country_pivot[">50K"])
    earning_country_pivot.sort_values(
      by = ["percentage"],
      inplace = True,
      ascending = False,
      ignore_index = True
    )

    highest_earning_country = earning_country_pivot.iloc[0]["native-country"]
    highest_earning_country_percentage = (earning_country_pivot.iloc[0]["percentage"] * 100).round(1)

    # Identify the most popular occupation for those who earn >50K in India.
    top_IN_occupation = df[
      (df["native-country"] == "India") & 
      (df.salary == ">50K")
    ].occupation.value_counts().index[0]

    # DO NOT MODIFY BELOW THIS LINE

    if print_data:
        print("Number of each race:\n", race_count) 
        print("Average age of men:", average_age_men)
        print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
        print(f"Percentage with higher education that earn >50K: {higher_education_rich}%")
        print(f"Percentage without higher education that earn >50K: {lower_education_rich}%")
        print(f"Min work time: {min_work_hours} hours/week")
        print(f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
        print("Country with highest percentage of rich:", highest_earning_country)
        print(f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
        print("Top occupations in India:", top_IN_occupation)

    return {
        'race_count': race_count,
        'average_age_men': average_age_men,
        'percentage_bachelors': percentage_bachelors,
        'higher_education_rich': higher_education_rich,
        'lower_education_rich': lower_education_rich,
        'min_work_hours': min_work_hours,
        'rich_percentage': rich_percentage,
        'highest_earning_country': highest_earning_country,
        'highest_earning_country_percentage':
        highest_earning_country_percentage,
        'top_IN_occupation': top_IN_occupation
    }
