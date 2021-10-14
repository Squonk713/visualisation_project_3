    class create_dict(dict): 
  
    # __init__ function 
     def __init__(self): 
        self = dict() 
          
    # Function to add key:value 
     def add(self, key, value): 
        self[key] = value

    mydict = create_dict()

    cursor = con.cursor()
    cursor.execute("""select * from  global_happiness_data""")
    result = cursor.fetchall()
    print(result)

    for row in result:
        
        if int(row[2]) == 2015:
           mydict.add(row[0],({"country":row[0],"region":row[1],"year":row[2],"overall_rank":row[3],
           "happiness_score":row[4],"gdp_per_capita":row[5],"life_expectancy":row[6]}))
      
