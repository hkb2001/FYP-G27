from flask import Flask, send_file, request, make_response
import io

app = Flask(__name__)

# This is a sample function. Replace it with your actual logic.
def generate_file_content():
    return b"Hello, this is sample content."

@app.route('/export', methods=['POST', 'OPTIONS'])
def export():
    if request.method == 'OPTIONS':
        # Respond to preflight request
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'POST'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    # Generate the file content
    file_content = generate_file_content()

    # Create a BytesIO object to hold the file content
    file_object = io.BytesIO(file_content)

    # Create the response object
    response = make_response(file_object.getvalue())

    # Set the Content-Disposition header to trigger the file download prompt
    response.headers['Content-Disposition'] = 'attachment; filename=output_file.txt'

    # Set CORS headers
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'

    return response

if __name__ == '__main__':
    app.run(debug=True)
    