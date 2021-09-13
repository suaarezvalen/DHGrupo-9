module.exports = (sequelize, dataTypes) => {
    let alias = "usuarios";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre_apellido:{
            type: dataTypes.STRING(50),
        },
        e_mail:{
            type: dataTypes.STRING(70),
        },
        nombre_usuario:{
            type: dataTypes.STRING(70),
        },
        clave:{
            type: dataTypes.STRING(60),
        },
        imagen_usuario:{
            type: dataTypes.STRING,
        }
    
    };
    
    let config ={
       tableName: "usuario",
       timestamps: false
    };
    

    const usuarios = sequelize.define(alias, cols, config);
    
    

    return usuarios;
}
