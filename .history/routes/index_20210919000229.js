const { route } = require("express/lib/router");

const app = express();
const router = express.Router({ mergeParams: true });

route.route('/')