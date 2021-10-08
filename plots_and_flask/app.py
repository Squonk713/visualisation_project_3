import psycopg2
import sys
from  flask import Flask,render_template
from flask import jsonify
from config import username,password



app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/data_one')
def send_data():
    con = psycopg2.connect(f'postgresql://{username}:{password}@localhost:5432/world_happiness_rank')  
    cur = con.cursor()
    cur.execute("""select * from  global_happiness_data""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

@app.route('/data_two')
def send_data():
    con = psycopg2.connect(f'postgresql://{username}:{password}@localhost:5432/world_happiness_rank')  
    cur = con.cursor()
    cur.execute("""select * from  global_happiness_mean_values""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

if __name__ == "__main__":
  app.run()
