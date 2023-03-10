"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Categoria, Pedido, Documento
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

## CRUD de USER
@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200




@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    
    if not email: return jsonify({"message": "Email is required"}), 400
    if not password: return jsonify({"message": "Password is required"}), 400

    foundUser = User.query.filter_by(email=email).first()
    
    if not foundUser: return jsonify({"message": "Email/Password are incorrects"}), 401
    ##if not check_password_hash(foundUser.password, password): return jsonify({"message": "Email/Password are incorrects"}), 401
    if foundUser.password != password: return jsonify({"message": "Email/Password are incorrects"}), 401

    expires = datetime.timedelta(days=3)
    access_token = create_access_token(identity=foundUser.id, expires_delta=expires)

    data = {
        "access_token": access_token,
        "user": foundUser.serialize()
    }

    return jsonify(data), 200

@api.route('/register', methods=['POST'])
def register():
    
    nombre = request.json.get('nombre')
    apellido = request.json.get('nombre')
    telefono = request.json.get('telefono')
    email = request.json.get('email')
    password = request.json.get('password')
   

    if not email: return jsonify({"message": "Email is required"}), 400
    if not password: return jsonify({"message": "Password is required"}), 400

    foundUser = User.query.filter_by(email=email).first()
    if foundUser: return jsonify({"message": "Email already exists"}), 400

    user = User()

    user.email = email
    user.password = generate_password_hash(password)
    user.nombre = nombre
    user.apellido = apellido
    user.telefono = telefono
       
    user.save()

    if user:
        expires = datetime.timedelta(days=3)
        access_token = create_access_token(identity=user.id, expires_delta=expires)

        data = {
            "access_token": access_token,
            "user": user.serialize()
        }

        return jsonify(data), 201

    ##crud productos
@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    products = list(map(lambda product: product.serialize(), products))

    return jsonify(products), 200

@api.route('/create-product', methods=['POST'])
def create_product():
    
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
    precio = request.json.get('precio')
    categoria = request.json.get('categoria')

    if not nombre: return jsonify({"message": "Nombre is required"}), 400
    if not precio: return jsonify({"message": "Precio is required"}), 400

    foundProduct = Product.query.filter_by(nombre=nombre).first()
    if foundProduct: return jsonify({"message": "Product already exists"}), 400

    product = Product()

    product.nombre = nombre
    product.descripcion = descripcion
    product.precio = precio
    product.categoria_id = categoria

    product.save()


    return jsonify(product.serialize()), 201



      ##crud categorias
@api.route('/categorias', methods=['GET'])
def get_categorias():
    categorias = Categoria.query.all()
    categorias = list(map(lambda categoria: categoria.serialize(), categorias))

    return jsonify(categorias), 200

@api.route('/create-categoria', methods=['POST'])
def create_categroriat():
    
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
      

    if not nombre: return jsonify({"message": "Nombre is required"}), 400
    if not descripcion: return jsonify({"message": "Descripcion is required"}), 400

    foundCategoria = Categoria.query.filter_by(nombre=nombre).first()
    if foundCategoria: return jsonify({"message": "Categoria already exists"}), 400

    categoria = Categoria()

    categoria.nombre = nombre
    categoria.descripcion = descripcion
   
    categoria.save()


    return jsonify(categoria.serialize()), 201


 ##crud pedidos
@api.route('/pedidos', methods=['GET'])
def get_pedidos():
    pedidos = Pedido.query.all()
    pedidos = list(map(lambda pedido: pedido.serialize(), pedidos))

    return jsonify(pedidos), 200

@api.route('/create-pedido', methods=['POST'])
def create_pedido():
    
    ##id = request.json.get('id')
    status = request.json.get('status')
    total = request.json.get('total')
    user = request.json.get('user')
    direccion = request.json.get('direccion')

    if not status: return jsonify({"message": "Status is required"}), 400
    if not total: return jsonify({"message": "Total is required"}), 400

   ## foundPedido = Pedido.query.filter_by(status=status).all()
    ## if foundPedido: return jsonify({"message": "Pedido already exists"}), 400

    pedido = Pedido()

    ##pedido.id = id
    pedido.status = status
    pedido.total = total
    pedido.user_id = user
    pedido.direcciones_id = direccion

    pedido.save()

    return jsonify(pedido.serialize()), 201

 ##crud documentos
@api.route('/documentos', methods=['GET'])
def get_documentos():
    documentos = Documento.query.all()
    documentos = list(map(lambda documento: documento.serialize(), documentos))

    return jsonify(documentos), 200

@api.route('/create-documento', methods=['POST'])
def create_documento():
    
    user = request.json.get('user')
    direccion = request.json.get('direccion')
    total = request.json.get('total')
    iva = request.json.get('iva')
    tipo_id = request.json.get('tipo_id')
    

    ##if not status: return jsonify({"message": "Status is required"}), 400
    if not total: return jsonify({"message": "Total is required"}), 400

   ## foundPedido = Pedido.query.filter_by(status=status).all()
    ## if foundPedido: return jsonify({"message": "Pedido already exists"}), 400

    documento = Documento()

    ##pedido.id = id
    documento.user_id = user
    documento.direcciones_id = direccion
    documento.total = total
    documento.iva = iva
    documento.tipo_id = tipo_id

    documento.save()

    return jsonify(documento.serialize()), 201




