module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(45),
        },
        mail:{
            type: dataTypes.STRING(45),
        },
        usuario:{
            type: dataTypes.STRING(45),
        },
        clave:{
            type: dataTypes.STRING(200),
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
    Usuario.associate = function (modelos){

    Usuario.belongsToMany(modelos.Producto, {
        as: "productos_compra",
        through: "compra_producto",   
        foreignKey: "usuario_fk",  
        otherKey: "producto_fk",    
        timestamps: false
    });

    Usuario.belongsToMany(modelos.Producto, {
        as: "productos_venta",
        through: "venta_producto",   
        foreignKey: "usuarioVenta_fk",  
        otherKey: "productoVenta_fk",    
        timestamps: false
    });
    }
    return Usuario;
}
