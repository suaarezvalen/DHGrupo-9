module.exports = (sequelize, dataTypes) => {
    let alias = "comprasproductos";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        producto_fk:{
            type: dataTypes.INTEGER,
        },
        usuario_fk:{
            type: dataTypes.INTEGER,
        },
        fecha_compra:{
            type: dataTypes.DATE,
        }
    
    };
    
    let config ={
       tableName: "compra_producto",
       timestamps: false
    };
    

    const ComprasProductos = sequelize.define(alias, cols, config);
    
    /*ComprasProductos.associate = function(modelos){
        producto.belongsToMany(usuario, { 
            as: "compras",
            through: 'compra_producto',
            foreignKey: "producto_fk",
            otherKey: "usuario_fk",
            timestamps: false
        });

    }*/

    return ComprasProductos;
}