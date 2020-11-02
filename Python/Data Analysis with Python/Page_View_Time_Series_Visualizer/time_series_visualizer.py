import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from pandas.plotting import register_matplotlib_converters

# https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.plotting.register_matplotlib_converters.html
register_matplotlib_converters()

# Import data (Make sure to parse dates. Consider setting index column to 'date'.)
df = pd.read_csv(
  "fcc-forum-pageviews.csv",
  index_col = "date"
)
#print(df)

# Clean data
# filter out days when the page views were in the top 2.5% of the dataset or bottom 2.5% of the dataset:
filter_bottom = df["value"] > df["value"].quantile(0.025)
filter_top = df["value"] < df["value"].quantile(0.975)
df = df[filter_bottom & filter_top]
#print(df)


def draw_line_plot():
    # Draw line plot
    fig = plt.figure(figsize = (30, 10))
    #  to modify the ticks, we will need to get axes object:
    ax = plt.subplot()
    plt.plot(
      df.index, 
      df.value,
      c = "r"
    )
    plt.title("Daily freeCodeCamp Forum Page Views 5/2016-12/2019", fontsize = "16")
    plt.xlabel("Date", fontsize = "16")
    plt.ylabel("Page Views", fontsize = "16")
    ax.xaxis.set_major_locator(plt.MaxNLocator(9))

    # Save image and return fig (don't change this part)
    fig.savefig('line_plot.png')
    return fig

def add_year_month(df):
    dataframe = df.copy()
    dataframe["year"] = pd.DatetimeIndex(df.index).year
    dataframe["month"] = pd.DatetimeIndex(df.index).month

    return dataframe

def draw_bar_plot():
    # Copy and modify data for monthly bar plot
    df_bar = add_year_month(df)
    #print(df_bar)

    # Draw bar plot
    fig = plt.figure(figsize = (12, 10))
    sns.barplot(
      data = df_bar,
      x = "year",
      y = "value",
      hue = "month",
      ci = None,      # no bootstrapping will be performed, and error bars will not be drawn
      palette = "tab10"
    )
    plt.xlabel(
      "Years",
      fontsize = "16"
    )
    plt.ylabel(
      "Average Page Views",
      fontsize = "16"
    )
    plt.xticks(
      rotation = "vertical",
      fontsize = "16"
    )
    plt.yticks(fontsize = "16")

    plt.legend(
      loc = "upper left",
      title = "Months",
      title_fontsize = 16,
      fontsize = 16,
      labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    )
    # Save image and return fig (don't change this part)
    fig.savefig('bar_plot.png')
    return fig
    
def draw_box_plot():
    # Prepare data for box plots (this part is done!)
    """
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.date]
    df_box['month'] = [d.strftime('%b') for d in df_box.date]
    """

    df_box = add_year_month(df)
    #print(df_box)

    # Draw box plots (using Seaborn)
    fig = plt.figure(figsize = (15, 5))

    # how the values are distributed within a given year:
    plt.subplot(1, 2, 1)
    sns.boxplot(
      data = df_box,
      x = "year",
      y = "value"
    )
    plt.title("Year-wise Box Plot (Trend)")
    plt.xlabel("Year")
    plt.ylabel("Page Views")

    # how the values are distributed within a given months
    plt.subplot(1, 2, 2)
    sns.boxplot(
      data = df_box,
      x = "month",
      y = "value"
    )
    plt.title("Month-wise Box Plot (Seasonality)")
    plt.xlabel("Month")
    plt.ylabel("Page Views")
    locs, labels = plt.xticks()
    plt.xticks(locs, ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])

    # Save image and return fig (don't change this part)
    fig.savefig('box_plot.png')
    return fig
