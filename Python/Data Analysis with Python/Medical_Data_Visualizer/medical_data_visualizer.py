import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
from preprocess import calculate_BMI, normalize_data

# Import data
df = pd.read_csv("medical_examination.csv")
#print(df.columns)

# Add 'overweight' column
df['overweight'] = df.apply(calculate_BMI, axis = 1)

# Normalize data by making 0 always good and 1 always bad. If the value of 'cholesterol' or 'gluc' is 1, make the value 0. If the value is more than 1, make the value 1.
df.cholesterol = df.cholesterol.apply(normalize_data)
df.gluc = df.gluc.apply(normalize_data)

# Draw Categorical Plot
def draw_cat_plot():
    # Create DataFrame for cat plot using `pd.melt` using just the values from 'cholesterol', 'gluc', 'smoke', 'alco', 'active', and 'overweight'.
    df_cat = pd.melt(
        df, 
        id_vars = ["cardio"],
        value_vars = ["cholesterol", "gluc", "smoke", "alco", "active", "overweight"]
    )

    # Group and reformat the data to split it by 'cardio'. Show the counts of each feature. You will have to rename one of the collumns for the catplot to work correctly.
    # https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.melt.html
    df_cat["total"] = 1
    df_cat = df_cat.groupby(["cardio", "variable", "value"], as_index = False).count()
    #print(df_cat)

    # Draw the catplot with 'sns.catplot()'
    # https://seaborn.pydata.org/generated/seaborn.catplot.html
    fig = sns.catplot(
        data = df_cat,
        col = "cardio",
        kind = "bar",
        x = "variable",
        y = "total",
        hue = "value"
    ).fig

    # Do not modify the next two lines
    fig.savefig('catplot.png')
    return fig

# Draw Heat Map
def draw_heat_map():
    # Clean the data
    # https://cmdlinetips.com/2018/02/how-to-subset-pandas-dataframe-based-on-values-of-a-column/
    pressure_filter = df["ap_lo"] <= df["ap_hi"]
    height_filter = (df["height"] >= df["height"].quantile(0.025)) & (df["height"] <= df["height"].quantile(0.975))
    weight_filter = (df["weight"] >= df["weight"].quantile(0.025)) & (df["weight"] <= df["weight"].quantile(0.975))

    df_heat = df[pressure_filter & height_filter & weight_filter]

    # Calculate the correlation matrix
    # https://seaborn.pydata.org/examples/many_pairwise_correlations.html
    corr = df_heat.corr()

    # Generate a mask for the upper triangle
    # https://seaborn.pydata.org/generated/seaborn.heatmap.html
    mask = np.triu(np.ones_like(corr, dtype = bool))

    # Set up the matplotlib figure
    fig, ax = plt.subplots(figsize=(11, 9))

    # Draw the heatmap with 'sns.heatmap()'
    # https://seaborn.pydata.org/generated/seaborn.heatmap.html
    sns.heatmap(
        corr,
        mask = mask,
        linewidths = 0.5,
        annot = True,            # If True, write the data value in each cell.
        fmt = ".1f",             # String formatting code to use when adding annotations.
        center = 0.08,
        cbar_kws = {
            "shrink": 0.5        # half the size of colorbar
        }
    )

    # Do not modify the next two lines
    fig.savefig('heatmap.png')
    return fig