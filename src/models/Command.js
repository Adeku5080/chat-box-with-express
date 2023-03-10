 module.exports = (sequelize ,DataTypes)=>{
    const Command   = sequelize.define ("command",
    {
        command_code :DataTypes.INTEGER,
        command_value :DataTypes.INTEGER  
    },
    {

    })

    return Command;
 }