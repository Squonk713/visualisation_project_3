import psycopg2
from flask import Flask, jsonify, render_template
from config import password, username

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/data')
def get_happiness_data():
    con = psycopg2.connect('postgres://{}:{}@localhost:5432/world_happiness_rank'.format(username, password))  
    print(con)
    cur = con.cursor()
    cur.execute("""select * from  global_happiness_data""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

@app.route('/mean_data')
def get_happniness_mean_vals_data():
    con = psycopg2.connect('postgres://{}:{}@localhost:5432/world_happiness_rank'.format(username, password))  
    print(con)
    cur = con.cursor()
    cur.execute("""select * from  global_happiness_mean_values""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)


if __name__ == "__main__":
  app.run()
