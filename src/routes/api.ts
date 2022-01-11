import { Router } from 'oak';
import * as ApiController from 'controller/api_controller.tsx';

const router = new Router();
router.get('/weather/:city', ApiController.fetchWeather);

export default router;
