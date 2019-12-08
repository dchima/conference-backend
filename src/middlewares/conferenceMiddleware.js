import {ConferenceValidation} from '../validations';
import {Helpers} from '../utils';
import {TalkService, AttendeeService} from '../services';

const {findTalk} = TalkService;
const {findAttendee} = AttendeeService;
const {validateAttendee, validateTalk} = ConferenceValidation;

const {errorResponse} = Helpers;
/**
 * Middleware class for conference inouts
 */
export default class conferenceMiddleware {
  /**
   * Middleware method for talk validation
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - the returned values
   * @return {object} - returns and object {error or next}
   */
  static async onTalkCreate(req, res, next) {
    try {
      const validated = await validateTalk(req.body);
      if (validated) {
        next();
      }
    } catch (error) {
      errorResponse(res, {code: 400, message: error.details[0].context.label});
    }
  }

  /**
   * Middleware to check if talk exists
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {object} - retuens object {error or success}
   * @memberof conferenceMiddleware
   */
  static async authenticateTalk(req, res, next) {
    try {
      const talkId = req.params.talkId || req.query.talkId;
      const id = Number(talkId);
      const verified = await findTalk({id});
      if (verified) {
        return next();
      } else {
        return errorResponse(res, {code: 404,
          message: 'This talk does not exist'});
      }
    } catch (error) {
      errorResponse(res, {code: 401, message: error.message});
    }
  }

  /**
   * Middleware for attendee validation
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {object} - retuens object {error or success}
   * @memberof conferenceMiddleware
   */
  static async onAttendeeCreate(req, res, next) {
    try {
      const validated = await validateAttendee(req.body);
      const {email} = req.body;
      if (validated) {
        const attendee = await findAttendee({email});
        if (!attendee) {
          next();
        } else {
          errorResponse(res, {code: 409,
            message: `Attendee with email: "${email}" already exists`});
        }
      }
    } catch (error) {
      errorResponse(res, {code: 400, message: error.details[0].context.label});
    }
  }

  /**
   * Middleware to check if attendee exists
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @return {object} - retuens object {error or success}
   * @memberof conferenceMiddleware
   */
  static async authenticateAttendee(req, res, next) {
    try {
      const email = req.query.email;
      const attendee = await findAttendee({email});
      if (attendee) {
        req.attendeeId = attendee.id;
        next();
      } else {
        return errorResponse(res, {code: 404, message: 'This Attendee does not exist'});
      }
    } catch (error) {
      errorResponse(res, {code: 401, message: error.message});
    }
  }
}
