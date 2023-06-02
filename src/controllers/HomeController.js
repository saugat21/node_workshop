

const sequelize = require('@root/sequelize-config');
module.exports = {
    index: async (req, res) => {
        await sequelize.authenticate();
        const list = [
            { name: "one", address: "address" },
            { name: "two", address: "address 2" },
            { name: "5", address: "address 3" }
        ]
        res.render('index', { data: "Node", list });
    }
}