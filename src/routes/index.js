import {Router as expressRouter} from 'express';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger.json';
import talkRoutes from './talk';
import attendeeRoutes from './attendee';

const router = expressRouter();
router.use('/talks', talkRoutes);
router.use('/attendee', attendeeRoutes);
// router.use('/docs', swaggerUi.serve);
// router.get('/docs', swaggerUi.setup(swaggerDocument));

export default router;
