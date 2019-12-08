module.exports =  function (sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        // timestamp: true,
        datetime: true,
    }
    )
    return Burger;
}
