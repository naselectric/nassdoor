from flask import Flask, render_template, request,jsonify
import json
import os

app = Flask(__name__,template_folder="templates")
@app.route('/')
def student():
   return render_template('index.html')




if __name__ == '__main__':  
	app.run(debug=True)
 
 
 
 
# if __name__ == "__main__":
#     port = int(os.getenv("PORT", 4242))
#     app.run(host="0.0.0.0", port=port, debug=True)
