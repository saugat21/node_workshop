
const User = require('@/models/UserModel');
module.exports = {
    index: async (req, res) => {

        const list = await User.findAll();
        res.send(list);

        // await sequelize.authenticate();
        // const list = [
        //     { name: "one", address: "address" },
        //     { name: "two", address: "address 2" },
        //     { name: "5", address: "address 3" }
        // ]
        // res.render('index', { data: "Node", list });
    },
    new: async (req, res) => {
        const user = User.build({ name: 'test', email: 'saugat21', address: 'btm' });
        await user.save();
        res.send('success');
    }
}