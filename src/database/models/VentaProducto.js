module.exports = (sequelize, dataTypes) => {
    let alias = "ventasproductos";
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
        fecha_venta:{
            type: dataTypes.DATE,
        }
    
    };
    
    let config ={
       tableName: "venta_producto",
       timestamps: false
    };
    

    const ventasproductos = sequelize.define(alias, cols, config);
    
    /*ventasproductos.associate = function(modelos){
        producto.belongsToMany(usuario, { 
            as: "ventas",
            through: 'venta_producto',
            foreignKey: "producto_fk",
            otherKey: "usuario_fk",
            timestamps: false
        });

    }*/

    return ventasproductos;
}