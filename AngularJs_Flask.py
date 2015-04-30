# -*- coding: utf-8 -*-
from flask import Flask, render_template, jsonify

app = Flask(__name__)

dados =  {'nome':'Jotagê Sales', 'cidade':'Januaria', 'estado': 'MG'}

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/consulta')
def consulta():
    return jsonify(itens = dados)

if __name__ == '__main__':
    app.run(debug= True)
