import {Router as expressRouter} from 'express';
import {ConferenceMiddleware} from '../middlewares';
import {AttendeeController} from '../controllers';

const {onAttendeeCreate, authenticateAttendee, authenticateTalk} = ConferenceMiddleware;
const {createAttendee, addAttendeeToTalk, viewAttendees} = AttendeeController;

const router = expressRouter();

router.post('/', onAttendeeCreate, createAttendee);
// attend?talkId=1&attendeeId=5
router.post('/attend', authenticateAttendee, authenticateTalk, addAttendeeToTalk);
router.get('/', viewAttendees);
export default router;
