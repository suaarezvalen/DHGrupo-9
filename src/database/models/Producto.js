module.exports = (sequelize, dataTypes) => {
    let alias = "productos";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        titulo:{
            type: dataTypes.STRING(50),
        },
        precio:{
            type: dataTypes.INTEGER,
        },
        descuento:{
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING(60),
        },
        categoria_fk:{
            type: dataTypes.INTEGER,
        }
    
    };
    
    let config ={
       tableName: "producto",
       timestamps: false
    };
    

    const productos = sequelize.define(alias, cols, config);
    
    productos.associate = function(modelos){
        productos.belongsToMany(usuario, { 
            as: "compras",
            through: 'compra_producto',
            foreignKey: "producto_fk",
            otherKey: "usuario_fk",
            timestamps: false
        });

    }

    return productos;
}