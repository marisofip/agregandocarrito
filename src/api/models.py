from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    telefono = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    roles = db.relationship('Role', secondary= 'rolesUsers')
   

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    users = db.relationship('User', secondary= 'rolesUsers')

    def __repr__(self):
        return f'<Role {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }


class RoleUser(db.Model):
    __tablename__ = 'rolesUsers'
    user_id = db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True)
    role_id = db.Column("role", db.Integer, db.ForeignKey("roles.id"), primary_key=False)

    

    def __repr__(self):
        return f'<RoleUser {self.user_id}>'
        # return f'<RoleUser{self.role_id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "role_id": self.role_id
        }


class Direccion(db.Model):
    __tablename__ = 'direcciones'
    id = db.Column(db.Integer, primary_key=True)
    direccion = db.Column(db.String(250), unique=True, nullable=False)
    comuna = db.Column(db.String(80), unique=False, nullable=False)
    ciudad = db.Column(db.String(80), unique=False, nullable=False)
    codigoPostal = db.Column(db.Integer, unique=False, nullable=False)
    documentos = db.relationship('Documento', backref= 'direccion')
    pedidos = db.relationship('Pedido', backref= 'direccion')

    def __repr__(self):
        return f'<Direccion {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "direccion": self.direccion,
            "comuna": self.comuna,
            "ciudad": self.ciudad,
            "codigoPostal": self.codigoPostal,
            # do not serialize the password, its a security breach
        }


class Categoria(db.Model):
    __tablename__ = 'categorias'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), unique=True, nullable=False)
    descripcion = db.Column(db.String(80), unique=False, nullable=False)
    products = db.relationship('Product', backref= 'categoria')

    def __repr__(self):
        return f'<Categoria {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            # do not serialize the password, its a security breach
        }


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), unique=True, nullable=False)
    descripcion = db.Column(db.String(80), unique=False, nullable=False)
    precio = db.Column(db.Integer, unique=False, nullable=False)
    categoria_id = db.Column("categoria_id", db.Integer, db.ForeignKey("categorias.id"))
    

    def __repr__(self):
        return f'<Producto {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "precio": self.precio,
            "categoria_id": self.categoria_id
            # do not serialize the password, its a security breach
        }


class Pedido(db.Model):
    __tablename__ = 'pedidos'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, unique=True, nullable=False)
    direccions_id = db.Column(db.Integer, db.ForeignKey("direcciones.id"))
    status = db.Column(db.Integer, unique=False, nullable=False)
    total = db.Column(db.Integer, unique=False, nullable=False)
    pedDetalles = db.relationship('PedDetalle', backref= 'pedido')

    def __repr__(self):
        return f'<Pedido {self.id}>'

        def serialize(self):
            return {
                "id": self.id,
                "user_id": self.user_id,
                "direccion": self.direccion,
            }


class PedDetalle(db.Model):
    __tablename__ = 'pedDetalles'
    id = db.Column(db.Integer, primary_key=True)
    ped_id = db.Column(db.Integer, db.ForeignKey("pedidos.id"), primary_key=False)
    prod_id = db.Column(db.Integer, db.ForeignKey("products.id"), primary_key=False)
    cantidad = db.Column(db.Integer, unique=False, nullable=False)
    precio = db.Column(db.Integer, unique=False, nullable=False)
    producto = db.relationship('Product', backref= 'pedDetalles')
    

    def __repr__(self):
        return f'<PedDetalle {self.id}>'

        def serialize(self):
            return {
                "id": self.id,
                "ped_id": self.ped_id,
                "prod_id": self.prod_id,
                "cantidad": self.cantidad,
                "precio": self.precio,
            }


class Documento(db.Model):
    __tablename__ = 'documentos'
    id = db.Column(db.Integer, primary_key=True)
    users_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    direccions_id = db.Column(db.Integer, db.ForeignKey("direcciones.id"))
    iva = db.Column(db.Integer, unique=False, nullable=False)
    total = db.Column(db.Integer, unique=False, nullable=False)
    tipo_id = db.Column(db.Integer, db.ForeignKey("tip_documents.id"))

    def __repr__(self):
        return f'<documentos {self.id}>'

        def serialize(self):
            return {
                "id": self.id,
                "users_id": self.user_id,
                "direccion_id": self.direccion_id,
                "iva": self.iva,
                "total": self.total
            }


class DocDetalle(db.Model):
    __tablename__ = 'docDetalles'
    doc_id = db.Column(db.Integer, db.ForeignKey("documentos.id"), primary_key=True)
    prod_id = db.Column(db.Integer, db.ForeignKey("products.id"), primary_key=False)
    cantidad = db.Column(db.Integer, unique=False, nullable=False)
    precio = db.Column(db.Integer, unique=False, nullable=False)
    producto = db.relationship('Product', backref= 'docDetalles')

    def __repr__(self):
        return f'<doc_detalles {self.doc_id}>'

        def serialize(self):
            return {
                "doc_id": self.doc_id,
                "prod_id": self.prod_id,
                "cantidad": self.cantidad,
                "precio": self.precio
            }


class tip_document(db.Model):
    __tablename__ = 'tip_documents'
    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.Integer, unique=False)
    documentos = db.relationship('Documento', backref= 'tip_document')


    def __repr__(self):
        return f'<tip_documents{self.id}>'

        def serialize(self):
            return {
                "id": self.id,
                "tipo": self.tipo
            }
