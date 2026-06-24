function status(request, response) {
  response.status(200).json({ chave: "Chaves" });
}

export default status;
