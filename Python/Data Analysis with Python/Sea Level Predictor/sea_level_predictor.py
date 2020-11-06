import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress
import numpy as np

def draw_plot():
    # Read data from file
    df = pd.read_csv("epa-sea-level.csv")
    #print(df.columns)
    #print(df.head())

    def predict_sea_level(df, year = 2050):
      x = df.Year
      y = df["CSIRO Adjusted Sea Level"]
      slope, intercept, r, p, std_err = linregress(x, y)

      def myfunc(x):
        return slope * x + intercept

      sea_level = myfunc(year)

      x_2050 = np.arange(x.min(), 2050)
      model = list(map(myfunc, x_2050))

      return x, x_2050, y, model, sea_level

    x, x_2050, y, model, sea_level = predict_sea_level(df)

    plt.scatter(x, y)
    plt.plot(x_2050, model, c = "r")
    plt.hlines(y = sea_level, xmin = x.min(), xmax = 2050, color = 'r', linestyle = (0, (1, 10)))
    txt = f"Predicted sea level: {'{:.2f}'.format(sea_level)} inches."
    plt.text(1880, sea_level - 1, txt)

    # Create second line of best fit
    df_from_2000 = df[df["Year"] >= 2000]
    x2, x2_2050, y2, model2, sea_level2 = predict_sea_level(df_from_2000)
    plt.plot(x2_2050, model2, c = "black")
    plt.hlines(y = sea_level2, xmin = x.min(), xmax = 2050, color = 'black', linestyle = (0, (1, 10)))
    txt = f"Predicted sea level: {'{:.2f}'.format(sea_level2)} inches."
    plt.text(1880, sea_level2 - 1, txt)


    # Add labels and title
    plt.xlabel("Year")
    plt.ylabel("Sea Level (inches)")
    plt.title("Rise in Sea Level")
    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()