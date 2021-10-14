import psycopg2
from flask import Flask, jsonify, render_template
from config import password, username

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/data')
def get_happiness_data():
    
    con = psycopg2.connect('postgres://qdqvpaiqchrapq:1f0d8f0c7a3d8508ea73390c9d14503f636a7049c905c8b55657846df9042dc9@ec2-34-251-245-108.eu-west-1.compute.amazonaws.com:5432/dbvcq7f0nesi8o'.format(username, password))  
    print(con)
    mylist = []
    yearlist = [2015,2016,2017,2018,2019]
    mydict ={}
    cursor = con.cursor()
    cursor.execute("""select * from  global_happiness_data""")
    result = cursor.fetchall()
    for row in result:
        mylist.append({"country":row[0],"region":row[1],"year":row[2],"overall_rank":row[3],
             "happiness_score":row[4],"gdp_per_capita":row[5],"life_expectancy":row[6]})
    mydict["year"] = yearlist
    mydict["plotdata"] = mylist
    return jsonify(mydict) 



if __name__ == "__main__":
  app.run()
