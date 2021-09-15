module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(50),
        },
        mail:{
            type: dataTypes.STRING(70),
        },
        usuario:{
            type: dataTypes.STRING(70),
        },
        clave:{
            type: dataTypes.STRING(60),
        },
        img:{
            type: dataTypes.STRING(200),
        },
    
    };
    
    let config ={
       tableName: "usuario",
       timestamps: false
    };
    

    const Usuario = sequelize.define(alias, cols, config); 

    return Usuario;
}
