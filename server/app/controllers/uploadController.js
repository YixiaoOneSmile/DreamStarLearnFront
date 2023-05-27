const multer = require('multer');
const path = require('path');

// Set multer storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:/Users/28635/Desktop/upload/') // 上传文件的目录
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname); // 获取文件扩展名
    let filename = Date.now() + ext; // 文件名为时间戳+扩展名
    cb(null, filename) 
  }
})

var upload = multer({ storage: storage });

exports.uploadFile = (req, res) => {
  const uploadSingle = upload.single('file');

  uploadSingle(req, res, function(err) {
    if (err) {
      return res.status(400).send("Error uploading file: " + err.message);
    }
    // Successful upload
    const fileUrl = `http://your-server.com/uploads/1`;
    // ${req.file.filename}
    res.send({message: 'Upload successful', fileUrl: fileUrl});
  });
};
