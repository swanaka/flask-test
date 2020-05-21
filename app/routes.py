from simulator_app import simulator_app
from app import app
from flask import render_template, request

import quadratic_function


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/simulator_app')
def simulator():
    return simulator_app.index()


@app.route('/calculate', methods=['POST'])
def calculate():
    input_data = request.get_json()
    return_data = quadratic_function.calculate(
        input_data.a, input_data.b, input_data.c)
    return return_data
