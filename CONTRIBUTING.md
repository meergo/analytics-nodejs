# Contributing

This file contains information useful for contributing to the Meergo Node.js SDK.

## Testing the SDK

To test the SDK:

1. Make sure Node.js and NPM are installed. [Install Node.js](https://nodejs.org/en/download).

1. Install the dependencies:

    ```
    npm install
    ```

1. Run the tests:

    ```
    npm test
    ```

## Running the sample application

To run the sample application:

1. Make sure Node.js and NPM are installed. [Install Node.js](https://nodejs.org/en/download).

1. Install the dependencies:

    ```
    npm install
    ```

1. In `sample.js`, set the `WRITE_KEY` and `ENDPOINT` constants using values from a Meergo Node.js source.

1. If you are running the sample against a local Meergo server with a self-signed certificate, the sample application needs to trust the certificate authority (CA). For this purpose, before running the application:

   - **Option 1: Set the `CA_PATH` environment variable** to point to the root CA used by mkcert or any other self-signed certificate authority. For example, on Linux/macOS:

     ```bash
     export CA_PATH="$HOME/.local/share/mkcert/rootCA.pem"
     ```

     On Windows (PowerShell):

     ```powershell
     $env:CA_PATH = "$env:LOCALAPPDATA\mkcert\rootCA.pem"
     ```

   - **Option 2: Use the default mkcert root CA**  
     If `CA_PATH` is not set, the sample application will automatically try to detect the mkcert root CA in the standard location. Make sure `mkcert` is installed and has generated a root CA (`mkcert -install`).

   ⚠️ If the CA is not found, TLS verification will fail, and you will see an error when running the application.


1. Run the application:

    ```
    node sample/sample.js
    ```

1. You should see new logged events in the event debugger of the Meergo Node.js source.