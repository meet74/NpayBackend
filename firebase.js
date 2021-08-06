var admin = require("firebase-admin");
var serviceAccount = require("../admin.json");

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
};

admin.initializeApp(firebaseConfig);

module.exports = {
  admin,
};
