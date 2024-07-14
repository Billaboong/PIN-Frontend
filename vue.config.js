module.exports = {
  devServer: {
    port: 8081,
   proxy: 'http://localhost:8000' //Change this URL to match your API endpoint

  }
}