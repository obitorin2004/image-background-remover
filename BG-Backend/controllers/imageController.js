import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';

const removeBgImage = async (req, res) => {
    try {
        console.log('Received file:', req.file);
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        // Get the uploaded file path
        const imagePath = req.file.path;

        // Read the file as a stream
        const imageFile = fs.createReadStream(imagePath);

        // Create FormData for the API request
        const formData = new FormData();
        formData.append('image_file', imageFile);

        // Call the ClipDrop API
        const { data } = await axios.post(
            'https://apis.clipdrop.co/remove-background/v1',
            formData,
            {
                headers: {
                    'x-api-key': process.env.CLIPDROP_API_KEY,
                    ...formData.getHeaders(),
                },
                responseType: 'arraybuffer',
            }
        );

        // Convert the response to a base64 image
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

        res.json({ success: true, resultImage, message: "Image background removed successfully" });
    } catch (error) {
        console.error('Remove BG Error:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export { removeBgImage };