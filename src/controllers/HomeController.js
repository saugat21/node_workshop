module.exports = {
    index: (req, res) => {
        const list = [
            { name: "one", address: "address" },
            { name: "two", address: "address 2" },
            { name: "three", address: "address 3" }
        ]
        res.render('index', { data: "Node", list });
    }
}