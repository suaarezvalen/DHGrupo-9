module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria";
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
    

    const Categoria = sequelize.define(alias, cols, config);
    
    Categoria.associate = function (modelos){

        Categoria.hasMany(modelos.Producto, {   
          as: "producto",
          foreignKey: "categoria_fk"
        });
      }
    

    return Categoria;
}