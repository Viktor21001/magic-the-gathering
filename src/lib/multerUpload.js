const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/media/input/');
  },
  filename: (req, file, cb) => {
    // req.session.fileName = String(file.originalname);
    cb(null, file.originalname);
  }
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
