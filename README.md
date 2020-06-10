# Backend de tickets y usuarios
---------------
## programas necesarios
- Node.js v12.18.0
- Npm
- MongoDB
- Postman

## Antes de iniciar Proyecto
una vez instalados los programas en el SO.
dirigirse a la carpeta desde terminal 
y ejecutar comando `install` para instalar todas las dependencias.

```
npm install
```

## Iniciar Proyecto
ejecutar comando start para iniciar la app server.
este comando esta definido en el archivo `package.json`

```
npm start
```

iniciar servidor mongoDB con comando `mongod` en otra terminal


## Iniciar Peticiones 

desde postman puede importar las peticiones configuradas para el proyecto:

> backend/crud-test.postman_collection

al iniciar pruebas en postman debe crear el unico perfil admin para el proyecto agregando el siguiente atributo al `body` de la peticion.
el resto de los perfiles vendran con admin:false por defecto.

```
"admin": true,
```

al iniciar session, la peticion retornara un objeto JSON el cual contiene el token en el atributo `jwt`:

```
{
    "user": {
        "admin": false,
        "_id": "5ee0307377460a24f8cb0630",
        "email": "andres@hotmail.com",
        "name": "andres",
        "password": "$2a$10$aKts9mlhpxXZwHXoZS6yHuEhrbPy99730/ECZtjCocKhk1BRrsBRC",
        "__v": 0
    },
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTAzMDczNzc0NjBhMjRmOGNiMDYzMCIsImlhdCI6MTU5MTc1MDc3Mn0.TuC0CMh_cawRncTjlvExvzUz1Z5w0ocOcDTQowZKbTQ"
}
```

este token debera ser enviado en los headers de las demas peteciones segun sea el caso.

## flujo 
al crear el usuario e iniciar sesion podra crear ticket, definiendo atributos de `user_name` y `pedido` (user_name requerido):
el nombre del atributo `user_name` debe coincidir con algun nombre de usuario

```
{
	"user_name":"andres",
	 "pedido": true
}
```

### Tickets
al crear los ticket se podran consultar todos los ticket o los ticket asignados a cada usuario.

el token enviado a la peticion de `consultar tickets por usuario` resultara el criterio de busqueda de los tickets asignado a ese usuario
