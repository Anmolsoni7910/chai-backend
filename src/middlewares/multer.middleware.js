import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage,
})
























// jaha jaha file upload karne ki jarurat paregi baha multer ko as a middleware use karenge
// jasse registation me jarurat parega baha esko use kar lenge or login me nahi
// multer ka use file ke leya keya jata hai kukii json to req.body se mel jata hai lakin file nahi
//cb -> call back hai
//public/temp me local store kar rahe hai file ko fhir bahi file upload me chali jaygi