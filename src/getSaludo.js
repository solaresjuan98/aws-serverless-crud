const enviarSaludo = async () => {
  return {
    status: 200,
    message: "Hola que tal! ",
  };
};

module.exports = {
  enviarSaludo,
};
