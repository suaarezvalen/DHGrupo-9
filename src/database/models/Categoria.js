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
    
    

    return categorias;
}