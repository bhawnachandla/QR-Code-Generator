# QR-Code Generator

This simple Node.js script prompts the user to enter a URL, generates a QR code image based on the entered URL, and saves the URL to a text file.

## Prerequisites

Make sure you have Node.js installed on your system.

## Installation

1. Clone this repository or download the script file.

2. Navigate to the directory where the script is located.

3. Install the required npm packages by running the following command:

## Usage

1. Run the script by executing the following command:

2. You will be prompted to enter a URL. Type the URL and press Enter.

3. The script will generate a QR code image based on the entered URL and save it as `qr_img.png`.

4. The entered URL will also be saved to a text file named `URL.txt`.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For prompting user input.
- [qr-image](https://www.npmjs.com/package/qr-image): For generating QR code images.
- [fs](https://nodejs.org/api/fs.html): Node.js native module for file system operations.


