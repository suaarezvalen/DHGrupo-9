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
            type: dataTypes.date,
        }
    
    };
    
    let config ={
       tableName: "venta_producto",
       timestamps: false
    };
    

    const ventasproductos = sequelize.define(alias, cols, config);
    
    

    return ventasproductos;
}