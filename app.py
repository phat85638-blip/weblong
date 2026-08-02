from flask import Flask, render_template
from dotenv import load_dotenv
import os

# Load biến môi trường từ file .env
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'default_secret_key_123')

# Lấy Discord token (nếu dùng)
DISCORD_TOKEN = os.getenv('DISCORD_TOKEN', '')

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    debug_mode = os.getenv('DEBUG', 'True').lower() == 'true'
    app.run(debug=debug_mode, host='0.0.0.0')