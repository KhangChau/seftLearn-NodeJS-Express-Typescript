const auth = (req, res) => {
    const { name } = req.body;
    // console.log(`${name} already login!`);
    res.send(`cam on ${name} vi da den!`)
    const idPerson = people.length + 1;
    return res.status(200).json({ success: true, person:{id: idPerson, name}})
};

module.exports = { auth };