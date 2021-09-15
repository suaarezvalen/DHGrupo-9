module.exports = (sequelize, dataTypes) => {
    let alias = "categorias";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING,
        }
    };
    
    let config ={
       tableName: "categoria",
       timestamps: false
    };
    

    const categorias = sequelize.define(alias, cols, config);
    
    /*categorias.associate = function(modelos){
        categorias.hasMany(modelos.producto,{
            as:"categorias",
            foreignKey: "categoria_fk"
        });
    }*/
    

    return categorias;
}