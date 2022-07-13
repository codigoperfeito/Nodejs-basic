exports.homePage = (req,res)=> {
    res.send(`
    <form action="/" method="POST">
    nome do cliente: <input type="text" name="nome">
    <button> Olá mundo</button>
    </form>
    `);
}
exports.firstPost = (req,res) => {
    res.send('Agora foi mlk')
}