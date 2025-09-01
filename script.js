<style>
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 0;
    margin: 0;
  }
  .container {
    background: white;
    padding: 25px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  form label {
    display: block;
    margin-bottom: 6px;
    margin-top: 12px;
    font-weight: bold;
  }
  form input[type="text"],
  form input[type="date"],
  form textarea,
  form input[type="file"] {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  form textarea {
    resize: vertical;
  }
  .gender-group {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
  }
  .gender-group label {
    font-weight: normal;
  }
  button {
    width: 100%;
    margin-top: 20px;
    padding: 12px;
    background: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #0056b3;
  }
  #message {
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
  }
  #message.success {
    color: green;
  }
  #message.error {
    color: red;
  }
</style>
