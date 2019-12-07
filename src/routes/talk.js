import {Router as expressRouter} from 'express';
import {ConferenceMiddleware} from '../middlewares';
import {TalkController} from '../controllers';

const {onTalkCreate, authenticateTalk} = ConferenceMiddleware;
const {createTalk, viewTalks, deleteTalk} = TalkController;

const router = expressRouter();

router.post('/', onTalkCreate, createTalk);
router.get('/', viewTalks);
router.delete('/:talkId', authenticateTalk, deleteTalk);
export default router;
