const loginController = {
  loginPost: (req, res) => {
    const { email, password } = req.body;
    console.log("form data:", email, password);
    res.status(200).send("Données reçues");
  },
};

// === EXPORTS === //
module.exports = loginController;
