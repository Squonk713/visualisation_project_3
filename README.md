## World Happiness Report- An Analysis 


![Title Image](Images/README_image.jpg)

------------------------------------------------------
## Contents

* [Dataset](#dataset-header)
* [Project Outline](#project-header)
* [Collaborators](#team-header)


## <a id="dataset-header"></a>Dataset

We used the [World Happiness Report Dataset](https://www.kaggle.com/unsdsn/world-happiness)\
Available from [Kaggle.com](https://www.kaggle.com)

There are 5 CSV files in this data set. 

* 2015.csv
* 2016.csv
* 2017.csv
* 2018.csv
* 2019.csv

CSV files are placed in the Project Data folder:



## <a id="project-header"></a>Project Outline

Using the “World Happiness Report” dataset, we will be analysing the relationship between the perceived happiness of a country’s citizens, 
the country’s GDP, and the average life expectancy.

	1. The dataset is in five separates .csv files, which we will clean using pandas to drop irrelevant columns and rename in 
     preparation for a database merge.
  
	2. We will then create SQLite database and create a table to hold the data, which we will query using our Python Flask API.
  
	3. The plots that we will use to represent the data are “Choropleth Polygon Map”, “Bubble Plot”, “Bar Charts”.
  
	4. The Choropleth map will use a separate dataset, which will be the average of all five years data.
  
	5. The plots will be changed using the selector to change the regions.
  
	6. The dataset will be changed by selecting the years from the dropdown selector, which will update all plots 
     with the new data except the map.
  
	7. We will be using the JavaScript Library “FusionCharts” for our 3D bar chart to meet the requirement to 
     use an unknown library for the project
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Overview of the Visualization 

#### Choropleth Polygon Map

•	The Choropleth map will use a separate dataset, which will be the average of all five years data
 #### Charts and Plots
 
The dataset will be changed by selecting the data from the dropdown selector, which will update all plots with the new datas.


#### Bubble Plot
For the bubble plot we will have

Bubble colour = Region

Size of Bubble = Happiness Score

X Values = GDP per Capita

Y Values = Lifetime Expectancy

Hover Text = Region and Happiness Score

Selector = Year

#### 3D Bar Charts
For the bar chart we are planning to use the fusionchart for 3D bar chart with 

X Values = Year

Y Values = Happiness Score

Hover Text = Region and Happiness Score

Selector = Country

----------------------------------------------------------------------------------------------------------------------------

### Data Sources
We used Kaggle.com to get our data, we used following five SV files for our datasets that we 
processed and cleaned to get our final dataset.
 
 https://www.kaggle.com/unsdsn/world-happiness?select=2015.csv
 
 https://www.kaggle.com/unsdsn/world-happiness?select=2016.csv

 https://www.kaggle.com/unsdsn/world-happiness?select=2017.csv
 
 https://www.kaggle.com/unsdsn/world-happiness?select=2018.csv
 
 https://www.kaggle.com/unsdsn/world-happiness?select=2019.csv


 
----------------------------------------------------------------------------------------------------------------------------

### Task Breakdown

1. Data cleaning and processing in Pandas - Jesse
2. Database creation in SQL – Isha
3. JavaScript coding for plots – Jessica 
4. Coding for the choropleth map – Jesse
5. Rendering the HTML using Flask – Jessica and Isha 
6. Project Presentation  – All the team members 

----------------------------------------------------------------------------------------------------------------------------

### Data Cleaning
Irrelevant columns were dropped and remaining columns renamed to formalise across all five datasets
A "Year" column was added for each dataset as well as a "Region" column for those that were missing
Title method was used to formalise all capitalisation for Country and Region columns across all datasets
Lamda function then assigned region values by referencing an existing region column
Five dataframes were then concatenated
Removed any country values that did not feature in each of the five datasets
Exported to csv for use with our plots
grouped by country and applied mean function
Exported a second csv file for use with our map visualisation

 -----------------------------------------------------------------------------------

## <a id="team-header"></a>Collaborators

* [Isha Singh](https://github.com/isha167)
* [Jesse Edwards](https://github.com/Squonk713)
* [Jessica Uppal](https://github.com/JessicaUppal)

